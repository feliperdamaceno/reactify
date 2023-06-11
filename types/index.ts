export type Image = {
  url: string
}

export type Category = {
  name: string
  slug: string
}

export type Author = {
  id: string
  bio: string
  name: string
  photo: Image
}

export type Post = {
  id: string
  title: string
  excerpt: string
  createdAt: string
  featuredImage: Image
  author: Author
  categories: Category[]
}
