import Link from "next/link"

const POSTS = Array.from({length:10})

const PostsPage=()=>{
    return(
        <>
        <header className="posts-header">
            <h1>posts</h1>
            <Link href='/posts/new' className="btn">New Post</Link>
        </header>

        <ul>
            {POSTS.map((_,index)=>
                <li key={index}>
                    <Link href={'/posts/'+index}>Post {index}</Link>
                </li>
            )}
        </ul>
        </>
    )
}

export default PostsPage