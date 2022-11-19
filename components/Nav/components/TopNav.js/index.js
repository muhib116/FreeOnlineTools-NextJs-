import classes from './topNav.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import Link from 'next/link'
import pointsIcon from '/public/icons/points.png'

export default function TopNav() {
  return (
    <div className={ classes.navOuterContainer }>
        <div className={ `${ [classes.navContainer].join(' ') } container` }>
            <Link href="/">
                <Image src={logo} alt='Logo' className={ [classes.nav_logo].join(' ') } />
            </Link>
            <div className={ ['flex gap-5'].join(' ') }>
                <Link href="#" className={ ['flex items-center gap-1'].join(' ') }>
                    <Image src={ pointsIcon } alt='earn points' width={24} height={24} className={ ['w-6'].join(' ') }/>
                    Earn Points
                </Link>
                <Link href="/auth/login" className={ ['flex items-center gap-1'].join(' ') }>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    Login
                </Link>
            </div>
        </div>
    </div>
  )
}
