import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import  jwt from "jsonwebtoken";

export const auth = (request:NextRequest)=>{
    try {
        const token=request.cookies.get("token")?.value||''
        const decoded_token:any = jwt.verify(token, process.env.TOKEN_SECRET!)
        return decoded_token.id
    } catch (error:any) {
        return NextResponse.json({
            error:error.message,
        },{status:500})
    }
}