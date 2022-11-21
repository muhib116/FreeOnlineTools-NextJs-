import Link from 'next/Link'
import PasswordStrengthBar from 'react-password-strength-bar';
import classes from './register.module.css'
import useRegister from './useRegister'
import EmailStatusIcon from './EmailStatusIcon'
import EyeIcon from '../../../components/Library/EyeIcon'
import { useState } from 'react'

export default function Index() 
{
  const [isEmailValid, setIsEmailValid] = useState(null)
  const [isEmailExist, setIsEmailExist] = useState(null)
  const [isLoading, setIsLoading]       = useState(false)
  const [message, setMessage]           = useState('')
  const [messageType, setMessageType]   = useState('') //success, warning, danger
  const [name, setName]                 = useState('')
  const [email, setEmail]               = useState('')
  const [password, setPassword]         = useState('')
  const [isAgree, setIsAgree]           = useState(true)
  const [isSubmitting, setIsSubmitting]    = useState(false)
  const [isReadablePass, setIsReadablePass]= useState(false)

  const [
    handleInput,
    handleSubmit,
    emailValidation,
    checkEmailExistence
  ] = useRegister()
  
  return (
    <div className={ [classes.register_container].join(' ') }>
      <p className={ [`h-6 text-sm ${messageType == 'danger' ? 'text-red-400' : 'text-green-400'}`].join(' ') }>{ message }</p>
      
      <div className={ [classes.register].join(' ') }>
          <h1 className={ ['mb-5 text-xl text-center'].join(' ') }>Register</h1>
          <form onSubmit={ (e) => {
            handleSubmit({
              e, 
              name, 
              email, 
              password, 
              isAgree, 
              setMessage, 
              setMessageType, 
              isEmailExist, 
              isEmailValid, 
              setIsSubmitting
            }) 
          }}>
              <input 
                name="name" 
                placeholder='Enter your full name'
                required="required"
                value={ name }
                onInput={ (e) => {handleInput(e, setName)}}
                className={ [isSubmitting && classes.disabled].join(' ') }
              />
              <div className={ ['relative'].join(' ') }>
                <input
                  name="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required="required"
                  value={ email } 
                  className={ [isSubmitting && classes.disabled].join(' ') }
                  onInput={ (e) => {
                    handleInput(e, setEmail)
                    emailValidation({email: e.target.value, setIsEmailValid, setMessage, setMessageType})
                    checkEmailExistence({e, setIsEmailExist, setIsLoading, setMessage, setMessageType, isEmailValid})
                  }}
                />
                <EmailStatusIcon isLoading={ isLoading } isEmailExist={ isEmailExist } isEmailValid={ isEmailValid } />
              </div>
              <div className={ ['relative'].join(' ') }>
                <input 
                  name="password"
                  type={ isReadablePass ? 'text' : 'password' }
                  placeholder="Password"
                  required="required"
                  className={ [isSubmitting && classes.disabled].join(' ') }
                  value={ password }
                  onInput={(e) => {handleInput(e, setPassword)}}
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
              <PasswordStrengthBar password={password} />

              <label className={ ['flex items-center gap-2 text-gray-400 text-xs mt-4 mb-3 select-none', classes.acceptLink].join(' ') }>
                  <input 
                    name="isAgree" 
                    type="checkbox" 
                    required="required"
                    className={ [isSubmitting && classes.disabled].join(' ') }
                    onInput={(e) => {handleInput(e, setIsAgree)}}
                  />
                  <div>
                      I accept <a href="#">Terms and Conditions</a> & <a href="#">Privacy Policy</a>
                  </div>
              </label>

              <button 
                type="submit" 
                className={ [
                  classes.btn, 
                  classes.btnPrimary, 
                  classes.btnBlock, 
                  classes.BtnLarge,
                  isLoading && classes.disabled
                ].join(' ') }
              >
                Create Account !
              </button>
          </form>
          <div className={ ['grid', classes.signIn].join(' ') }>
              <div className={ ['flex gap-3'].join(' ') }>
                  Already have account?
                  <Link href="/auth/login">
                      Sign In
                  </Link>
              </div>
          </div>
      </div>
    </div>
  )
}


// export async function getServerSideProps(context) {
//   let user = await fetch('http://127.0.0.1:8000/api/users-by-email/muhib@gmail.com')
//       user = await user.json()
//   return {
//     props: {
//       user: user
//     }
//   }
// }