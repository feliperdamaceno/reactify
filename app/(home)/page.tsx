// Components
import { PostList } from '@/components'

// Types
import { Post } from '@/types/Post'

const MOCK_POSTS: Post[] = [
  { title: 'Learn React', excerpt: 'Learning React with NextJS' },
  {
    title: 'Learn React with Tailwind CSS',
    excerpt: 'Learning React with Tailwind CSS'
  }
]

export default function HomePage() {
  return <PostList posts={MOCK_POSTS} />
}
