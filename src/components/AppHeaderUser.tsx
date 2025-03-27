'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const AppHeaderUser = () => {
	const { data: session } = useSession()

	return (
		<>
			<div className='user-details'>
				hello, {session?.user?.name ?? 'user'}
				{session ? (
					<button className='btn red-btn' onClick={() => signOut()}>
						Sign Out
					</button>
				) : (
					<Link href='/signIn' className='btn'>
						Sign In
					</Link>
				)}
			</div>
		</>
	)
}

export default AppHeaderUser
