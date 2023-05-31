import react from 'react'
import reactDom from 'react-dom'
import '../componentstyle.css'


const Image= ({className,source ,altText})=>
{
    return <img className="className"  src={source} alt={altText}/>
}

export default Image