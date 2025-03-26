import PostForm from "@/components/PostForm"
import { getPost } from "@/services/posts"
import Post from "@/types/Post"

interface PostEdit {
    params: {
        postId: string
    }
}

export const metadata = {
    title: 'Edit Post | Next.js',
}

const PostEditPage = async (props:PostEdit)=>{
    const {postId} = props.params
    const post:Post = await getPost(postId)

    return(
        <>
        <h1>Edit post {postId}</h1>
        <PostForm postId={postId} title={post.title} body={post.body} />
        </>
    )
}

export default PostEditPage