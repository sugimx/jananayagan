type FormValue = {
    _id: string
    name: string
    gmail: string
    phone: number
    dateOfBirth: string
    state: string
    dist: string
    profileType?: string
}

async function registerData({ data, token }: { data: FormValue, token: string }) {
    const res = await fetch(`https://jananayagan-backend-3moy.vercel.app/api/profiles/buyer`, {
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
    const [, token] = queryKey 

    const res = await fetch('https://jananayagan-backend-3moy.vercel.app/api/profiles/all', {
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

const updateBuyerInfo = async({ data, token, buyerId }: { data: FormValue, token: string, buyerId: string }) => {
    try {
        if(!token) {
            throw new Error('User Not found')
        }

        const res = await fetch(`https://jananayagan-backend-3moy.vercel.app/api/profiles/buyer/${buyerId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Failed to update buyer information')
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

const deleteBuyerInfo = async ({ token, buyerId }: { token: string, buyerId: string }) => {
    try {
        if(!token) {
            throw new Error('User Not found')
        }

        const res = await fetch(`https://jananayagan-backend-3moy.vercel.app/api/profiles/buyer/${buyerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        if(!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Failed to delete buyer information')
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

export { registerData, getData, updateBuyerInfo, deleteBuyerInfo }