import { connect } from "@/dbConfig/dbConfig";
import UserModel from "@/models/userModel";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

// Establish database connection (assuming this is done elsewhere)
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 } // Bad request status
      );
    }

    // Generate a salt and hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      avatar: null,
    });

    // Send a verification email
    await sendEmail({ email, emailtype: "Verify", userId: newUser._id });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 } // Created status
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 }); // Internal server error
  }
}
