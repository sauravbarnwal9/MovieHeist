const validator=require("validator")



const  loginValidator=(req,res,next)=>{
    const data=req.body
    let password=data.password
    let email=data.email

return (password&&validator.isEmail(email))?next():res.send({"msg":"please write in correct format"})

}
module.exports={
    loginValidator
}