type AddressTypeData = {
    type: string
    isDefault: boolean
    phone: string
    addressLine1: string
    city: string
    state: string
    postalCode: string
    district: string
    country: string
    landmark: string
}

async function registerFuntion({ data, token }: { data: AddressTypeData, token: string }) {
    try {
        const res = await fetch("https://jananayagan-backend.vercel.app/api/addresses", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Failed to register data')
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

export { registerFuntion }