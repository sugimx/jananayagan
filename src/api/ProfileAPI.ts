type ProfileType = {
    fullName: string
    phone: string
    gmail: string
    state: string
    dob: string
    dist: string
}

const getProfile = async (token: string) => {
    try {
        if(!token) {
            throw new Error('User cannot found')
        }

        const res = await fetch(`https://jananayagan-backend-3moy.vercel.app/api/users/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            }
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Profile does not exists.')
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

const updateProfile = async ({ data, token }: { data: ProfileType, token: string }) => {
    try {
        if(!token) {
            throw new Error('User cannot found')
        } 

        const res = await fetch(`https://jananayagan-backend-3moy.vercel.app/api/users/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            const errorBody = await res.json()
            throw new Error(errorBody.message || 'Profile update failed.')
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
export { getProfile, updateProfile }