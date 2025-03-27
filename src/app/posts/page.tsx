import PostCard from "@/components/PostCard"
import RestrictedContent from "@/components/RestrictedContent"
import { getPosts } from "@/services/posts"
import Post from "@/types/Post"
import Link from "next/link"

export const metadata = {
    title: 'Posts | Next.js',
}

const PostsPage = async () => {
    const posts: Post[] = await getPosts()    

    return(
        <>
        <header className='posts-header'>
            <h1>posts</h1>
            <RestrictedContent>
                <Link href='/posts/new' className='btn'>New Post</Link>
            </RestrictedContent>
        </header>

        <ul className='grid-posts'>
            {posts?.map(post=>
                <PostCard key={post.id} {...post}/>
            )}
        </ul>
        </>
    )
}

export default PostsPage