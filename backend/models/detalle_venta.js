const mongoose = require('mongoose')

const detalle_ventaSchema = mongoose.Schema({
    venta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venta",
      require: true
    },
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
      require: true
    },
    cantidad: Number,
    precio: Number,
},
{
  versionKey: false
}); 

module.exports = mongoose.model("Detalle", detalle_ventaSchema);