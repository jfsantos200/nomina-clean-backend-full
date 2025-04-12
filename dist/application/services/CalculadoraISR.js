"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraISR = void 0;
class CalculadoraISR {
    constructor(deduccionRepo) {
        this.deduccionRepo = deduccionRepo;
    }
    async calcularISR(quincenal) {
        const tablas = await this.deduccionRepo.obtenerTodos();
        const tabla = tablas.find(t => quincenal >= t.limiteInferior && quincenal <= t.limiteSuperior);
        if (!tabla)
            return 0;
        const excedente = quincenal - tabla.limiteInferior;
        const impuesto = tabla.cuotaFija + excedente * (tabla.porcentajeExcedente / 100);
        return parseFloat(impuesto.toFixed(2));
    }
}
exports.CalculadoraISR = CalculadoraISR;
