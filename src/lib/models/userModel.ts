import mongoose, { Document, Schema } from "mongoose";

export interface UserModel extends Document {
  name: string;
  dateOfBirth: string;
  email: string;
  imageURL: string;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
})

const UserData = mongoose.models.users || mongoose.model<UserModel>("users", UserSchema)

export default UserData
