import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostModel = models.user || model("post", postSchema);

export default PostModel;
