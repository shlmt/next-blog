import Link from "next/link"

interface PostView {
    params: {
        postId: string
    }
}

const PostViewPage=(props:PostView)=>{
    const {postId} = props.params

    return(
        <>
        <h1>post {postId}</h1>
        <Link href={`/posts/${postId}/edit`} className="btn">Edit</Link>
        <button className='btn red-btn'>Delete</button>
        </>
    )
}

export default PostViewPage