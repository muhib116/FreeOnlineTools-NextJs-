import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useAuth() {
    const { push } = useRouter()
    const [storage, setStorage] = useState({})
    useEffect(() => {
        setStorage(localStorage)
    })

    const isLogin = () => {
        console.log(storage.access_toke && storage.email)
        if(storage.access_toke && storage.email) {
            return { access_token: storage.access_toke, email: storage.email }
        }
        return false
    }

    const logout = async () => 
    {
        let payload = {
            access_token: storage.getItem('access_token'),
            email: storage.getItem('email')
        }
        console.log(payload)
        let res = await axios.post('auth/user-logout', payload)
        if(res.status){
            if(storage.access_token && storage.email){
                delete storage.access_token
                delete storage.email
            }
            push('/')
        }

        return false
    }

    return {
        isLogin,
        logout
    }
}
