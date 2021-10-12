const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    estado: {
        type: String,
        enum : ['DISPONIBLE','NO_DISPONIBLE'],
        default: 'DISPONIBLE'
    }
  },
  {
    versionKey: false
  }
); 

module.exports = mongoose.model("Producto", productSchema);