const express = require("express");
const productServices = require('../services/product')
const FRUITS_JSON = require("../jsons/fruits.json")
const VEGTABLES_JSON = require("../jsons/vegtables.json")
const router = express.Router();


//get all products data
// router.get("/", async (req, res) => {
//     try {
//     const {category} = req.query 
//     console.log(category);
//      const data = await productServices.getProducts(category)
//       res.status(200).send(data)
//     }
//     catch(e) {
//         res.status(500).send({error:e.message})
//     }
// })



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

//*********************************************************************** */
//************************************************************************** */
//STATIC ROUTES

router.get("/", async (req, res) => {

    try{
        const {Product_type, category} = req.query 

        if  (!Product_type) {
            throw new Error ('please send Product_type in params')
        }
        
        if  (!category) {
            throw new Error ('please send category in params')
        }

        if (Product_type === 'grocery' && category === "vegetables") {
            return res.status(200).send({data:VEGTABLES_JSON})
        }

        else if (Product_type === 'grocery' && category === "fruits") {
            return res.status(200).send({data:FRUITS_JSON})
        }
    }
    catch (e) {
      res.status(500).send({error:e.message})
    }

})




module.exports = router;