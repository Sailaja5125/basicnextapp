import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import UserModel from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";
import {connect} from "@/dbConfig/dbConfig"

connect()
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email} = reqBody
        console.log(email)
        const user = await UserModel.findOne({email})
        if (!user){
        return NextResponse.json({error:"User is not Signed up "},{status:400})
        }
        await sendEmail({ email, emailtype:"Reset", userId: user._id });
        return NextResponse.json(
          { message: "User mail sent successfully " },
          { status: 201 } // Created status
        )
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}