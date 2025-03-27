'use client'
import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'

interface RestrictedContentProps {
	children: ReactNode
	fallback?: JSX.Element
}

export default function RestrictedContent({ children, fallback }: RestrictedContentProps) {
	const { status } = useSession()
	const isLoggedIn: boolean = status === 'authenticated'
	const isLoadingAuth: boolean = status === 'loading'

	if (isLoadingAuth) {
		return null
	}

	if (!isLoggedIn) {
		return fallback || null
	}

	return <>{children}</>
}
