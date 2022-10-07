const { DataModel } = require("../model/data.model");

const dataExist=async(req,res,next)=>{
const data=req.body;
const {name}=req.body;
const movie=  await DataModel.findOne({name:name})

if(movie){res.status(300).send({"msg":"Data Exist"})}

    else{next()}
}
module.exports={dataExist}