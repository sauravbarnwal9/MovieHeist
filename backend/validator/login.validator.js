const validator=require("validator")



const  loginValidator=(req,res,next)=>{
    try {
        let data=req.body
        
        let email=data.email
        let password=data.password 
     if(validator.isEmail(email)&&password){
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
module.exports={
    loginValidator
}