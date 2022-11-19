import Link from 'next/Link'
import classes from './login.module.css'

export default function index() {
  return (
    <div className={ [classes.login_container].join(' ') }>
        <div className={ [classes.login].join(' ') }>
            <h1 className={ ['mb-5 text-xl text-center'].join(' ') }>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit" className={ [classes.btn, classes.btnPrimary, classes.btnBlock, classes.BtnLarge].join(' ') }>Let me in.</button>
            </form>
            <div className={ ['grid', classes.forgot].join(' ') }>
                <Link href="/auth/forgot-password">Forgot Password ? </Link>
                <div className={ ['flex gap-3'].join(' ') }>
                    Don't have an account ? 
                    <Link href="/auth/register">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
