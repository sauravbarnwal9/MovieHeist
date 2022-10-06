const express=require('express')
const { connection } = require('./config/db')
const { data } = require('./routes/data.routes')

const app=express()
app.use(express.json())
app.use("/data",data)
app.get('/',(req,res)=>{
    res.send("Hello everyone")
})
app.listen(8080,async()=>{
    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log("something is missing")
    }
    console.log("server running....")
})

