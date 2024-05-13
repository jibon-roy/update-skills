"use server";
import connectDB from "@/config/index";
import { SlideModel } from "@/lib/models/postModel";

export default async function GetPosts() {
  try {
    await connectDB();
    const data = await SlideModel.find();
    return { data: data };
  } catch (error) {
    return { error: error.message };
  }
}
