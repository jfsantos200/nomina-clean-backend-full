// === src/app.ts ===
import express from 'express';
import dotenv from 'dotenv';            // ← Import correcto
import { conectarDB } from './infrastructure/database';
import empleadoRoutes from './presentation/routes/empleadoRoutes';
import ingresoRoutes from './presentation/routes/ingresoRoutes';
import deduccionRoutes from './presentation/routes/deduccionRoutes';
import nominaRoutes from './presentation/routes/nominaRoutes';

// Carga las variables de entorno antes de usarlas
dotenv.config();                         // ← dotenv.config() al inicio

const app = express();
app.use(express.json());

conectarDB();

app.use('/api/empleados', empleadoRoutes);
app.use('/api/ingresos', ingresoRoutes);
app.use('/api/deducciones', deduccionRoutes);
app.use('/api/nominas', nominaRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
