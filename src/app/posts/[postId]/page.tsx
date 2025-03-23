import Link from "next/link"

interface PostView {
    params: {
        postId: string
    }
}

export const generateMetadata = (props: PostView) => {
    return {
        title: `Post ${props.params.postId} | Next.js`,
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