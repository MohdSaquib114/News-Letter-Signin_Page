import react from 'react'
import '../componentstyle.css'

const Button= ({children, handlerFunction, className})=>{
    return <button  className={className} onClick={handlerFunction}>{children}</button>
}

export default Button