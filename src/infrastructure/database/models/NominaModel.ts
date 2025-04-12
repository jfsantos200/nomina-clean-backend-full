import mongoose from 'mongoose';

const NominaSchema = new mongoose.Schema({
  empleadoId: { type: String, required: true },
  salarioBase: { type: Number, required: true },
  ingresos: { type: Number, required: true },
  isr: { type: Number, required: true },
  total: { type: Number, required: true },
  fecha: { type: Date, required: true }
});

export const NominaModel = mongoose.model('Nomina', NominaSchema);
