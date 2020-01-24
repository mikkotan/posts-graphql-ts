import { Schema, Document, Model, model } from 'mongoose';

interface IPost extends Document {
  postType: string,
  title: string,
  description: string,
  link: string
}

const PostSchema = new Schema({
  postType: {
    type: String,
    enum: ['video', 'text'],
    default: 'text'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: function(this: IPost) {
      return this.postType === 'video';
    }
  }
}, { timestamps: true });

export const Post: Model<IPost> = model<IPost>('Post', PostSchema);
