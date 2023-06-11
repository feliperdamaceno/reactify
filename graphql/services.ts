import { request } from 'graphql-request'

// Queries
import { GetPostsQuery } from '@/graphql/queries'

// Types
import { Post } from '@/types'

const graphqlAPI = process.env.API_ENDPOINT as string

export type QueryResponse<T> = {
  postsConnection: {
    edges: {
      node: T
    }[]
  }
}

export async function getPosts(): Promise<Post[]> {
  const response = await request<QueryResponse<Post>>(graphqlAPI, GetPostsQuery)
  return response.postsConnection.edges.map((edge) => edge.node)
}
