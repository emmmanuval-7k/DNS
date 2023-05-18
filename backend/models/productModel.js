const mongoose = require('mongoose');

let product = new  mongoose.Schema({
    productName:{
        type:String,
        required: [true, "Must Provide name"],
    },
    price:{
        type:String,
        required: [true, "Must Provide name"],
    },
    category:{
        type:String,
        required: [true, "Must Provide name"],
    }
})
module.exports = mongoose.model('Product', product);  