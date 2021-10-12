const mongoose = require('mongoose')

const ventaSchema = mongoose.Schema({
    num_venta: String,
    id_usuario: String,
    fecha: Date,
},
{
  versionKey: false
}); 

module.exports = mongoose.model("Venta", ventaSchema);