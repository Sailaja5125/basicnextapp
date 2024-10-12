import { connect } from "@/dbConfig/dbConfig";
import UserModel from "@/models/userModel";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {email , password }=reqBody
        console.log(reqBody)
        const User = await UserModel.findOne({email})
        if (!User){
            return NextResponse.json({error:"User does'nt exists"},{status:400})
        }
         const isvalidPassword = await bcryptjs.compare(password,User.password)
         if (!isvalidPassword){
           return NextResponse.json({error:"Invalid Password"},{status:400})
         }

         // jwt 
         const tokenData ={
            id:User._id,
            email:User.email
            
         }
         const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn:"1d"})
         const response= NextResponse.json({token,message:"Login Successfull",success:true},{status:200})
         response.cookies.set("token",token,{ // setting cookies
            httpOnly:true
         })
         return response
    } catch (error:any){
        return NextResponse.json({error:error.message},{status:500})
    }
}
