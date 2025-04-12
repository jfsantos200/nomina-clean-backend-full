import { Empleado } from '../entities/Empleado';

export interface EmpleadoRepositorio {
  crear(empleado: Empleado): Promise<Empleado>;
  obtenerTodos(): Promise<Empleado[]>;
  obtenerPorId(id: string): Promise<Empleado | null>;
  actualizar(id: string, empleado: Partial<Empleado>): Promise<Empleado | null>;
  eliminar(id: string): Promise<void>;
}
