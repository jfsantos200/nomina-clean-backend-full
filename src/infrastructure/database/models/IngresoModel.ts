import mongoose from 'mongoose';

const IngresoSchema = new mongoose.Schema({
  empleadoId: { type: String, required: true },
  concepto: { type: String, required: true },
  monto: { type: Number, required: true },
  fecha: { type: Date, required: true }
});

export const IngresoModel = mongoose.model('Ingreso', IngresoSchema);
