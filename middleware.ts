import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import keyv from "@/lib/keyv";

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - images (images)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|images|_next/static|_next/image|favicon.ico).*)"
    ]
};

export async function middleware(request: NextRequest) {
    console.log(await keyv.get("sf"))
    return NextResponse.next()
}
