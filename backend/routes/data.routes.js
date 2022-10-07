const { Router } = require("express");
const { addData, getData } = require("../controller/data.controller");
const { dataExist } = require("../middlewares/dataExist");


const data=Router()

data.post("/add",dataExist,addData)
data.get("/get",getData)

module.exports={
    data
}