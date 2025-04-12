import { NominaRepositorio } from '../../domain/repositories/NominaRepositorio';
import { EmpleadoRepositorio } from '../../domain/repositories/EmpleadoRepositorio';
import { IngresoRepositorio } from '../../domain/repositories/IngresoRepositorio';
import { CalculadoraISR } from './CalculadoraISR';
import { Nomina } from '../../domain/entities/Nomina';

export class ServicioNomina {
  constructor(
    private empleadoRepo: EmpleadoRepositorio,
    private ingresoRepo: IngresoRepositorio,
    private isrCalc: CalculadoraISR,
    private nominaRepo: NominaRepositorio
  ) {}

  async generarQuincena(empleadoId: string, fecha: Date): Promise<Nomina> {
    const empleado = await this.empleadoRepo.obtenerPorId(empleadoId);
    if (!empleado) throw new Error('Empleado no encontrado');
    const ingresos = await this.ingresoRepo.obtenerPorEmpleado(empleadoId);
    const totalIngresos = ingresos.reduce((sum, i) => sum + i.monto, 0);
    const salarioQuincenal = empleado.salarioBase / 2;
    const gravable = salarioQuincenal + totalIngresos;
    const isr = await this.isrCalc.calcularISR(gravable);
    const total = gravable - isr;
    const nomina: Nomina = {
      empleadoId,
      salarioBase: salarioQuincenal,
      ingresos: totalIngresos,
      isr,
      total,
      fecha
    };
    return this.nominaRepo.crear(nomina);
  }
}
