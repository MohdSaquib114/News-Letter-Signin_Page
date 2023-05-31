const emailVerification = (email)=>{
const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 return regEx.test(email)
}



export default emailVerification