import { DeduccionRepositorio } from '../../domain/repositories/DeduccionRepositorio';
import { Deduccion } from '../../domain/entities/Deduccion';
import { DeduccionModel } from '../database/models/DeduccionModel';

export class DeduccionRepositorioImpl implements DeduccionRepositorio {
  async obtenerTodos(): Promise<Deduccion[]> {
    return DeduccionModel.find().lean();
  }
}
