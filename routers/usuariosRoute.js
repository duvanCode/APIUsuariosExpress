
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Obtener todos los usuarios
router.get('/', usuariosController.getUsers);

// Obtener usuario por ID
router.get('/:id', usuariosController.getUserById);

// Buscar usuarios por query
router.get('/search/:query', usuariosController.searchUsers);

// Crear usuario
router.post('/', usuariosController.addUser);

// Actualizar usuario
router.put('/:id', usuariosController.updateUser);

// Eliminar usuario
router.delete('/:id', usuariosController.deleteUser);

module.exports = router;
