const productRepo = require('../repo/product')


const getProducts = async () => {
    const data = await productRepo.getAllproduct()
    return data
}

const createProduct = async (body) => {
    const data = await productRepo.addNewProduct(body)
    return data
}

const updateProductData = async (id, body) => {
    const data = await productRepo.updateProduct(id, body)
    return data
}

const deleteproduct = async (id) => {
  const data = await productRepo.deleteProduct(id)
  return data
}

module.exports = {
    createProduct,
    getProducts,
    updateProductData,
    deleteproduct
}