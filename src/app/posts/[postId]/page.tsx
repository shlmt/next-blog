
interface PostView {
    params: {
        postId: string
    }
}

const PostViewPage=(props:PostView)=>{
    return(
        <>
        <h1>post {props.params.postId}</h1>
        </>
    )
}

export default PostViewPage