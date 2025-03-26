import { firestore } from '@/firebase'
import { isPostValid } from '@/services/posts'
import Post from '@/types/Post'
import { DocumentSnapshot } from 'firebase-admin/firestore'
import { NextRequest, NextResponse } from 'next/server'

// GET /api/posts/:postId
export const GET = async (request: NextRequest, context: { params: { postId: string } }) => {
	const { postId } = context.params
	const doc: DocumentSnapshot = await firestore.collection('posts').doc(postId).get()
	const post = doc.data()
	if (!(doc.exists && post)) {
		return new NextResponse('Bad Request', { status: 400 })
	}
	return NextResponse.json({
		id: doc.id,
		title: post.title,
		body: post.body
	})
}

// PUT /api/posts/:postId
export const PUT = async (request: NextRequest, context: { params: { postId: string } }) => {
	const { postId } = context.params
	const post: Post = await request.json()
	if (!postId || !isPostValid(post)) return new NextResponse('Bad Request', { status: 400 })
	try {
		await firestore.collection('posts').doc(postId).set({ title: post.title, body: post.body })
		return NextResponse.json({ message: 'post updated' })
	} catch (err) {
		console.warn('error in update', err)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}

// DELETE /api/posts/:postId
export const DELETE = async (request: NextRequest, context: { params: { postId: string } }) => {
	const { postId } = context.params
	if (!postId) return new NextResponse('Bad Request', { status: 400 })
	try {
		await firestore.collection('posts').doc(postId).delete()
		return NextResponse.json({ message: 'post deleted' })
	} catch (err) {
		console.warn('error in delete', err)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
