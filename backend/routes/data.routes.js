const { Router } = require("express");
const {
  addData,
  getData,
  UpdateData,
  ReplaceData,
  RemoveData,
} = require("../controller/data.controller");
const { dataExist } = require("../middlewares/dataExist");

const data = Router();

data.post("/add", dataExist, addData);
data.get("/get", getData);
data.patch("/update/:dataId", UpdateData);
data.put("/replace/:dataId", ReplaceData);
data.delete("/remove/:dataId", RemoveData);
module.exports = {
  data,
};
