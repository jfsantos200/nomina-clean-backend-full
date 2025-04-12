import { Router } from 'express';
import { generarNomina, obtenerNominas, obtenerNomina } from '../../application/controllers/NominaController';

const router = Router();
router.post('/', generarNomina);
router.get('/', obtenerNominas);
router.get('/:id', obtenerNomina);
export default router;
