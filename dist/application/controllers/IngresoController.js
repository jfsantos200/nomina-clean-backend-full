"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerIngresosEmpleado = exports.crearIngreso = void 0;
const IngresoRepositorioImpl_1 = require("../../infrastructure/repositories/IngresoRepositorioImpl");
const ingresoRepo = new IngresoRepositorioImpl_1.IngresoRepositorioImpl();
const crearIngreso = async (req, res) => {
    try {
        const ingreso = await ingresoRepo.crear(req.body);
        res.status(201).json(ingreso);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'An unknown error occurred' });
    }
};
exports.crearIngreso = crearIngreso;
const obtenerIngresosEmpleado = async (req, res) => {
    const ingresos = await ingresoRepo.obtenerPorEmpleado(req.params.empleadoId);
    res.json(ingresos);
};
exports.obtenerIngresosEmpleado = obtenerIngresosEmpleado;
