// Components
import { List, PostCard } from '@/components'

// GraphQL Services
import { getPosts } from '@/graphql/services'

export default async function HomePage() {
  const posts = await getPosts()
  return (
    <List
      items={posts}
      render={(post) => <PostCard key={post.id} post={post} />}
    />
  )
}
