import react from 'react'
import '../componentstyle.css'

const Button= ({children, handlerFunction, className, task})=>{
    return <button  className={className} onClick={handlerFunction} aria-label={task}>{children}</button>
}

export default Button