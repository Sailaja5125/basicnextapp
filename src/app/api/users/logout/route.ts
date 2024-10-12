<<<<<<< HEAD
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<{ message: string; success: boolean; }> | NextResponse<{ error: any; }>>{
  try {
    const response = NextResponse.json({
        message:"Logout Successful",
        success:true
    })
    response.cookies.set("token","",{
        httpOnly:true,
        expires:new Date(),
    })
    return response
  } catch (error:any) {
    return NextResponse.json({error: error.message},{status:500})
  }
=======
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export async function GET(){
  try {
    const response = await NextResponse.json({
        message:"Logout Successful",
        success:true
    })
    response.cookies.set("token","",{
        httpOnly:true,
        expires:new Date(),
    })
    return response
  } catch (error:any) {
    return NextResponse.json({error: error.message},{status:500})
  }
>>>>>>> bccb9a0efa33673745379d2cccc70d1a1fe9c232
}