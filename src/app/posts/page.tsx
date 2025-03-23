import PostCard from "@/components/PostCard"
import Link from "next/link"

const POSTS = Array.from({length:30})

export const metadata = {
    title: 'Posts | Next.js',
}

const PostsPage=()=>{
    return(
        <>
        <header className="posts-header">
            <h1>posts</h1>
            <Link href='/posts/new' className="btn">New Post</Link>
        </header>

        <ul className="grid-posts">
            {POSTS.map((_,index)=>
                <PostCard key={index} postId={index.toString()}/>
            )}
        </ul>
        </>
    )
}

export default PostsPage