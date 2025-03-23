import Post from "@/types/Post"

export const getPosts = async () => {
    const res = await fetch('http:///localhost:3000/api/posts', {
        next: {revalidate: 3}
    })
    const data = await res.json()
    return data.posts
}

export const getPost = async (postId:string) => {
    const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        next: {revalidate: 3}
    })
    const data = await res.json()
    return data
}

export const savePost = async (post: Post) => {
    if(post.id) console.log('edit') // TODO
    try {
        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Context-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
        if (!response.ok) alert('Network response was not ok');
        return response.json();
    }
    catch (e) {
        console.error(e);
        alert('Error!');
    }
}