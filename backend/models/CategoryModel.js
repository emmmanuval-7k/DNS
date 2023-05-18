var mongoose = require("mongoose");

let categoryModel =new  mongoose.Schema({
    cataName:{
        type:String
    }
})
module.exports = mongoose.model('category', categoryModel);  