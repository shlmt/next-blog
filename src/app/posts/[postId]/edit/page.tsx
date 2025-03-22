import PostForm from "@/components/PostForm"

interface PostEdit {
    params: {
        postId: string
    }
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