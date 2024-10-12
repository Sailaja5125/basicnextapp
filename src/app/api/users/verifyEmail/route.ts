<<<<<<< HEAD
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import UserModel from "@/models/userModel";

// Establish database connection (assuming this is done elsewhere)
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
console.log(token)
    // Find the user with the provided verification token
    const user = await UserModel.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() }, // Token should not be expired
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
console.log(user)
    // Mark the user as verified
    user.isVerified = true;
    user.verifyToken = "";
    user.verifyTokenExpiry = undefined!; // Clear the token expiry
    await user.save(); // Save the updated user

    return NextResponse.json(
      {
        message: "User verified successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
=======
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import UserModel from "@/models/userModel";

// Establish database connection (assuming this is done elsewhere)
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
console.log(token)
    // Find the user with the provided verification token
    const user = await UserModel.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() }, // Token should not be expired
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
console.log(user)
    // Mark the user as verified
    user.isVerified = true;
    user.verifyToken = "";
    user.verifyTokenExpiry = undefined!; // Clear the token expiry
    await user.save(); // Save the updated user

    return NextResponse.json(
      {
        message: "User verified successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
>>>>>>> bccb9a0efa33673745379d2cccc70d1a1fe9c232
