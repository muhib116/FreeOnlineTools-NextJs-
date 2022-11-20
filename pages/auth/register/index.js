import Link from 'next/Link'
import classes from './register.module.css'

export default function index() {
  return (
    <div className={ [classes.register_container].join(' ') }>
        <div className={ [classes.register].join(' ') }>

            <h1 className={ ['mb-5 text-xl text-center'].join(' ') }>Register</h1>
            <form method="post">
                <input type="text" placeholder="Enter your name" required="required" />
                <input type="email" placeholder="Enter your email" required="required" />
                <input type="password" placeholder="Password" required="required" />
                <label className={ ['flex items-center gap-2 text-gray-400 text-xs mb-2 select-none', classes.acceptLink].join(' ') }>
                    <input type="checkbox" required="required" />
                    <div>
                        I accept <a href="#">Terms and Conditions</a> & <a href="#">Privacy Policy</a>
                    </div>
                </label>
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
