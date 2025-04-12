"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDeducciones = void 0;
const DeduccionRepositorioImpl_1 = require("../../infrastructure/repositories/DeduccionRepositorioImpl");
const dedRepo = new DeduccionRepositorioImpl_1.DeduccionRepositorioImpl();
const obtenerDeducciones = async (_, res) => {
    const tablas = await dedRepo.obtenerTodos();
    res.json(tablas);
};
exports.obtenerDeducciones = obtenerDeducciones;
