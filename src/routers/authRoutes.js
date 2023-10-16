import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = Router();

// Ruta para el registro de usuarios
router.post('/register', registerUser);

// Ruta para el inicio de sesión
router.post('/login', loginUser);

export default router;
