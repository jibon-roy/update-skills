import connectDB from "@/lib/db/connectDB";
import UserData from "@/lib/models/userModel";
import { NextResponse } from "next/server";


export async function GET() {
    await connectDB();

    try {
        const users = await UserData.find({})
        NextResponse.json(users)
    } catch (error: any) {
        NextResponse.json({error: error.message})
    }
};

