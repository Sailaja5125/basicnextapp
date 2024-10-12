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
}