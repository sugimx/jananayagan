type FormValue = {
    email: string
    password: string
}

const login = async({ data }: { data: FormValue }) => {
    try {
        const res = await fetch(`https://jananayagan-backend-3moy.vercel.app/api/users/login`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Authentication failed')
        }

        return res.json()
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('There is issue in the server. please try again later')
        }
    }
}

export { login }