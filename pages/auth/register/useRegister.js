import axios from 'axios'
import { useState } from 'react'

export default function useRegister()
{
    const [timeoutId, setTimeoutId] = useState(null);

    const handleInput = (e, setState) => {
        let target = e.target
        const { value, name } = target
        if(name == 'isAgree'){
            setState(target.checked)
        }else{
            setState(value)
        }
    }

    const emailValidation = ({email, setIsEmailValid, setMessage, setMessageType}) => 
    {
        if(email.length<5) return
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email.match(pattern)) {
            setMessage('')
            setMessageType('success')
            setIsEmailValid(true)
            return
        }
        
        if(!email.length){
            setIsEmailValid(null)
            setMessage('')
            return
        }

        setIsEmailValid(false)
        setMessageType('danger')
        setMessage('Invalid Email Address !')
    }

    const handleSubmit = async ({e, name, email, password, isAgree, setMessage, setMessageType, isEmailExist, isEmailValid, setIsSubmitting}) => {
        e.preventDefault();
        let target = e.target
        let formData = new FormData()

        if(isEmpty(name) || isEmpty(email) || isEmpty(password) || !isAgree){
            setMessage("Field must not be empty!")
            setMessageType('danger')
            return
        }


        if(!isEmailValid){
            setMessage("Your email is not valid!")
            setMessageType('danger')
            return
        }

        if(isEmailExist){
            setMessage("Your email already used!")
            setMessageType('danger')
            return
        }
       
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('agreement', isAgree)

        setIsSubmitting(true)
        let { data } = await axios.post(`create-user`, formData)
        if(data){
            // redirect login page
            setIsSubmitting(false)
        }
    }

    const isEmpty = (string) => {
        return (string === null || string.trim() === "")
    }

    const checkEmailExistence = ({e, setIsEmailExist, setIsLoading, setMessage, setMessageType, isEmailValid}) => 
    {
        console.log(isEmailValid)
        if(!isEmailValid) return
        
        setIsLoading(true)
        clearTimeout(timeoutId)
        let id = setTimeout(async() => 
        {
            let { data } = await axios.get(`users-by-email/${e.target.value}`)
            setIsLoading(false)

            if(data.user || !isEmailValid){
                setIsEmailExist(true)
                setMessage('Invalid Email Address!')
                setMessageType('danger')
            }
        }, 2000)

        setTimeoutId(id)
    }

    return [
        handleInput,
        handleSubmit,
        emailValidation,
        checkEmailExistence
    ]
}