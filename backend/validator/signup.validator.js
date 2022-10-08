var validator = require('validator');
const SignUpValidator=(data)=>{
    let name=data.name 
    let email=data.email
    let password=data.password 
 return (name&&validator.isEmail(email)&&password)?true:false
 
 
 }
 module.exports={SignUpValidator}