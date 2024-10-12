<<<<<<< HEAD
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import UserModel from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {token , newPassword} = reqBody
        if(!token){
        return NextResponse.json({error:"Incorrect Token"},{status:400})
        }
        const user = await UserModel.findOne({
            forgotPasswordToken:token,
            forgotPasswordExpiry:{$gt:Date.now()}
        })
        if (!user){
        return NextResponse.json({error:"User is not Signed up "},{status:400})
        }
         user.password = newPassword
        user.forgotPasswordToken= "";
        user.forgotPasswordExpiry= undefined!; // Clear the token expiry
        await user.save()
        return NextResponse.json(
          { message: "password Updated successfully"},
          { status: 201 } // Created status
        )
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
=======
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import UserModel from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()
export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {token , newPassword} = reqBody
        if(!token){
        return NextResponse.json({error:"Incorrect Token"},{status:400})
        }
        const user = await UserModel.findOne({
            forgotPasswordToken:token,
            forgotPasswordExpiry:{$gt:Date.now()}
        })
        if (!user){
        return NextResponse.json({error:"User is not Signed up "},{status:400})
        }
         user.password = newPassword
        user.forgotPasswordToken= "";
        user.forgotPasswordExpiry= undefined!; // Clear the token expiry
        await user.save()
        return NextResponse.json(
          { message: "password Updated successfully"},
          { status: 201 } // Created status
        )
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
>>>>>>> bccb9a0efa33673745379d2cccc70d1a1fe9c232
}