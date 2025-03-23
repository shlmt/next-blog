import PostForm from "@/components/PostForm"

interface PostEdit {
    params: {
        postId: string
    }
}

export const metadata = {
    title: 'Edit Post | Next.js',
}

const PostEditPage=(props:PostEdit)=>{
    return(
        <>
        <h1>Edit post {props.params.postId}</h1>
        <PostForm />
        </>
    )
}

export default PostEditPage