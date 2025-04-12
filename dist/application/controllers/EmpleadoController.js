"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEmpleado = exports.actualizarEmpleado = exports.obtenerEmpleado = exports.obtenerEmpleados = exports.crearEmpleado = void 0;
const EmpleadoRepositorioImpl_1 = require("../../infrastructure/repositories/EmpleadoRepositorioImpl");
const repo = new EmpleadoRepositorioImpl_1.EmpleadoRepositorioImpl();
const crearEmpleado = async (req, res) => {
    try {
        const empleado = await repo.crear(req.body);
        res.status(201).json(empleado);
    }
    catch (error) { // ← error tipado como any
        res.status(500).json({ error: error.message });
    }
};
exports.crearEmpleado = crearEmpleado;
const obtenerEmpleados = async (_, res) => {
    const lista = await repo.obtenerTodos();
    res.json(lista);
};
exports.obtenerEmpleados = obtenerEmpleados;
const obtenerEmpleado = async (req, res) => {
    const emp = await repo.obtenerPorId(req.params.id);
    if (!emp)
        return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json(emp);
};
exports.obtenerEmpleado = obtenerEmpleado;
const actualizarEmpleado = async (req, res) => {
    try {
        const emp = await repo.actualizar(req.params.id, req.body);
        if (!emp)
            return res.status(404).json({ error: 'Empleado no encontrado' });
        res.json(emp);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.actualizarEmpleado = actualizarEmpleado;
const eliminarEmpleado = async (req, res) => {
    try {
        await repo.eliminar(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.eliminarEmpleado = eliminarEmpleado;
