"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EmpleadoSchema = new mongoose_1.default.Schema({
    nombreCompleto: { type: String, required: true },
    rfc: { type: String, required: true },
    salarioBase: { type: Number, required: true },
    puesto: { type: String, required: true }
});
exports.EmpleadoModel = mongoose_1.default.model('Empleado', EmpleadoSchema);
