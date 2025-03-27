import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

interface SignInLayoutProps {
	children: React.ReactNode
}

const SignInLayout = async ({ children }: SignInLayoutProps) => {
	const session = await getServerSession(authOptions)

	if (session) {
		redirect('/')
	}

	return <>{children}</>
}

export default SignInLayout
