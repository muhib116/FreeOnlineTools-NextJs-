import classes from './404.module.css'
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className={ [classes.page_wrapper].join(' ') }>
        <div className={ [classes.bubble].join(' ') }></div>
        <div className={ [classes.bubble].join(' ') }></div>
        <div className={ [classes.bubble].join(' ') }></div>
        <div className={ [classes.bubble].join(' ') }></div>
        <div className={ [classes.bubble].join(' ') }></div>
        <div className={ [classes.main].join(' ') }>
            <h1>404</h1>
            <p className={ ['text-white mb-4'].join(' ') }>It looks like you're lost...<br/>That's a trouble?</p>
            <div className={ [classes.button].join(' ') }>
                <Link href="/">Go To Home</Link>
            </div>
        </div>
    </div>
  )
}
