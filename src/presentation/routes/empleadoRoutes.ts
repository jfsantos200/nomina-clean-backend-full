import { Router } from 'express';
import { crearEmpleado, obtenerEmpleados, obtenerEmpleado, actualizarEmpleado, eliminarEmpleado } from '../../application/controllers/EmpleadoController';

const router = Router();
router.post('/', crearEmpleado);
router.get('/', obtenerEmpleados);
router.get('/:id', obtenerEmpleado);
router.put('/:id', actualizarEmpleado);
router.delete('/:id', eliminarEmpleado);
export default router;
