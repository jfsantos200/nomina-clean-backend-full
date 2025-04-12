import { Router } from 'express';
import { obtenerDeducciones } from '../../application/controllers/DeduccionController';

const router = Router();
router.get('/', obtenerDeducciones);
export default router;
