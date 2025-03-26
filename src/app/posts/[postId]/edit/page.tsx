import PostForm from "@/components/PostForm"

interface PostEdit {
    params: {
        postId: string
    }
}

export const metadata = {
    title: 'Edit Post | Next.js',
}

export const dynamic = 'force-static'

const PostEditPage=(props:PostEdit)=>{
    return(
        <>
        <h1>Edit post {props.params.postId}</h1>
        <PostForm postId={props.params.postId}/>
        </>
    )
}

export default PostEditPage