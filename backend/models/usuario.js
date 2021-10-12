const mongoose = require('mongoose')

const userSchema = mongoose.Schema({        
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    correo: {
        type: String,
        unique: true,
        required: true
    },
    rol:  {
        type: String,
        enum : ['ADMIN','VENDEDOR'],
        default: 'VENDEDOR'
    },
    estado:  {
        type: String,
        enum : ['PENDIENTE','AUTORIZADO', 'NO_AUTORIZADO'],
        default: 'PENDIENTE'
    }
}); 

module.exports = mongoose.model("Usuario", userSchema);