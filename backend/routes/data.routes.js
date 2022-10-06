const { Router } = require("express");
const { addData, getData } = require("../controller/data.controller");


const data=Router()

data.post("/add",addData)
data.get("/get",getData)

module.exports={
    data
}