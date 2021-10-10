const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    valor_unitario: Number,
    estado: {
        type: String,
        enum : ['DISPONIBLE','NO_DISPONIBLE'],
        default: 'DISPONIBLE'
    }
},
{
  versionKey: false
}); 

module.exports = mongoose.model("Product", productSchema);