// Components
import { Button } from '@/components'
import Link from 'next/link'
import Image from 'next/image'

// Libs
import moment from 'moment'

// Types
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-sm shadow-sm p-8">
      <div>
        <Image
          className="object-cover w-full rounded-sm max-h-96 object-center"
          src={post.featuredImage.url}
          width={800}
          height={800}
          alt={post.title}
        />
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
        <p className="text-zinc-500 mb-6">{post.excerpt}</p>

        <Button
          type="regular"
          render={(styles) => (
            <Link className={styles} href={`/post/${post.slug}`}>
              Read more...
            </Link>
          )}
        />
      </div>
    </article>
  )
}
