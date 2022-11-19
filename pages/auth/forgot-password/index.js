import Link from 'next/Link'
import classes from './forgot.module.css'

export default function index() {
  return (
    <div className={ [classes.forgot_container].join(' ') }>
        <div className={ [classes.forgot].join(' ') }>
            <h1 className={ ['mb-5 text-xl text-center'].join(' ') }>Reset Password</h1>

            <form method="post">
                <input type="email" name="email" placeholder="Enter your email..." required="required" />
                <button type="submit" className={ [classes.btn, classes.btnPrimary, classes.btnBlock, classes.BtnLarge].join(' ') }>
                    Generate Reset Link
                </button>
            </form>

            <div className={ ['flex gap-2 items-center', classes.goto_home].join(' ') }>
                <Link href="/auth/login">
                    Goto Login Page
                </Link>
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7823 4.0762C18.7821 4.07598 18.7819 4.07572 18.7816 4.0755L14.9036 0.216123C14.613 -0.0729965 14.1431 -0.0719206 13.8539 0.218646C13.5648 0.509175 13.5659 0.979091 13.8564 1.26825L16.4602 3.85937H0.742187C0.332277 3.85937 0 4.19165 0 4.60156C0 5.01147 0.332277 5.34375 0.742187 5.34375H16.4601L13.8564 7.93487C13.5659 8.22403 13.5648 8.69394 13.854 8.98447C14.1432 9.27507 14.6131 9.27608 14.9036 8.98699L18.7817 5.12762C18.7819 5.1274 18.7821 5.12714 18.7823 5.12692C19.073 4.83679 19.0721 4.36536 18.7823 4.0762Z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    </div>
  )
}
