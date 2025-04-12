import { Request, Response } from 'express';
import { IngresoRepositorioImpl } from '../../infrastructure/repositories/IngresoRepositorioImpl';

const ingresoRepo = new IngresoRepositorioImpl();

export const crearIngreso = async (req: Request, res: Response) => {
  try {
    const ingreso = await ingresoRepo.crear(req.body);
    res.status(201).json(ingreso);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
  }
};
export const obtenerIngresosEmpleado = async (req: Request, res: Response) => {
  const ingresos = await ingresoRepo.obtenerPorEmpleado(req.params.empleadoId);
  res.json(ingresos);
};
