'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import RestrictedContent from './RestrictedContent'

const AppHeaderUser = () => {
	const { data: session } = useSession()

	return (
		<>
			<div className='user-details'>
				hello, {session?.user?.name ?? 'user'}
				<RestrictedContent
					fallback={
						<Link href='/signIn' className='btn'>
							Sign In
						</Link>
					}
				>
					<button className='btn red-btn' onClick={() => signOut()}>
						Sign Out
					</button>
				</RestrictedContent>
			</div>
		</>
	)
}

export default AppHeaderUser
