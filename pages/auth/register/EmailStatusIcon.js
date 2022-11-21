import Loader from '../../../components/Library/Loader'
import AnimatedCompleteIcon from '../../../components/Library/AnimatedCompleteIcon'
import CloseIcon from '../../../components/Library/CloseIcon'

export default function EmailStatusIcon({ isLoading, isEmailExist, isEmailValid }) {
  return (
    <>
        {
            isLoading && 
            <Loader
                title="Email validating!"
                style={{
                    width: "18px",
                    height: "18px",
                    borderWidth: "2px",
                    position: "absolute",
                    top: "12px",
                    right: "10px",
                }}
            />
        }

        {
            isEmailExist != null && !isLoading && isEmailValid==true && (
                isEmailExist ?
                <CloseIcon
                    title="Email already exist!"
                    style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "10px",
                        right: "7px",
                        opacity: '0.6'
                    }}
                />
                : <AnimatedCompleteIcon
                    title="Email available!"
                    style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        top: "10px",
                        right: "7px"
                    }}
                />
            )
        }
    </>
  )
}
