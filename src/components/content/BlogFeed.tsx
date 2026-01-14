import { Card } from "@/components/ui";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  url?: string;
}

interface BlogFeedProps {
  posts: BlogPost[];
  sidebar?: React.ReactNode;
}

export function BlogFeed({ posts, sidebar }: BlogFeedProps) {
  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.url || `#${post.slug}`}
                target={post.url ? "_blank" : undefined}
                rel={post.url ? "noopener noreferrer" : undefined}
                className="block group"
              >
                <Card hoverable className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 bg-brand-blue/10 text-brand-blue rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-charcoal mb-1.5 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm line-clamp-2">{post.excerpt}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        {sidebar && <div className="lg:col-span-1">{sidebar}</div>}
      </div>
    </div>
  );
}
