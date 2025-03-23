
export const getPosts = async () => {
    const res = await fetch('https://dummyjson.com/posts', {
        next: {revalidate: 3}
    })
    const data = await res.json()
    return data.posts
}

export const getPost = async (postId:string) => {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
        next: {revalidate: 3}
    })
    const data = await res.json()
    return data
}