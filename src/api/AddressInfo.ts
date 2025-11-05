type AddressTypeData = {
    type: string
    isDefault: boolean
    phone: string
    addressLine1: string
    city: string
    state: string
    postalCode: string
    district: string
    landmark: string
}

async function registerFuntion({ data, token }: { data: AddressTypeData, token: string }) {
    try {
        const res = await fetch(`${process.env.API_BASE_URL}/addresses`, {
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

async function GetAddressFn({ queryKey }: { queryKey: readonly [string, string | null] }) {
    try {
        const [ , token] = queryKey

        const res = await fetch(`${process.env.API_BASE_URL}/addresses`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            }
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Address does not exists. Add new address')
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

const GetSingleAddress = async (token: string, addressId: string) => {
    try {

        if(!token || !addressId) {
            return {
                success: false,
                message: 'Cannot find the user'
            }
        }
        const res = await fetch(`${process.env.API_BASE_URL}/addresses/${addressId}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Address does not exists. Add new address')
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

const UpdateAddress = async ({ data, token, addressId }: { data: AddressTypeData, token: string, addressId: string }) => {
    try {
        if(!token || !addressId) {
            return {
                success: false,
                message: 'Cannot find the user'
            }
        }

        const res = await fetch(`${process.env.API_BASE_URL}/addresses/${addressId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Address does not exists. Add new address')
        }  
        const datas = await res.json()

        return datas
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('There is issue in the server. please try again later')
        }
    }
}

const deleteAddress = async ({ token, addressId }: { token: string, addressId: string }) => {
    try {
        if(!token || !addressId) {
            return {
                success: false,
                message: 'Cannot find the user'
            }
        }

        const res = await fetch(`${process.env.API_BASE_URL}/addresses/${addressId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Address does not exists.')
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

const updateDefaultAddress = async ({ token, item }: { token: string, item: string }) => {
    try {
        if(!token || !item) {
            return {
                success: false,
                message: 'Cannot find the user'
            }
        }

        const res = await fetch(`${process.env.API_BASE_URL}/addresses/${item}/default`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Address does not exists.')
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

export { 
    registerFuntion, 
    GetAddressFn, 
    GetSingleAddress, 
    UpdateAddress,
    deleteAddress,
    updateDefaultAddress
}