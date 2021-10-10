const Product = require('../models/Product')

async function saveProduct(req, res) {
    const { nombre, descripcion, valor_unitario, estado} = req.body
   
    const newProd = new Product({
        nombre,
        descripcion,
        valor_unitario,
        estado
    }) 
    let prod = await newProd.save()
    res.status(200).json(prod)
}

async function getAll(req, res){
    let result = await Product.find();
    res.status(200).json(result)
}

async function search(req, res){
    let result = await Product.find(req.query)
    res.status(200).json(result)
}

module.exports = {
    saveProduct,
    getAll,
    search
}