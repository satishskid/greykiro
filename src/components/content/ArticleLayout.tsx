interface ArticleLayoutProps {
  children: React.ReactNode;
}

export function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="container-custom section-spacing">
      <div className="max-w-2xl mx-auto">
        <article className="prose prose-lg prose-gray">
          {children}
        </article>
      </div>
    </div>
  );
}
