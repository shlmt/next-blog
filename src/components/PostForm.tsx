'use client'
import { useState } from "react"

const PostForm=()=>{

    const [title, setTitle] = useState<string>()
    const [body, setBody] = useState<string>()

    return(
        <form>
            <div className="form-group">
                <label>Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
            </div>
            <div className="form-group">
                <label className="form-label">Body</label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Body"/>
            </div>
            <button>Send</button>
        </form>
    )
}

export default PostForm