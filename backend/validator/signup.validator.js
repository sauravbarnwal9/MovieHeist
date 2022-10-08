var validator = require('validator');
const SignUpValidator=(req,res,next)=>{
try {
    let data=req.body
    let name=data.name 
    let email=data.email
    let password=data.password 
 if(name&&validator.isEmail(email)&&password){
    next()

 }
 else{
    
    res.status(404).send({"msg":"please write correct email and password"})
 }
} catch (error) {
    console.log(error)
    res.status(404).send({"msg":"please write correct email and  password"})
    
}
 
 }
 module.exports={SignUpValidator}