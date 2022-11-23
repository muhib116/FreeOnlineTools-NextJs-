import Link from 'next/Link'
import classes from './login.module.css'
import EyeIcon from '../../../components/Library/EyeIcon'
import AnimatedCompleteIcon from '../../../components/Library/AnimatedCompleteIcon'
import useLogin from './UseLogin'
import LoginStatusIcon from './LoginStatusIcon'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import useAuth from '../../../components/useAuth'
import Message from './components/Message'

export default function Login()
{
    const { push } = useRouter()
    const { isLogin:isUserLoggedIn } = useAuth()
    const [message, setMessage]               = useState('')
    const [messageType, setMessageType]       = useState('') //success, warning, danger{
    const [isReadablePass, setIsReadablePass] = useState(false)
    const [email, setEmail]          = useState('')
    const [password, setPassword]    = useState('')
    const [isLoading, setIsLoading]  = useState(false)
    const [isLogIn, setIsLogIn]  = useState(false)
    const [handleInput, handleLogin] = useLogin()
    const audioElement = useRef()

    useEffect(() => {
        if(isLogIn){
            setTimeout(() => {
                push('/')
            }, 2500)
        }
        if(isUserLoggedIn()){
            push('/')
        }
    })

    return (
        <div className={ [classes.login_container].join(' ') }>
            <Message isLogIn={ isLogIn } messageType={ messageType } message={ message }/>
            <audio src="../../../sound/welcome.mp3" ref={ audioElement }></audio>

            <div className={ [classes.login, 'relative'].join(' ') }>
                {
                    isLogIn &&
                    <AnimatedCompleteIcon
                        style={{
                            width: "40px",
                            height: "40px",
                            position: "absolute",
                            top: "10px",
                            right: "10px"
                        }}
                    />
                }

                <h1 className={ ['mb-5 text-xl text-center'].join(' ') }>Login</h1>

                <form onSubmit={ (e) => handleLogin({e, setIsLoading, setIsLogIn, setMessage, setMessageType, audioElement}) }>
                    <input  type="email"  name="email" value={ email } placeholder="Email"  required="required" 
                        onInput={ (e) => handleInput(e, setEmail)}
                    />
                    <div className='relative'>
                        <input  type={ isReadablePass ? 'text' : 'password' }  name="password"  value={ password } placeholder="Password"  required="required" 
                            onInput={ (e) => handleInput(e, setPassword)}
                        />
                        <EyeIcon 
                            isOpen={isReadablePass}
                            style={{
                                cursor: "pointer",
                                color: '#fff8',
                                position: 'absolute',
                                top: '10px',
                                right: '5px',
                                transform: 'scale(0.8)',
                            }}
                            onClick={ () => setIsReadablePass(!isReadablePass) }
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={ [classes.btn, classes.btnPrimary, classes.btnBlock, classes.BtnLarge,isLoading && classes.disabled,'relative'].join(' ') }
                    >
                        Let me in.
                        <LoginStatusIcon
                            isLoading={ isLoading }
                            isLogIn={ isLogIn }
                        />
                    </button>
                </form>

                <div className={ ['grid', classes.forgot].join(' ') }>
                    <Link href="/auth/forgot-password">Forgot Password ? </Link>
                    <div className={ ['flex gap-3'].join(' ') }>
                        Don&apos;t have an account ? 
                        <Link href="/auth/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
