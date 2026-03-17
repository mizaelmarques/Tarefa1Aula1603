const userData = require('../data/usersData');

function listUsers(req, res) {
    const users = userData.getUsers();
    res.json(users);
}

function getUserById(req, res) {
    const user = userData.getUserById(req.params.id);

    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
}

//CreateUser
function createUser(req, res) {
    const { nome } = req.body;
    const newUser = userData.createUser(nome);
    res.status(201).json(newUser);
}

//POST CreateUser
function createUserPost(req, res) {
    const { nome } = req.body;
    const newUser = userData.createUser(nome);
    res.status(201).json(newUser);
}

//PUT UpdateUser
function updateUser(req, res) {
    const { id } = req.params;
    const { nome } = req.body;

    const user = userData.updateUser(id, nome);

    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
}

//Delete User
function deleteUser(req, res) {
    const { id } = req.params;

    const deleted = userData.deleteUser(id);

    if (!deleted) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário deletado com sucesso' });
}


module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser };
