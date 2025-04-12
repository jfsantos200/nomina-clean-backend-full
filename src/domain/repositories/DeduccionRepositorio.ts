import { Deduccion } from '../entities/Deduccion';

export interface DeduccionRepositorio {
  obtenerTodos(): Promise<Deduccion[]>;
}
