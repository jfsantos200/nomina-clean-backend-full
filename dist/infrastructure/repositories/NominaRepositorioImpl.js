"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominaRepositorioImpl = void 0;
const NominaModel_1 = require("../database/models/NominaModel");
class NominaRepositorioImpl {
    async crear(nomina) {
        const creado = await NominaModel_1.NominaModel.create(nomina);
        return creado.toObject();
    }
    async obtenerTodos() {
        return NominaModel_1.NominaModel.find().lean();
    }
    async obtenerPorId(id) {
        return NominaModel_1.NominaModel.findById(id).lean();
    }
}
exports.NominaRepositorioImpl = NominaRepositorioImpl;
