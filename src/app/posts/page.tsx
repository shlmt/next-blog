import PostCard from "@/components/PostCard"
import { getPosts } from "@/services/posts"
import Post from "@/types/Post"
import Link from "next/link"

export const metadata = {
    title: 'Posts | Next.js',
}

export const dynamic = 'force-static'

const PostsPage = async () => {
    const posts: Post[] = await getPosts()    

    return(
        <>
        <header className="posts-header">
            <h1>posts</h1>
            <Link href='/posts/new' className="btn">New Post</Link>
        </header>

        <ul className="grid-posts">
            {posts.map(post=>
                <PostCard key={post.id} {...post}/>
            )}
        </ul>
        </>
    )
}

export default PostsPage