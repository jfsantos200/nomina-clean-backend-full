"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresoRepositorioImpl = void 0;
const IngresoModel_1 = require("../database/models/IngresoModel");
class IngresoRepositorioImpl {
    async crear(ingreso) {
        const creado = await IngresoModel_1.IngresoModel.create(ingreso);
        return creado.toObject();
    }
    async obtenerPorEmpleado(empleadoId) {
        return IngresoModel_1.IngresoModel.find({ empleadoId }).lean();
    }
}
exports.IngresoRepositorioImpl = IngresoRepositorioImpl;
