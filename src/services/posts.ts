import Post from '@/types/Post'

export const getPosts = async () => {
	const res = await fetch('http://localhost:3000/api/posts', {
		next: { revalidate: 3 }
	})
	if(res.status == 200){
		const data = await res.json()
		return data.posts
	}
	return []
}

export const getPost = async (postId: string) => {
	const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
		next: { revalidate: 3 }
	})
	if(res.status == 200){
		const data = await res.json()
		return data
	}
	return {}
}

export const savePost = async (post: Post) => {
	const method = post.id ? 'PUT' : 'POST'
	try {
		const response = await fetch(`http://localhost:3000/api/posts/${post.id ?? ''}`, {
			method,
			headers: {
				'Context-Type': 'application/json'
			},
			body: JSON.stringify(post)
		})
		if (!response.ok) alert('Network response was not ok')
		return response.json()
	} catch (e) {
		console.error(e)
		alert('Error!')
	}
}

export const deletePost = async (postId: string) => {
	try {
		const response = await fetch(`http://localhost:3000/api/posts/${postId}`, { method: 'DELETE' })
		if (!response.ok) alert('error in delete')
		return response.json()
	} catch (e) {
		console.error(e)
		alert('Error!')
	}
}

export const isPostValid = (post: Post) => {
	return post.title && post.title && post.title.length > 1 && post.body.length > 3
}
