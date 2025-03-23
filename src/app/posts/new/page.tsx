import PostForm from "@/components/PostForm"

export const metadata = {
    title: 'New Post | Next.js',
}

const NewPostPage=()=>{
    return(
        <>
        <h1>Create new post</h1>
        <PostForm />
        </>
    )
}

export default NewPostPage