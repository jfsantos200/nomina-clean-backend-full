import { EmpleadoRepositorio } from '../../domain/repositories/EmpleadoRepositorio';
import { Empleado } from '../../domain/entities/Empleado';
import { EmpleadoModel } from '../database/models/EmpleadoModel';

export class EmpleadoRepositorioImpl implements EmpleadoRepositorio {
  async crear(empleado: Empleado): Promise<Empleado> {
    const creado = await EmpleadoModel.create(empleado);
    return creado.toObject();
  }
  async obtenerTodos(): Promise<Empleado[]> {
    return EmpleadoModel.find().lean();
  }
  async obtenerPorId(id: string): Promise<Empleado | null> {
    return EmpleadoModel.findById(id).lean();
  }
  async actualizar(id: string, empleado: Partial<Empleado>): Promise<Empleado | null> {
    return EmpleadoModel.findByIdAndUpdate(id, empleado, { new: true }).lean();
  }
  async eliminar(id: string): Promise<void> {
    await EmpleadoModel.findByIdAndDelete(id);
  }
}
