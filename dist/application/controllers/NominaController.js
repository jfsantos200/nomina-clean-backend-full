"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerNomina = exports.obtenerNominas = exports.generarNomina = void 0;
const ServicioNomina_1 = require("../services/ServicioNomina");
const EmpleadoRepositorioImpl_1 = require("../../infrastructure/repositories/EmpleadoRepositorioImpl");
const IngresoRepositorioImpl_1 = require("../../infrastructure/repositories/IngresoRepositorioImpl");
const DeduccionRepositorioImpl_1 = require("../../infrastructure/repositories/DeduccionRepositorioImpl");
const NominaRepositorioImpl_1 = require("../../infrastructure/repositories/NominaRepositorioImpl");
const CalculadoraISR_1 = require("../services/CalculadoraISR");
const empRepo = new EmpleadoRepositorioImpl_1.EmpleadoRepositorioImpl();
const ingRepo = new IngresoRepositorioImpl_1.IngresoRepositorioImpl();
const dedRepo = new DeduccionRepositorioImpl_1.DeduccionRepositorioImpl();
const nomRepo = new NominaRepositorioImpl_1.NominaRepositorioImpl();
const isrCalc = new CalculadoraISR_1.CalculadoraISR(dedRepo);
const servicioNomina = new ServicioNomina_1.ServicioNomina(empRepo, ingRepo, isrCalc, nomRepo);
const generarNomina = async (req, res) => {
    try {
        const { empleadoId, fecha } = req.body;
        const nomina = await servicioNomina.generarQuincena(empleadoId, new Date(fecha));
        res.status(201).json(nomina);
    }
    catch (error) {
        res.status(500).json({ error: (error instanceof Error) ? error.message : 'Unknown error' });
    }
};
exports.generarNomina = generarNomina;
const obtenerNominas = async (_, res) => {
    const lista = await nomRepo.obtenerTodos();
    res.json(lista);
};
exports.obtenerNominas = obtenerNominas;
const obtenerNomina = async (req, res) => {
    const nom = await nomRepo.obtenerPorId(req.params.id);
    if (!nom)
        return res.status(404).json({ error: 'Nómina no encontrada' });
    res.json(nom);
};
exports.obtenerNomina = obtenerNomina;
