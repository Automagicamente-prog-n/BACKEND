import express from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/user', getAllUsers);        // Obtener todos los usuarios
router.post('/user', createUser);        // Crear un usuario
router.put('/user/:id', updateUser);      // Actualizar un usuario por ID
router.delete('/user/:id', deleteUser);  // Eliminar un usuario por ID

export default router;
