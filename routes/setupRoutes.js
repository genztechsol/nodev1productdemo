const productController = require('../controllers/product')


const setUpRoutes = (app) => {
    app.use("/products",  productController)
}

module.exports.setUpRoutes = setUpRoutes