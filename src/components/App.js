import react from 'react'
import SigninPage from './SigninPage'
import { useState } from 'react'
import emailVerification from './emailVerifier'
import SuccessState from './SuccessState'


 const App = ()=>{
    const [isVisible , setVisiblity] = useState(true)
    const [email, setEmail] = useState('')
    const [errStateStyle, setErrStateStyle] =useState({})
    
    
    const handleToggle = ()=>{
    if(emailVerification(email)){
setVisiblity(!isVisible)}
else{
    setErrStateStyle({borderColor:"hsl(4, 100%, 67%)", backgroundColor:" hsl(4, 100%, 67%,0.5)", display:"block"})
    setTimeout(function(){
        setErrStateStyle(null)
    },3000)
    }

    }
    
    return (<>
    
    {isVisible ?<SigninPage errStateStyle={errStateStyle} setEmail={setEmail} handleToggle={handleToggle}/>:<SuccessState email={email} setEmail={setEmail} handleToggle={handleToggle}/>} 
    </>)
}


export default App