const mongoose = require('mongoose')

const sale_detailsSchema = mongoose.Schema({
    num_detail: String,
    id_sale: String,
    id_product: Number,
    cantidad: Number,
    Precio: Number,
},
{
  versionKey: false
}); 

module.exports = mongoose.model("Detalle", sale_detailsSchema);