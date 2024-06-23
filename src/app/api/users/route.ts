import connectDB from "@/lib/db/connectDB";
import User from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function GET() {
  await connectDB();

  try {
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req: Request) {
  await connectDB();
  
  try {
    const { email, password, gender, image, dateOfBirth, name } = await req.json();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("Email already exists!", { status: 400 });
    }

    const hashPassword = password ? await bcrypt.hash(password, 5) : undefined;

    const newUser = new User({
      name,
      email,
      image,
      gender,
      password: hashPassword,
      dateOfBirth,
    });

    await newUser.save();
    return new NextResponse("User sign up successful!", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
