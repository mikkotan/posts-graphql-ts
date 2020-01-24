import { Post } from '../models/post.model';

interface PostInput {
  title: string;
  description: string;
  postType: string;
  link: string;
}

interface PostArg {
  id: string;
}

export const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find({});

        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
    getPost: async (_: any, { id }: PostArg) => {
      try {
        const post = await Post.findById(id);

        if (!post) {
          return null
        }

        return post;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Mutation: {
    createPost: async (_: any, body: PostInput) => {
      try {
        const post = await Post.create(body);

        return post;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
