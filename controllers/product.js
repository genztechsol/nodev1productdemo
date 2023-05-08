const express = require("express");
const productServices = require('../services/product')

const router = express.Router();

let PRODUCT_DATA = {
    "products": [
        {
            "id": 1,
            "image_url": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
            "discount": 20,
            "discount_price": 80,
            "original_price": 100,
            "quantity": 0,
            "Product_type": "grocery",
            "category": "vegtables",
            "product_name": "potato"
        },
        {
            "id": 2,
            "image_url": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
            "discount": 20,
            "discount_price": 80,
            "original_price": 100,
            "quantity": 0,
            "Product_type": "grocery",
            "category": "fruits",
            "product_name": "apple"
        },
        {
            "id": 3,
            "image_url": "https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
            "discount": 20,
            "discount_price": 80,
            "original_price": 100,
            "quantity": 0,
            "Product_type": "grocery",
            "category": "fruits",
            "product_name": "banana"
        }
    ]
}

//get all products data
router.get("/", async (req, res) => {
    try {
    //   const {Product_type, category} = req.query 
      
    //   const data = await productServices.getProducts()
      res.status(200).send(PRODUCT_DATA)
    }
    catch(e) {
        res.status(500).send({error:e.message})
    }
})

//get product details by id
// router.get("/:id", (req, res) => {
//     res.send("<h1>Hello world</h1>")
// })

//create product 
router.post("/", async (req, res) => {
    let body = req.body 
    try{
      if (!body) {
        throw new Error('please send body')
      }
      const result = await productServices.createProduct(body)
      res.status(200).send({status:'success'})
    }
    catch(e) {
        res.status(500).send({error:e.message})
    }
})

//update product by id
router.put("/:id", async (req, res) => {
    let body = req.body 
    let id = req.params.id 
    try{
        if (!id) {
            throw new Error('please send in params')
        }
        if (!body) {
            throw new Error('please send body in payload')
        }
        
        await productServices.updateProductData(id, body)
        res.status(200).send({status:"success"})

    }
    catch (e) {
        res.status(500).send({error:e.message})
    }
})

//delete product by id
router.delete("/:id", async (req, res) => {
    let id = req.params.id 
    try{
       if (!id) {
        throw new Error('please send in params')
       }
       await productServices.deleteproduct(id)
       res.status(200).send({status:"success"})

    }
    catch (e) {
       res.status(500).send({error:e.message})
    }
})

module.exports = router;