import axios from 'axios'

export default function useLogin()
{
    const handleInput = (e, setState) => {
        const target = e.target
        setState(target.value)
    }

    const handleLogin = ({e, setIsLoading, setIsLogIn}) => 
    {
        setIsLoading(true)
        e.preventDefault()
        const target = e.target
        
        const data = {
            email: target.email.value,
            password: target.password.value
        }

        axios.post('', data)
        console.log(data)
    }

    return [
        handleInput,
        handleLogin
    ]
}