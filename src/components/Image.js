import react from 'react'
import reactDom from 'react-dom'
import '../componentstyle.css'
// import svgDesktop from './images/illustration-sign-up-desktop.svg'

const Image= ({className,source})=>
{
    return <img className="className"  src={source} />
}

export default Image