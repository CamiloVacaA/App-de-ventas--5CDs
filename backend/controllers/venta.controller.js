const venta = require('../models/venta')

async function saveVenta(req, res) {
    const { num_venta, id_usuario, fecha} = req.body
   
    const newVen = new venta({
        num_venta,
        id_usuario,
        fecha
    }) 
    let ven = await newVen.save()
    res.status(201).json(ven)
}

async function getAll(req, res){
    let result = await venta.find();
    res.status(201).json(result)
}

async function search(req, res){
    let result = await venta.find(req.query)
    res.status(201).json(result)
}

module.exports = {
    saveVenta,
    getAll,
    search
}