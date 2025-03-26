'use client'

import { deletePost } from "@/services/posts"
import Link from "next/link"
import { useRouter } from "next/navigation"

const PostActions=(props:{postId:string})=>{

    const { push } = useRouter()

    const onDelete = async ()=>{
        await deletePost(props.postId)
        push('/posts')
    }

    return(
        <>
        <Link href={`/posts/${props.postId}/edit`} className="btn">Edit</Link>
        <button className='btn red-btn' onClick={onDelete}>Delete</button>
        </>
    )
}

export default PostActions