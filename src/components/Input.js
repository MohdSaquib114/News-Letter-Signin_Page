import react from 'react'
import reactDom from 'react-dom'
import '../componentstyle.css'

const Input = ({valueReader, errStateStyle})=>{
const style = errStateStyle!==null ?errStateStyle:{display:"none", borderColor:"hsl(235, 7%, 66%)",backgroundColor:"white"}

    return <div className='input-container'>
    <label className='input-label' >Email address</label>
    <p className='error-state-msg' style={{display:style.display}}>valid email required</p>
    <input style={{borderColor:style.borderColor,backgroundColor:style.backgroundColor}} onChange={(e)=>valueReader(e.target.value) } className='input-field' id='input' type='text' placeholder='email@company.com'></input>
    
    {/* <button></button> */}
    </div>
}

export default Input