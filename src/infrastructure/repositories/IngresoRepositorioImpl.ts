import { IngresoRepositorio } from '../../domain/repositories/IngresoRepositorio';
import { Ingreso } from '../../domain/entities/Ingreso';
import { IngresoModel } from '../database/models/IngresoModel';

export class IngresoRepositorioImpl implements IngresoRepositorio {
  async crear(ingreso: Ingreso): Promise<Ingreso> {
    const creado = await IngresoModel.create(ingreso);
    return creado.toObject();
  }
  async obtenerPorEmpleado(empleadoId: string): Promise<Ingreso[]> {
    return IngresoModel.find({ empleadoId }).lean();
  }
}
