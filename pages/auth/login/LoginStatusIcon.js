import Loader from '../../../components/Library/Loader'
import AnimatedCompleteIcon from '../../../components/Library/AnimatedCompleteIcon'

export default function LoginStatusIcon({ isLoading, isLogIn }) {
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
                    top: "4px",
                    right: "4px",
                }}
            />
        }

        {
            isLogIn && 
            <AnimatedCompleteIcon
                title="Email available!"
                style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    top: "3px",
                    right: "4px",
                    filter: "grayscale(1) brightness(5)"
                }}
            />
        }
    </>
  )
}
