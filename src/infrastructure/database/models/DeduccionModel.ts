import mongoose from 'mongoose';

const DeduccionSchema = new mongoose.Schema({
  limiteInferior: { type: Number, required: true },
  limiteSuperior: { type: Number, required: true },
  cuotaFija: { type: Number, required: true },
  porcentajeExcedente: { type: Number, required: true }
});

export const DeduccionModel = mongoose.model('Deduccion', DeduccionSchema);
