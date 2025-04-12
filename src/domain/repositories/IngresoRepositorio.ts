import { Ingreso } from '../entities/Ingreso';

export interface IngresoRepositorio {
  crear(ingreso: Ingreso): Promise<Ingreso>;
  obtenerPorEmpleado(empleadoId: string): Promise<Ingreso[]>;
}
