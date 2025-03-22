import Image from "next/image"
import Link from "next/link"

interface PostCardProps {
    postId: string
}

const PostCard=(props:PostCardProps)=>{
    const {postId} = props

    return(
        <li className="post-item">
            <Link href={`/posts/${postId}`} className="link">
            <Image src={`https://fakeimg.pl/600x400?text=Post ${postId}`} width="300" height="200" alt={`post/${postId}`} className="post-img"/>
                <div className="post-content">
                    <h4 className="post-title">sdfghj</h4>
                    <p className="post-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                </div>
            </Link>
        </li>
    )
}

export default PostCard