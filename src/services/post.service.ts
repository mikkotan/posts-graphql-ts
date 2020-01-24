import { Request, Response } from 'express';
import { Post } from '../models/post.model';

class PostService {
  public async getAll(req: Request, res: Response) {
    try {
      const posts = await Post.find({});
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async getOne(req: Request, res: Response) {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(404).send({ message: 'Post not found' })
      }

      return res.status(200).send({ post })
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const { title, description, link, postType } = req.body;
      const post = await Post.create({
        title,
        description,
        link,
        postType
      });

      return res.status(201).json({ post });
    } catch (error) {
      return res.status(422).json({ error });
    }
  }
}

export default PostService
