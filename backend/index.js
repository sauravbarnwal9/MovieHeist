const express=require('express')
const { connection } = require('./config/db')
const { data } = require('./routes/data.routes')
const cors = require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use("/data",data)
app.get('/',(req,res)=>{
    res.send("Hello everyone")
})
app.listen(8000,async()=>{
    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server running....")
})

