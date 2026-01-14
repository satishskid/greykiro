"use client";

import { useEffect, useState } from "react";
import { Send, MessageCircle, ExternalLink, RefreshCw } from "lucide-react";

interface TelegramPost {
  id: number;
  text: string;
  date: string;
  timestamp: number;
  links: Array<{ text: string; url: string }>;
  hasPhoto: boolean;
}

// Fallback posts when API is not available or no posts yet
const fallbackPosts: TelegramPost[] = [
  {
    id: 1,
    text: "🎓 GenAI Express Batch - Registrations Open!\n\n📅 2-week intensive program\n👨‍⚕️ For Doctors & Healthcare Professionals\n✅ IIHMR Bangalore certified\n\n🔗 Register at learn.greybrain.ai",
    date: "Pinned",
    timestamp: Date.now(),
    links: [{ text: "Register", url: "https://learn.greybrain.ai/course/gen-ai-doctors-express" }],
    hasPhoto: false,
  },
  {
    id: 2,
    text: "📢 Join our community of 500+ healthcare professionals exploring AI!\n\nWeekly insights, course updates, and exclusive content.",
    date: "Welcome",
    timestamp: Date.now() - 86400000,
    links: [],
    hasPhoto: false,
  },
];

export function TelegramFeed() {
  const [posts, setPosts] = useState<TelegramPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/telegram");
      const data = await response.json();

      if (data.posts && data.posts.length > 0) {
        setPosts(data.posts);
        setError(false);
      } else {
        // Keep fallback posts if no posts from API
        setPosts(fallbackPosts);
      }
    } catch (err) {
      console.error("Error fetching Telegram posts:", err);
      setError(true);
      setPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();

    // Refresh every 5 minutes
    const interval = setInterval(fetchPosts, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Extract first link that looks like a course/registration link
  const getActionLink = (post: TelegramPost) => {
    const courseLink = post.links.find(
      (l) =>
        l.url.includes("learn.greybrain") ||
        l.url.includes("greybrain.ai") ||
        l.url.includes("register")
    );
    return courseLink;
  };

  // Truncate text for display
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center">
              <Send className="text-[#0088cc]" size={20} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-brand-charcoal">
                Latest Updates
              </h2>
              <p className="text-xs text-gray-400 font-sans">
                Live from our Telegram channel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {loading && (
              <RefreshCw size={14} className="text-gray-400 animate-spin" />
            )}
            <a
              href="https://t.me/greybrainsoai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#0088cc] hover:text-[#0088cc]/80 flex items-center gap-1 transition-colors"
            >
              Join Channel <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((post) => {
            const actionLink = getActionLink(post);

            return (
              <div
                key={post.id}
                className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-200 transition-all"
              >
                {/* Post Content */}
                <p className="text-sm text-brand-charcoal leading-relaxed mb-3 whitespace-pre-line">
                  {truncateText(post.text)}
                </p>

                {/* Action Link */}
                {actionLink && (
                  <a
                    href={actionLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 mb-3 text-xs font-medium text-white bg-brand-blue rounded-full hover:bg-brand-blue/90 transition-colors"
                  >
                    {actionLink.url.includes("learn.greybrain")
                      ? "Enroll Now →"
                      : "Learn More →"}
                  </a>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <a
                    href="https://t.me/greybrainsoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-400 hover:text-[#0088cc] transition-colors"
                  >
                    View on Telegram
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Join CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://t.me/greybrainsoai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0088cc] text-white rounded-lg hover:bg-[#0088cc]/90 transition-colors text-sm font-medium"
          >
            <Send size={16} />
            Join Telegram Channel
          </a>
          <a
            href="https://chat.whatsapp.com/D8pR8tE6aYeLiE6PnU7gqL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-lg hover:bg-[#25D366]/90 transition-colors text-sm font-medium"
          >
            <MessageCircle size={16} />
            Join WhatsApp Group
          </a>
        </div>
      </div>
    </section>
  );
}
