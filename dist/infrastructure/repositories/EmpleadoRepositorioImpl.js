"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoRepositorioImpl = void 0;
const EmpleadoModel_1 = require("../database/models/EmpleadoModel");
class EmpleadoRepositorioImpl {
    async crear(empleado) {
        const creado = await EmpleadoModel_1.EmpleadoModel.create(empleado);
        return creado.toObject();
    }
    async obtenerTodos() {
        return EmpleadoModel_1.EmpleadoModel.find().lean();
    }
    async obtenerPorId(id) {
        return EmpleadoModel_1.EmpleadoModel.findById(id).lean();
    }
    async actualizar(id, empleado) {
        return EmpleadoModel_1.EmpleadoModel.findByIdAndUpdate(id, empleado, { new: true }).lean();
    }
    async eliminar(id) {
        await EmpleadoModel_1.EmpleadoModel.findByIdAndDelete(id);
    }
}
exports.EmpleadoRepositorioImpl = EmpleadoRepositorioImpl;
