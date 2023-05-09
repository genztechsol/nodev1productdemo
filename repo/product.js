const knex = require('knex')
({
    client: "mysql2",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "product",
    },
});

const PRODUCT = 'product'

const getAllproduct = async (category) => {
    try{
     let data = await knex(PRODUCT).where({category:category})
     return data
    }
    catch(e){
        throw new Error(`db error ${e.message}`)
    }
}

const addNewProduct = async (payload) => {
    try{
      let data = await knex(PRODUCT).insert(payload)
      return data
    }
    catch (e) {
      throw new Error(`db error ${e.message}`)
    }
}

const updateProduct = async (id, body) => {
    try{
      let data = await knex(PRODUCT).where({id}).update(body)
      return data
    }
    catch(e) {
        throw new Error(`db error ${e.message}`)
    }
}

const deleteProduct = async (id) => {
    try {
      const data = await knex(PRODUCT).where({id}).del()
      return data
    }
    catch (e) {
        throw new Error(`db error ${e.message}`)
    }
}


module.exports = {
    addNewProduct,
    getAllproduct,
    updateProduct,
    deleteProduct
}