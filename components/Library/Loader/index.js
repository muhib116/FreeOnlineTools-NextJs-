import classes from './Loader.module.css'

export default function index(props){
  return (
    <span 
      {...props}
      className={ [classes.spinner, 'absolute block right-0'].join(' ') } aria-label="Preloader"></span>
  )
}
