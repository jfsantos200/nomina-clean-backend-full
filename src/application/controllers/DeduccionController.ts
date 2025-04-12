import { Request, Response } from 'express';
import { DeduccionRepositorioImpl } from '../../infrastructure/repositories/DeduccionRepositorioImpl';

const dedRepo = new DeduccionRepositorioImpl();

export const obtenerDeducciones = async (_: Request, res: Response) => {
  const tablas = await dedRepo.obtenerTodos();
  res.json(tablas);
};
