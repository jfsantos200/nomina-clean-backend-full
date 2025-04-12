"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DeduccionController_1 = require("../../application/controllers/DeduccionController");
const router = (0, express_1.Router)();
router.get('/', DeduccionController_1.obtenerDeducciones);
exports.default = router;
