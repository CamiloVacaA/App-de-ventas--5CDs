const Producto = require('../models/Product')

async function saveProduct(req, res) {
    const { nombre, descripcion, valor_unitario, estado} = req.body
   
    const newProd = new Producto({
        nombre,
        descripcion,
        valor_unitario,
        estado
    }) 
    let prod = await newProd.save()
    res.status(201).json(prod)
}

async function getAll(req, res){
    let result = await Producto.find();
    res.status(200).json(result)
}

async function search(req, res){
    let result = await Producto.find(req.query)
    res.status(200).json(result)
}

module.exports = {
    saveProduct,
    getAll,
    search
}