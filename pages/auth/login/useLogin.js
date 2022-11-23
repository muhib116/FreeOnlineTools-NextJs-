import axios from 'axios'
export default function UseLogin()
{
    const handleInput = (e, setState) => {
        const target = e.target
        setState(target.value)
    }

    const handleLogin = async ({e, setIsLoading, setIsLogIn, setMessage, setMessageType, audioElement}) => 
    {
        setIsLoading(true)
        e.preventDefault()
        const target = e.target
        
        const payload = {
            email: target.email.value,
            password: target.password.value
        }

        const { data } = await axios.post('auth/user-login', payload)

        if(data.access_token){
            setMessage('Welcome!')
            setMessageType('success')
            setIsLogIn(true)
            playAudio(audioElement)
            localStorage.access_token = data.access_token
            localStorage.email = data.email
        }else{
            setMessage('Please Check your Email/Password Combination')
            setMessageType('danger')
        }
        setIsLoading(false)
    }


    const playAudio = (audioElement) => {
        audioElement.current.volume = 0.02
        audioElement.current.play()
    }

    return [
        handleInput,
        handleLogin
    ]
}