import react from 'react'
import reactDom from 'react-dom'
import Input from './Input'
import Button from './Button'
import '../componentstyle.css'

const EmailVerifing= ({handlerFunction , setEmail,
errStateStyle})=>{


return(  
    <div className='EmailContainer'>
    <h1 className='heading-style'>Stay updated!</h1>
    <p className='about-text'>Join 60,000+ product managers receiving monthly updates on:</p>
    <ul style={{padding:"0px"}}>
        <li className='list-item'><svg className="list-svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg> 
        <p >Product discovery and building what matters</p></li>
        <li className='list-item'><svg className="list-svg"  xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg> 
        <p >Measuring to ensure updates are a success</p></li>
        <li className='list-item'><svg className="list-svg"  xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
         <p >And much more!</p></li>
         </ul>
<Input errStateStyle={errStateStyle} valueReader={setEmail}/>

  <Button className={"btn"} handlerFunction={handlerFunction} task="for-accepting">Subscribe to monthly newsletter</Button>  
    </div>



)
}

export default EmailVerifing