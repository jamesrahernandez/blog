import * as mongoose from 'mongoose';

export interface IBlog extends mongoose.Document {
  title: String;
  content: String;
};

let blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    owner_id: String,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IBlog>('Blog', blogSchema);
