const detalle_venta = require('../models/detalle_venta')

async function saveDetalleVenta(req, res) {
    const { num_detalle, num_venta, id_product, cantidad, precio} = req.body
   
    
    const newDetalleVenta = new detalle_venta({
        num_detalle,
        num_venta,
        id_product,
        cantidad,
        precio,
    }) 
    let detalle = await newDetalleVenta.save()
    res.status(201).json(detalle)
}

async function getAll(req, res){
    let result = await detalle_venta.find();
    res.status(200).json(result)
}

async function search(req, res){
    let result = await detalle_venta.find(req.query)
    res.status(200).json(result)
}

module.exports = {
    saveDetalleVenta,
    getAll,
    search
}