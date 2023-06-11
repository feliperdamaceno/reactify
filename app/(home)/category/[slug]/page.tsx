// Components
import { PostList } from '@/components'

// Types
import { Post } from '@/types/Post'

interface CategoryProps {
  params: { slug: string }
}

export default function Category({ params }: CategoryProps) {
  const MOCK_CATEGORY_POSTS: Post[] = [
    { title: params.slug, excerpt: `Learning ${params.slug}` },
    {
      title: params.slug,
      excerpt: `Learning React with ${params.slug}`
    }
  ]

  return <PostList posts={MOCK_CATEGORY_POSTS} />
}
