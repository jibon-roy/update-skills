import mongoose, { Document, Schema } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  dateOfBirth: string;
  email: string;
  password: string;
  gender: string;
  image: string
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  
  password: {
  type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }
})

const User = mongoose.models.users || mongoose.model<UserInterface>("users", UserSchema)

export default User
