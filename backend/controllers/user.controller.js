function getAllUsers(req, res) {
    res.status(200).json({users:['Andres', 'Pedro']})
}

function saveUser(req, res){

}

function searchUser(req, res){

}

module.exports = {getAllUsers, saveUser, searchUser}