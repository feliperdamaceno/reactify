// Components
import { List, PostCard } from '@/components'

// Types
import { Post } from '@/types/Post'

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <section className="col-span-1 lg:col-span-8" aria-label="posts">
      <List
        items={posts}
        render={(post, index) => <PostCard key={index} post={post} />}
      />
    </section>
  )
}
