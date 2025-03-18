// import type  { NextRequest } from "next/server";
// import { NextResponse} from "next/server";

// export function middleware(request: NextRequest) {
//     const path =request.nextUrl.pathname;
//     console.log(path)
//     console.log("middlware is running");
//     // const isPublic = path=="/auth/login" || path == "/auth/signup";

//     // const token=request.cookies.get("token")?.value || "";

//     // if (isPublic && token) {
//     //    return NextResponse.redirect(new URL("/",request.nextUrl))
//     // }

//     // if(!isPublic && !token){
//     //    return NextResponse.redirect(new URL("/auth/login",request.nextUrl))
//     // }

// }


// export const config = {
//     matcher: ["/product/:path*"]
// }


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest ) {
    console.log('lol!!!')
}

export const config = {
  matcher: '/',
}