import express, { Application } from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import PostsController from './controllers/posts.controller';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/posts_api'

class App {
  public app: Application;
  public postsController: PostsController;

  constructor() {
    this.app = express();

    this.applyMiddlewares();
    this.setupMongoDBConfig();
    this.setupGraphQLServer();

    this.postsController = new PostsController(this.app);
  }

  private applyMiddlewares(): void {
    this.app.use(bodyparser.json({ limit: '50mb' }));
    this.app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(morgan('combined'));
    this.app.use(cors());
  }

  private setupMongoDBConfig(): void {
    mongoose.Promise = global.Promise;

    mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private setupGraphQLServer(): void {
    const graphQLServer = new ApolloServer({
      typeDefs,
      resolvers
    });

    graphQLServer.applyMiddleware({ app: this.app, path: '/graphql' })
  }
}

export default new App().app;
