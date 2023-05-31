import react from 'react'
import reactDom from 'react-dom'
import EmailVerifing from './EmailVerifying'
import Image from './Image'
import '../componentstyle.css'
import svgDesktop from './images/illustration-sign-up-desktop.svg'
import svgMobile from './images/illustration-sign-up-mobile.svg'

const viewportWidth = window.innerWidth
// console.log(viewportWidth)
const NewsLetter= ({handleToggle})=>{


return(  <main className="main-container">
    {viewportWidth<=400 && <Image className="mobileImg" source={svgMobile}/>}
    
    <EmailVerifing handlerFunction={handleToggle} />
   {viewportWidth>400 && <Image className="desktopImg" source={svgDesktop}/>}
    
</main>

)
}

export default NewsLetter