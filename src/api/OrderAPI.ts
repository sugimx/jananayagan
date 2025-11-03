// /api/orders/summary
// /api/orders/:status/summary

const AllOrders = async (token: string) => {
    try {
        if(!token) {
            return {
                success: false,
                message: 'Cannot find the user'
            }
        }

        const res = await fetch(`${process.env.API_BASE_URL}/orders/summary`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Orders does not exists.')
        }  

        const data = await res.json()

        return data
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('There is issue in the server. please try again later')
        }
    }
}

const getSingleOrder = async ({ token, orderId }: {token: string, orderId: string}) => {
    try {
        if(!token) {
            return {
                success: false,
                message: 'Cannot find the user'
            }
        }

        const res = await fetch(`${process.env.API_BASE_URL}/orders/invoice/${orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Orders does not exists.')
        }  

        const data = await res.json()

        return data
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('There is issue in the server. please try again later')
        }
    }
}

export { AllOrders, getSingleOrder }