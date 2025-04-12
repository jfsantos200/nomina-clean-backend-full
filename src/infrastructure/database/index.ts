import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const conectarDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/nomina_db');
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB', error);
    process.exit(1);
  }
};
