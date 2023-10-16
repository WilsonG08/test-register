import { Router } from 'express';
import { accessProtectedResource } from '../controllers/protectedController.js';
import { requireToken } from '../middleware/tokenMiddleware.js';

const router = Router();

// Ruta protegida que requiere un token válido
router.post('/protected', requireToken, accessProtectedResource);

export default router;
