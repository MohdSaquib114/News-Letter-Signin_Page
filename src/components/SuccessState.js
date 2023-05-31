import react from 'react'
import Image from './Image'
import tickSvg from './images/icon-success.svg'
import Button from './Button'
import '../componentstyle.css'

const SuccessState = ({handleToggle})=>{
return <div className='success-container'>
    <Image source={tickSvg}/>
   <h1>Thanks for subscribing!
</h1>
   <p>A confirmation email has been sent to <span>ash@loremcompany.com</span>.
  Please open it and click the button inside to confirm your subscription.</p>
  <Button className={"SuccessState-btn"} handlerFunction={handleToggle}>Dismiss message</Button>

</div>


}

export default SuccessState