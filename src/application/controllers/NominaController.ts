import { Request, Response } from 'express';
import { ServicioNomina } from '../services/ServicioNomina';
import { EmpleadoRepositorioImpl } from '../../infrastructure/repositories/EmpleadoRepositorioImpl';
import { IngresoRepositorioImpl } from '../../infrastructure/repositories/IngresoRepositorioImpl';
import { DeduccionRepositorioImpl } from '../../infrastructure/repositories/DeduccionRepositorioImpl';
import { NominaRepositorioImpl } from '../../infrastructure/repositories/NominaRepositorioImpl';
import { CalculadoraISR } from '../services/CalculadoraISR';

const empRepo = new EmpleadoRepositorioImpl();
const ingRepo = new IngresoRepositorioImpl();
const dedRepo = new DeduccionRepositorioImpl();
const nomRepo = new NominaRepositorioImpl();
const isrCalc = new CalculadoraISR(dedRepo);
const servicioNomina = new ServicioNomina(empRepo, ingRepo, isrCalc, nomRepo);

export const generarNomina = async (req: Request, res: Response) => {
  try {
    const { empleadoId, fecha } = req.body;
    const nomina = await servicioNomina.generarQuincena(empleadoId, new Date(fecha));
    res.status(201).json(nomina);
  } catch (error) {
    res.status(500).json({ error: (error instanceof Error) ? error.message : 'Unknown error' });

  }
};
export const obtenerNominas = async (_: Request, res: Response) => {
  const lista = await nomRepo.obtenerTodos();
  res.json(lista);
};
export const obtenerNomina = async (req: Request, res: Response) => {
  const nom = await nomRepo.obtenerPorId(req.params.id);
  if (!nom) return res.status(404).json({ error: 'Nómina no encontrada' });
  res.json(nom);
};
