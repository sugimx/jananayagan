type FormValue = {
    name: string
    gmail: string
    phone: number
    dateOfBirth: string
    state: string
    dist: string
}

async function registerData({ data, token }: { data: FormValue, token: string }) {
    const res = await fetch(`https://jananayagan-backend.vercel.app/api/profiles/buyer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) {
        const errorBody = await res.json()
        throw new Error(errorBody.message || 'Failed to register data')
    }

    return res.json()
}

async function getData({ queryKey }: { queryKey: readonly [string, string | null] }) {
    const [_key, token] = queryKey

    const res = await fetch('https://jananayagan-backend.vercel.app/api/profiles/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })

    if (!res.ok) {
        const errorBody = await res.json()
        throw new Error(errorBody.message || 'Buyer Information not found')
    }

    return res.json()
}

export { registerData, getData }