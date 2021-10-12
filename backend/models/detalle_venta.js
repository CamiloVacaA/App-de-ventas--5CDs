const mongoose = require('mongoose')

const detalle_ventaSchema = mongoose.Schema({
    num_detalle: String,
    num_venta: String,
    id_product: Number,
    cantidad: Number,
    precio: Number,
},
{
  versionKey: false
}); 

module.exports = mongoose.model("Detalle", detalle_ventaSchema);