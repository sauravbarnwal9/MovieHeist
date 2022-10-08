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
exports.UpdateData=async(req,res)=>{
    const id=req.params.dataId;
    console.log(id)
const update=req.body
try {
    const data=await DataModel.findByIdAndUpdate(id,update)
    res.status(201).send({"msg":"Your data has been updated successfully"})
} catch (error) {
    res.status(404).send({"msg":"something went wrong please try again!"})
}    
    
}
exports.ReplaceData=async(req,res)=>{
    const id=req.params.dataId;
    console.log(id)
const update=req.body
try { 
    await DataModel.findOneAndReplace(id,update)
    res.status(201).send({"msg":"Your data has been changed successfully"})
} catch (error) {
    res.status(404).send({"msg":"something went wrong please try again!"})
}    
    
}
exports.RemoveData=async(req,res)=>{
    const id=req.params.dataId;
    console.log(id)

try {
    const data=await DataModel.findByIdAndDelete(id)
    res.status(201).send({"msg":"Your data has been deleted successfully"})
} catch (error) {
    res.status(404).send({"msg":"something went wrong please try again!"})
}    
    
}