const MOCK_POSTS = [
  { title: 'Learn React', excerpt: 'Learning React with NextJS' },
  {
    title: 'Learn React with Tailwind CSS',
    excerpt: 'Learning React with Tailwind CSS'
  }
]

export default function Home() {
  return (
    <main className="container px-10 mx-auto mb-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <section className="col-span-1 lg:col-span-8" aria-label="posts">
          {MOCK_POSTS.map((post, index) => (
            <article key={index}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </section>

        <aside className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <section aria-label="recent posts">
              <h2>Recent Posts</h2>
            </section>

            <section aria-label="categories">
              <h2>Categories</h2>
            </section>
          </div>
        </aside>
      </div>
    </main>
  )
}
