"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const IngresoSchema = new mongoose_1.default.Schema({
    empleadoId: { type: String, required: true },
    concepto: { type: String, required: true },
    monto: { type: Number, required: true },
    fecha: { type: Date, required: true }
});
exports.IngresoModel = mongoose_1.default.model('Ingreso', IngresoSchema);
