var mongoose = require("mongoose");

let con = ()=>{
    return mongoose.connect("mongodb+srv://user:123@cluster0.fthzbep.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = con;