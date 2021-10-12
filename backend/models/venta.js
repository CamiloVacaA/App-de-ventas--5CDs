const mongoose = require('mongoose')

const saleSchema = mongoose.Schema({
    num_venta: String,
    id_usuario: String,
    date: Date,
},
{
  versionKey: false
}); 

module.exports = mongoose.model("Venta", ventaSchema);