"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NominaController_1 = require("../../application/controllers/NominaController");
const router = (0, express_1.Router)();
router.post('/', NominaController_1.generarNomina);
router.get('/', NominaController_1.obtenerNominas);
router.get('/:id', NominaController_1.obtenerNomina);
exports.default = router;
