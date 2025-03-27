'use client'

import { Session } from 'next-auth'
import { SessionProvider as Provider } from 'next-auth/react'
import { ReactNode } from 'react'

interface SessionProviderProps {
    children: ReactNode,
    session: Session | null
}

const SessionProvider=({children, session}:SessionProviderProps)=>{

    return(
        <Provider>
            {children}
        </Provider>
    )
}

export default SessionProvider