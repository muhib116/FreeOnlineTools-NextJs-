import Link from 'next/Link'
import classes from './register.module.css'

export default function index() {
  return (
    <div className={ [classes.register_container].join(' ') }>
        <div className={ [classes.register].join(' ') }>
            <h1 className={ ['mb-5 text-xl text-center'].join(' ') }>register</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit" className={ [classes.btn, classes.btnPrimary, classes.btnBlock, classes.BtnLarge].join(' ') }>Let me in.</button>
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
