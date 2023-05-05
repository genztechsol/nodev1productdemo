const productController = require('../controllers/product')


const setUpRoutes = (app) => {
    app.use("/product",  productController)
}

module.exports.setUpRoutes = setUpRoutes