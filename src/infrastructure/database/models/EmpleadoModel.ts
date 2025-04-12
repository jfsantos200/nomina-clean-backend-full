import mongoose from 'mongoose';

const EmpleadoSchema = new mongoose.Schema({
  nombreCompleto: { type: String, required: true },
  rfc: { type: String, required: true },
  salarioBase: { type: Number, required: true },
  puesto: { type: String, required: true }
});

export const EmpleadoModel = mongoose.model('Empleado', EmpleadoSchema);
