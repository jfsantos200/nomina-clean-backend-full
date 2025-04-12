"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IngresoController_1 = require("../../application/controllers/IngresoController");
const router = (0, express_1.Router)();
router.post('/', IngresoController_1.crearIngreso);
router.get('/empleado/:empleadoId', IngresoController_1.obtenerIngresosEmpleado);
exports.default = router;
