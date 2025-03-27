'use client'
import { signIn } from "next-auth/react"

const SignIn = ()=>{

    const handleSignin=()=>{
        signIn('google')
    }

    return(
        <>
        <h1>Sign In</h1>
        <button className="btn" onClick={handleSignin}>Sign In With Google</button>
        </>
    )
}

export default SignIn