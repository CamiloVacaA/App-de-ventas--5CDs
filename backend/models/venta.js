const mongoose = require('mongoose')

const ventaSchema = mongoose.Schema({
    vendedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      require: true
    },
    fecha: Date,
    total: Number
},
{
  versionKey: false
}); 

module.exports = mongoose.model("Venta", ventaSchema);