import Post from "@/types/Post"
import Image from "next/image"
import Link from "next/link"

const PostCard=(props:Post)=>{
    const {id:postId, title, body} = props
    const titleForImage = title.replace(' ','').slice(0,2).toUpperCase()

    return(
        <li className="post-item">
            <Link href={`/posts/${postId}`} className="link">
            <Image src={`https://fakeimg.pl/600x400?text=${titleForImage}`} width="300" height="200" alt={title} className="post-img"/>
                <div className="post-content">
                    <h4 className="post-title">{title}</h4>
                    <p className="post-body">{body.slice(0,50)}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostCard