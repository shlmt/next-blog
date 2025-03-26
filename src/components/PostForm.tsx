'use client'
import { savePost } from "@/services/posts"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

interface PostFormProps {
    postId?: string,
    title?: string,
    body?: string
}

const PostForm=(props:PostFormProps)=>{

    const [title, setTitle] = useState<string>(props.title || '')
    const [body, setBody] = useState<string>(props.body || '')
    const { push } = useRouter() 

    const onSubmit = async (e:FormEvent)=>{
        e.preventDefault()
        await savePost({ id:props.postId, title, body })
        push(`/posts/${props.postId || ''}`)
    }

    return(
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Title</label>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
            </div>
            <div className='form-group'>
                <label className='form-label'>Body</label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder='Body' rows={15}/>
            </div>
            <button type='submit' className='btn'>Send</button>
        </form>
    )
}

export default PostForm