"use server";

import PostModel from "../models/postModel";
import connectDB from "../../config";

export async function getPosts() {
  try {
    await connectDB();
    return { message: "GET" };
  } catch (error) {
    return { error: error.message };
  }
}
