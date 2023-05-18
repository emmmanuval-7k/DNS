
var express = require('express');
var router = express.Router();
var CategoryModel = require('../models/CategoryModel')
let products = require("../datas/product");
const productModel = require('../models/productModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/addCata', async(req,res)=>{
    try {
        let data = {
          cataName:"Electronic gadjets"
        }
      let cata =  await CategoryModel.create(data)
        console.log("data inserted")
    } catch (error) {
        console.log(error)
    }
})
router.get("/addproduct", async(req,res)=>{
  try {
      console.log(products)
     let addproduct = await productModel.create(products)
     console.log("Products added")
  } catch (error) {
      console.log(error)
  }
})
router.get('/getTotalcata', async(req,res)=>{
  try {
      let cata =  await CategoryModel.count();
      console.log(cata)
      res.json(cata)
  } catch (error) {
      console.log(error)
  }
})
router.get('/getCata', async(req,res)=>{
  try {
      let cataG =  await CategoryModel.find();
      console.log(cataG)
      res.json(cataG)
  } catch (error) {
      console.log(error)
  }
})
router.get('/getEcgadjets', async(req,res)=>{
  try {
      let ecg =  await productModel.find();
      console.log(ecg)
      res.json(ecg); 
  } catch (error) {
      console.log(error)
  }
})

router.get('/get-allMobile', async(req,res)=>{
  try {
      let mobile =  await productModel.find({category:"6464b7f910401815262ddd9e"});
      console.log(mobile,"mobiles.......")
      res.json(mobile); 
  } catch (error) {
      console.log(error)
  }
})
module.exports = router;
