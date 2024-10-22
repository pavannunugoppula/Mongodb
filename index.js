

const express = require("express")
const dotenv = require("dotenv")
const { MongoClient } = require("mongodb")
const mongoose = require("mongoose")
const bodyparser=require("body-parser")
const app = express()
app.use(express.json())
const port = 5000;
process.env
dotenv.config()
MongoClient.connect(process.env.MONGO_URL)
    .then(() =>{
    console.log("mongodb connected successfully")
    })
    .catch((error) => {
    console.log("error",error)
})





app.listen(port, () => {
    console.log(`server running at port :${port}`)
})


