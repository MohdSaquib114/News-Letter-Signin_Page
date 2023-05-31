import react from 'react'
import reactDom from 'react-dom'
import '../componentstyle.css'

const Input = ()=>{
    return <div className='input-container'>
    <label className='input-label' >Email address</label>
    <input className='input-field' id='input' type='text' placeholder='email@company.com'></input>
    
    {/* <button></button> */}
    </div>
}

export default Input