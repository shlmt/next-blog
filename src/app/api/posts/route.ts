import { firestore } from '@/firebase'
import { isPostValid } from '@/services/posts'
import Post from '@/types/Post'
import { QuerySnapshot } from 'firebase-admin/firestore'
import { NextRequest, NextResponse } from 'next/server'

// GET /api/posts
export const GET = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url)
	const search = searchParams.get('search') || ''

	const snapshot: QuerySnapshot = await firestore.collection('posts').get()
	const posts: Post[] = snapshot.docs
		.map((doc) => {
			const { title, body } = doc.data()
			return {
				id: doc.id,
				title,
				body
			}
		})
		.filter((post) => post.title.includes(search) || post.body.includes(search))

	return NextResponse.json({ posts })
}

// POST /api/posts
export const POST = async (request: NextRequest) => {
	const post = await request.json()
	if (!isPostValid(post)) return new NextResponse('Bad Request', { status: 400 })
	try {
		await firestore.collection('posts').doc().set({ title: post.title, body: post.body })
		return NextResponse.json({ message: 'post created' })
	} catch (err) {
		console.warn('error in create: ', err)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
