import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    getPosts: [Post]!
    getPost(id: ID!): Post
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    postType: String!
    link: String
    createdAt: String!
  }

  type Mutation {
    createPost(
      title: String!,
      description: String!,
      postType: String!,
      link: String
    ): Post!
  }
`
