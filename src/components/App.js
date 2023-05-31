import react from 'react'
import SigninPage from './SigninPage'
import { useState } from 'react'
// import '../componentstyle.css'
import SuccessState from './SuccessState'


 const App = ()=>{
    const [isVisible , setVisiblity] = useState(true)
    const handleToggle = ()=>{
setVisiblity(!isVisible)
console.log(isVisible)
    }
    
    return (<>
    
    {isVisible ?<SigninPage handleToggle={handleToggle}/>:<SuccessState handleToggle={handleToggle}/>} 
    </>)
}

{/* {isVisible && <  SigninPage handleToggle={handleToggle}/>}
 {!isVisible && <SuccessState handleToggle={handleToggle}/>} */}

export default App