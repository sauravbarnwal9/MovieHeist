const { DataModel } = require("../model/data.model")

exports.addData=(req,res)=>{
const data=req.body
const NewData=new DataModel(data)
NewData.save()
res.send({"msg":"successfully added"})

}
exports.getData=async(req,res)=>{
    const query=req.query || null
 
    let data=await DataModel.find(query)
    res.send({"movies":data})
}