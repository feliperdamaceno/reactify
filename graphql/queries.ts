import { gql } from 'graphql-request'

export const GetPostsQuery = gql`
  query GetPosts {
    postsConnection {
      edges {
        node {
          id
          title
          excerpt
          createdAt
          featuredImage {
            url
          }
          author {
            id
            bio
            name
            photo {
              url
            }
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`
