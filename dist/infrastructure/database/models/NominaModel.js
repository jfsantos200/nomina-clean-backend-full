"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NominaModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const NominaSchema = new mongoose_1.default.Schema({
    empleadoId: { type: String, required: true },
    salarioBase: { type: Number, required: true },
    ingresos: { type: Number, required: true },
    isr: { type: Number, required: true },
    total: { type: Number, required: true },
    fecha: { type: Date, required: true }
});
exports.NominaModel = mongoose_1.default.model('Nomina', NominaSchema);
