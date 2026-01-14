import { Card } from "@/components/ui";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

interface BlogFeedProps {
  posts: BlogPost[];
  sidebar?: React.ReactNode;
}

export function BlogFeed({ posts, sidebar }: BlogFeedProps) {
  return (
    <div className="container-custom section-spacing">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} hoverable className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-brand-blue/10 text-brand-blue rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-sans">{post.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        {sidebar && <div className="lg:col-span-1">{sidebar}</div>}
      </div>
    </div>
  );
}
