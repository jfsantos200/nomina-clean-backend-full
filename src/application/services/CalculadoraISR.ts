import { DeduccionRepositorio } from '../../domain/repositories/DeduccionRepositorio';

export class CalculadoraISR {
  constructor(private deduccionRepo: DeduccionRepositorio) {}

  async calcularISR(quincenal: number): Promise<number> {
    const tablas = await this.deduccionRepo.obtenerTodos();
    const tabla = tablas.find(t => quincenal >= t.limiteInferior && quincenal <= t.limiteSuperior);
    if (!tabla) return 0;
    const excedente = quincenal - tabla.limiteInferior;
    const impuesto = tabla.cuotaFija + excedente * (tabla.porcentajeExcedente / 100);
    return parseFloat(impuesto.toFixed(2));
  }
}
