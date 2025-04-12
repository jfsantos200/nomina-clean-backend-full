import { Router } from 'express';
import { crearIngreso, obtenerIngresosEmpleado } from '../../application/controllers/IngresoController';

const router = Router();
router.post('/', crearIngreso);
router.get('/empleado/:empleadoId', obtenerIngresosEmpleado);
export default router;
