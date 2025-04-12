import { NominaRepositorio } from '../../domain/repositories/NominaRepositorio';
import { Nomina } from '../../domain/entities/Nomina';
import { NominaModel } from '../database/models/NominaModel';

export class NominaRepositorioImpl implements NominaRepositorio {
  async crear(nomina: Nomina): Promise<Nomina> {
    const creado = await NominaModel.create(nomina);
    return creado.toObject();
  }
  async obtenerTodos(): Promise<Nomina[]> {
    return NominaModel.find().lean();
  }
  async obtenerPorId(id: string): Promise<Nomina | null> {
    return NominaModel.findById(id).lean();
  }
}
