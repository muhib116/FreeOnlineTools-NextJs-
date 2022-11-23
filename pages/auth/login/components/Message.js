import React from 'react'

export default function Message({ isLogIn, messageType, message }) {
  return (
    <>
        {
            !isLogIn && messageType == 'danger' &&
            <p 
                className={ [`w-full text-xl mb-2 text-center text-red-400`].join(' ') }
                style={ {maxWidth: '330px'} }
            >
                Authentication Failed! 
            </p>
        }

        <p 
            className={ [`w-full text-xm mb-2 text-center ${messageType == 'danger' ? 'text-red-400' : 'text-green-400'}`].join(' ') }
            style={ {maxWidth: '330px'} }
        >
            { message }
        </p>
    </>
  )
}
