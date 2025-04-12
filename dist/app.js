"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// === src/app.ts ===
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv")); // ← Import correcto
const database_1 = require("./infrastructure/database");
const empleadoRoutes_1 = __importDefault(require("./presentation/routes/empleadoRoutes"));
const ingresoRoutes_1 = __importDefault(require("./presentation/routes/ingresoRoutes"));
const deduccionRoutes_1 = __importDefault(require("./presentation/routes/deduccionRoutes"));
const nominaRoutes_1 = __importDefault(require("./presentation/routes/nominaRoutes"));
// Carga las variables de entorno antes de usarlas
dotenv_1.default.config(); // ← dotenv.config() al inicio
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, database_1.conectarDB)();
app.use('/api/empleados', empleadoRoutes_1.default);
app.use('/api/ingresos', ingresoRoutes_1.default);
app.use('/api/deducciones', deduccionRoutes_1.default);
app.use('/api/nominas', nominaRoutes_1.default);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
