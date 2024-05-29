import connectDB from "@/lib/db/connectDB";
import User from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'


export async function GET() {
    await connectDB();

    try {
        const users = await User.find({})
        return NextResponse.json(users)
    } catch (error: any) {
        return NextResponse.json({error: error})
    }
};

export async function POST(req: any) {
    const { email, password, gender, image, dateOfBirth, name } = await req.json()
    await connectDB();

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return new NextResponse("Email already exist!", {status: 400})
    }
    const hashPassword = await bcrypt.hash(password, 5)

    const newUser = new User({
        name: name,
        email: email,
        gender: gender,
        image: image,
        password: hashPassword,
        dateOfBirth: dateOfBirth
    })

    try {
        await newUser.save();
        return new NextResponse("User sing up successful!", {status: 200})
        
    } catch (error: any) {
        return new NextResponse(error, {status: 500})
    }
}

