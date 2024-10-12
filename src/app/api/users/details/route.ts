import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { auth } from "@/helpers/auth";
import UserModel from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
connect()
export async function GET(request:NextRequest){
 try {
    const id = await auth(request)
    const getUser = await UserModel.findOne({_id:id}).select("-password")
    if (!getUser) {
        return NextResponse.json({error:"The user is not logged in!!"},{status:400})
    }
    return NextResponse.json({
        message:"User found",
        getUser,
    },{status:200})
 } catch (error:any) {
    return NextResponse.json({error:error.message},{status:500})
 }
}