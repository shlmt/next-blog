import { getPost } from "@/services/posts"
import Link from "next/link"

interface PostView {
    params: {
        postId: string
    }
}

export const dynamic = 'force-static'

export const generateMetadata = (props: PostView) => {
    return {
        title: `Post ${props.params.postId} | Next.js`,
    }
}

export const generateStaticParams = () => {
    return [{postId:'1'}, {postId:'2'}, {postId: '3'}]
}

const PostViewPage = async (props:PostView)=>{
    const {postId} = props.params
    const {title, body} = await getPost(postId)

    return(
        <>
        <h1>post {postId}: {title}</h1>
        <p>{body}</p>
        <Link href={`/posts/${postId}/edit`} className="btn">Edit</Link>
        <button className='btn red-btn'>Delete</button>
        </>
    )
}

export default PostViewPage