const mongoose=require('mongoose')

const Data_Scheme=new mongoose.Schema({
    name:{type:String,require},
    year:{type:Number,require},
    profile:{type:String,require},
    url:{type:String,require},
    label:{type:String,require},
    source:{type:String}

})

const DataModel=mongoose.model('data',Data_Scheme)
module.exports={DataModel}