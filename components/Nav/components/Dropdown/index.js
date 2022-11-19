import classes from './dropdown.module.css'
export default function Dropdown({ title, children}) {
    return (
        <div className={ classes.dropdown_wrapper }>
            <a href="#" className={ [classes.title].join(' ') }>{ title }</a>
            <div className={ [classes.dropdown].join(' ') }>
                <div>{ children }</div>
            </div>
        </div>
    )
}
