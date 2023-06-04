// Components
import { PostCard, RecentPosts, Categories } from '@/components'

// Types
import { Post } from '@/types/Post'

const MOCK_POSTS: Post[] = [
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
            <PostCard key={index} post={post} />
          ))}
        </section>

        <aside className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <RecentPosts />
            <Categories />
          </div>
        </aside>
      </div>
    </main>
  )
}
