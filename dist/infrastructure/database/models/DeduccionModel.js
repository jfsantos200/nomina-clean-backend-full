"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeduccionModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DeduccionSchema = new mongoose_1.default.Schema({
    limiteInferior: { type: Number, required: true },
    limiteSuperior: { type: Number, required: true },
    cuotaFija: { type: Number, required: true },
    porcentajeExcedente: { type: Number, required: true }
});
exports.DeduccionModel = mongoose_1.default.model('Deduccion', DeduccionSchema);
