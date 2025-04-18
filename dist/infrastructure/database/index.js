"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectarDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const conectarDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/nomina_db');
        console.log('✅ Conectado a MongoDB');
    }
    catch (error) {
        console.error('❌ Error al conectar a MongoDB', error);
        process.exit(1);
    }
};
exports.conectarDB = conectarDB;
