// Components
import { PostCard, PostWidget, Categories } from '@/components'

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
    <main className="container px-8 mx-auto mb-8 sm:px-10">
      <section
        className="grid content-center gap-4 min-h-[12rem] sm:min-h-[16rem] place-items-center"
        aria-label="hero"
      >
        <h1 className="text-3xl font-extrabold tracking-wider uppercase">
          Reactify.
        </h1>
        <p className="text-lg text-zinc-400">
          A blog focused on Javascript and Web Development technologies.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <section className="col-span-1 lg:col-span-8" aria-label="posts">
          {MOCK_POSTS.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </section>

        <aside className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget type="Recent Posts" />
            <Categories />
          </div>
        </aside>
      </div>
    </main>
  )
}
