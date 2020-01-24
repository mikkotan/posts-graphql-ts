import { Application } from 'express';
import PostService from '../services/post.service';

class PostsController {
  private postService: PostService;
  private app: Application

  constructor(app: Application) {
    this.app = app;
    this.postService = new PostService();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.route('/posts').get(this.postService.getAll);
    this.app.route('/posts').post(this.postService.create);
    this.app.route('/posts/:id').get(this.postService.getOne);
  }
}

export default PostsController
