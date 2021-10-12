
const Usuario = require('../models/usuario')

async function saveUser (res, req) {
    
    const { nombre, correo, rol } = req.body;

    const newUser = new Usuario({
        nombre,
        correo,
        rol
    })

    const user = await newUser.save()
    res.status(201).json(user)
}

async function getAllUsers(req, res) {
    let result = await Usuario.find()
    res.status(200).json(result)
}

async function searchUser(req, res){
    let result = await Usuario.find(req.query)
    res.status(200).json(result)
}

module.exports = {getAllUsers, saveUser, searchUser}