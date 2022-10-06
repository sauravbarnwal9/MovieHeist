const { DataModel } = require("../model/data.model")

exports.addData=(req,res)=>{
const data=req.body
const NewData=new DataModel(data)
NewData.save()
res.send({"msg":"successfully added"})

}
exports.getData=async(req,res)=>{
    const data=await DataModel.find()
    res.send({"movies":data})
}