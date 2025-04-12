"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeduccionRepositorioImpl = void 0;
const DeduccionModel_1 = require("../database/models/DeduccionModel");
class DeduccionRepositorioImpl {
    async obtenerTodos() {
        return DeduccionModel_1.DeduccionModel.find().lean();
    }
}
exports.DeduccionRepositorioImpl = DeduccionRepositorioImpl;
