const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const userData = require('../data/usersData');
const validateUser = require('../middlewares/validateuser');

// GET - Listar todos os usuários
router.get('/users', userController.listUsers);

// GET - Listar usuário por ID
router.get('/users/:id', userController.getUserById);

// POST - Criar um novo usuário
router.post('/users', validateUser, userController.createUser);

// PUT - Atualizar um usuário
router.put('/users/:id', validateUser, userController.updateUser);

// DELETE - Remover um usuário
router.delete('/users/:id', userController.deleteUser);

module.exports = router;