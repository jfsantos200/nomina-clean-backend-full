// === src/application/controllers/EmpleadoController.ts ===
import { Request, Response } from 'express';
import { EmpleadoRepositorioImpl } from '../../infrastructure/repositories/EmpleadoRepositorioImpl';

const repo = new EmpleadoRepositorioImpl();

export const crearEmpleado = async (req: Request, res: Response) => {
  try {
    const empleado = await repo.crear(req.body);
    res.status(201).json(empleado);
  } catch (error: any) {                     // ← error tipado como any
    res.status(500).json({ error: error.message });
  }
};

export const obtenerEmpleados = async (_: Request, res: Response) => {
  const lista = await repo.obtenerTodos();
  res.json(lista);
};

export const obtenerEmpleado = async (req: Request, res: Response) => {
  const emp = await repo.obtenerPorId(req.params.id);
  if (!emp) return res.status(404).json({ error: 'Empleado no encontrado' });
  res.json(emp);
};

export const actualizarEmpleado = async (req: Request, res: Response) => {
  try {
    const emp = await repo.actualizar(req.params.id, req.body);
    if (!emp) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json(emp);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarEmpleado = async (req: Request, res: Response) => {
  try {
    await repo.eliminar(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

