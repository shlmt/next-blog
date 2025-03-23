import { NextRequest, NextResponse } from "next/server";

// GET /api/posts/:postId
export const GET = async (request:NextRequest, context:{params:{postId:string}}) => {
    const {postId} = context.params
    return NextResponse.json({
        postId,
        title: `Post ${postId}`,
        body: `Post ${postId} Body`
    })
}
