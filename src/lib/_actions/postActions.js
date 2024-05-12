"use server";

import PostModel from "../models/postModel";
import connectDB from "../../config";

export default async function getPosts() {
  try {
    await connectDB();
    const data = await PostModel.find();
    return data;
  } catch (error) {
    return { error: error.message };
  }
}
