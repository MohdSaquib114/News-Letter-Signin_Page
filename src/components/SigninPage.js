import react from 'react'
import reactDom from 'react-dom'
import EmailVerifing from './EmailVerifying'
import Image from './Image'
import '../componentstyle.css'
import svgDesktop from './images/illustration-sign-up-desktop.svg'
import svgMobile from './images/illustration-sign-up-mobile.svg'

const viewportWidth = window.innerWidth
console.log(viewportWidth)
const NewsLetter= ({handleToggle, setEmail, errStateStyle})=>{


return(  <main className="main-container">
    {viewportWidth<=450 && <Image className="mobileImg" source={svgMobile} altText="desktop-view-image"/>}
    
    <EmailVerifing errStateStyle={errStateStyle} handlerFunction={handleToggle} setEmail={setEmail} />
   {viewportWidth>450 && <Image className="desktopImg" source={svgDesktop} altText="mobile-view-image"/>}
    
</main>

)
}

export default NewsLetter