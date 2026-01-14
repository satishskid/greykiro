import { NextResponse } from "next/server";

interface TelegramMessage {
  message_id: number;
  date: number;
  text?: string;
  caption?: string;
  photo?: Array<{ file_id: string }>;
  entities?: Array<{
    type: string;
    offset: number;
    length: number;
    url?: string;
  }>;
  caption_entities?: Array<{
    type: string;
    offset: number;
    length: number;
    url?: string;
  }>;
}

interface TelegramUpdate {
  update_id: number;
  channel_post?: TelegramMessage;
}

interface ProcessedPost {
  id: number;
  text: string;
  date: string;
  timestamp: number;
  links: Array<{ text: string; url: string }>;
  hasPhoto: boolean;
}

// Cache to store posts (in-memory, resets on server restart)
let cachedPosts: ProcessedPost[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchTelegramPosts(): Promise<ProcessedPost[]> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const channelId = process.env.TELEGRAM_CHANNEL_ID;

  if (!botToken || !channelId) {
    console.error("Missing Telegram configuration");
    return [];
  }

  try {
    // Use getUpdates to fetch recent channel posts
    // Note: This requires the bot to be admin in the channel
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/getUpdates?allowed_updates=["channel_post"]&limit=20`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    );

    if (!response.ok) {
      console.error("Telegram API error:", response.status);
      return cachedPosts;
    }

    const data = await response.json();

    if (!data.ok || !data.result) {
      console.error("Telegram API returned error:", data);
      return cachedPosts;
    }

    const posts: ProcessedPost[] = [];

    for (const update of data.result as TelegramUpdate[]) {
      const message = update.channel_post;
      if (!message) continue;

      const text = message.text || message.caption || "";
      const entities = message.entities || message.caption_entities || [];

      // Extract links from entities
      const links: Array<{ text: string; url: string }> = [];
      for (const entity of entities) {
        if (entity.type === "url") {
          const url = text.substring(entity.offset, entity.offset + entity.length);
          links.push({ text: url, url });
        } else if (entity.type === "text_link" && entity.url) {
          const linkText = text.substring(entity.offset, entity.offset + entity.length);
          links.push({ text: linkText, url: entity.url });
        }
      }

      // Format date
      const date = new Date(message.date * 1000);
      const formattedDate = formatRelativeTime(date);

      posts.push({
        id: message.message_id,
        text: text,
        date: formattedDate,
        timestamp: message.date,
        links,
        hasPhoto: !!message.photo,
      });
    }

    // Sort by timestamp descending (newest first)
    posts.sort((a, b) => b.timestamp - a.timestamp);

    // Return only the 5 most recent posts
    return posts.slice(0, 5);
  } catch (error) {
    console.error("Error fetching Telegram posts:", error);
    return cachedPosts;
  }
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

export async function GET() {
  const now = Date.now();

  // Return cached posts if still fresh
  if (cachedPosts.length > 0 && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json({ posts: cachedPosts, cached: true });
  }

  // Fetch fresh posts
  const posts = await fetchTelegramPosts();

  if (posts.length > 0) {
    cachedPosts = posts;
    lastFetchTime = now;
  }

  return NextResponse.json({ posts: cachedPosts, cached: false });
}
