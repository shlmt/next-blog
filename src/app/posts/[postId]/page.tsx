import PostActions from "@/components/PostActions"
import RestrictedContent from "@/components/RestrictedContent"
import { getPost } from "@/services/posts"

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
        <RestrictedContent>
            <PostActions postId={postId}/>
        </RestrictedContent>
        </>
    )
}

export default PostViewPage