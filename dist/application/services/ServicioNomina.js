"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioNomina = void 0;
class ServicioNomina {
    constructor(empleadoRepo, ingresoRepo, isrCalc, nominaRepo) {
        this.empleadoRepo = empleadoRepo;
        this.ingresoRepo = ingresoRepo;
        this.isrCalc = isrCalc;
        this.nominaRepo = nominaRepo;
    }
    async generarQuincena(empleadoId, fecha) {
        const empleado = await this.empleadoRepo.obtenerPorId(empleadoId);
        if (!empleado)
            throw new Error('Empleado no encontrado');
        const ingresos = await this.ingresoRepo.obtenerPorEmpleado(empleadoId);
        const totalIngresos = ingresos.reduce((sum, i) => sum + i.monto, 0);
        const salarioQuincenal = empleado.salarioBase / 2;
        const gravable = salarioQuincenal + totalIngresos;
        const isr = await this.isrCalc.calcularISR(gravable);
        const total = gravable - isr;
        const nomina = {
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
exports.ServicioNomina = ServicioNomina;
