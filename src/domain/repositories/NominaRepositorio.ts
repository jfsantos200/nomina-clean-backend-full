import { Nomina } from '../entities/Nomina';

export interface NominaRepositorio {
  crear(nomina: Nomina): Promise<Nomina>;
  obtenerTodos(): Promise<Nomina[]>;
  obtenerPorId(id: string): Promise<Nomina | null>;
}
