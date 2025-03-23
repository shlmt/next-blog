import Post from "@/types/Post";
import { NextRequest, NextResponse } from "next/server";

// GET /api/posts
export const GET = async (request:NextRequest) => {
    const {searchParams} = new URL(request.url)
    const search = searchParams.get('search') || ''

    const posts: Post[] = Array.from({ length: 30 }).map((_, index) => {
        return {
            id: (index + 1).toString(),
            title: `Post ${index}`,
            body: `Post ${index}`,
        }
    }).filter(post=> post.title.includes(search) || post.body.includes(search))

    return NextResponse.json({posts})
}

// POST /api/posts
export const POST = async (request:NextRequest) => {
    const body = await request.json()
    return new Response(body.title)
}