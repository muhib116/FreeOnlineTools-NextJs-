import classes from './topNav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import SocialIcon from '../SocialIcon/index'
import pointsIcon from '/public/icons/points.png'
import useAuth from '../../../useAuth'

export default function TopNav() {
    const { isLogin, logout } = useAuth()
    return (
        <nav className={ ['outer_container py-2', classes.navOuterContainer].join(' ') }>
            <div className={ ['inner_container py-0 flex justify-between items-center', classes.navContainer].join(' ') }>
                <SocialIcon />
                <div className={ ['flex gap-5'].join(' ') }>
                    <Link href="#" className={ ['flex items-center gap-1'].join(' ') }>
                        <Image src={ pointsIcon } alt='earn points' width={24} height={24} className={ ['w-6'].join(' ') }/>
                        Earn Points
                    </Link>
                    {
                        isLogin() ? 
                        <button onClick={ logout } className={ ['flex items-center gap-1'].join(' ') }>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 1 0 0-12H4A9.985 9.985 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4z"/>
                            </svg>
                            Logout
                        </button>
                    :
                        <Link href="/auth/login" className={ ['flex items-center gap-1'].join(' ') }>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"/>
                            </svg>
                            Login
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}
