import user from "../models/User";
import rol from "../models/rol";
import { ROLES } from "../models/rol";

export const crearUsuario = async (res, req) => {

    const { username, correo, rol} = req.body;
    const rol_encontrado = await.findOne();
}


function getAllUsers(req, res) {
    res.status(200).json({users:['Andres', 'Pedro']})
}

function searchUser(req, res){

}

module.exports = {getAllUsers, saveUser, searchUser}
