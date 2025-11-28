import React, { lazy, Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

const LoginForm = lazy(() => import('@/components/layouts/user/LoginForm'))

const LoginScreen = () => {
    return (
        <>
            <Suspense fallback={<LoadingScreen />}>
                <LoginForm />
            </Suspense>
        </>
    )
}

export default LoginScreen