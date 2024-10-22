

const mongoose = require("mongoose")
const { type } = require("os")

const schema = new mongoose.schema({
    name: {
        type: stringify,
        required:true
    },
    email: {
        type: stringify,
        require:true
    },
    phone: {
        type:Number
    },
    city: {
        type:string
    }
})
module.exports=mongoose.model("Employee",schema)