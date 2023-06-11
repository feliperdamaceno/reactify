// Components
import { List, PostCard } from '@/components'

// Types
import { Post } from '@/types'

interface CategoryPageProps {
  params: { slug: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const MOCK_CATEGORY_POSTS: Post[] = [
    { title: params.slug, excerpt: `Learning ${params.slug}` },
    {
      title: params.slug,
      excerpt: `Learning React with ${params.slug}`
    }
  ]

  return (
    <List
      items={MOCK_CATEGORY_POSTS}
      render={(post) => <PostCard key={post.id} post={post} />}
    />
  )
}
