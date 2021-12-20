"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum_TypeObjective = exports.Enum_PhaseProyect = exports.Enum_StateProyect = exports.Enum_StateUser = exports.Enum_Role = void 0;
var Enum_Role;
(function (Enum_Role) {
    Enum_Role["ESTUDIANTE"] = "ESTUDIANTE";
    Enum_Role["LIDER"] = "LIDER";
    Enum_Role["ADMINISTRADOR"] = "ADMINISTRADOR";
})(Enum_Role || (Enum_Role = {}));
exports.Enum_Role = Enum_Role;
var Enum_StateUser;
(function (Enum_StateUser) {
    Enum_StateUser["PENDIENTE"] = "PENDIENTE";
    Enum_StateUser["AUTORIZADO"] = "AUTORIZADO";
    Enum_StateUser["NO_AUTORIZADO"] = "NO_AUTORIZADO";
})(Enum_StateUser || (Enum_StateUser = {}));
exports.Enum_StateUser = Enum_StateUser;
var Enum_StateProyect;
(function (Enum_StateProyect) {
    Enum_StateProyect["ACTIVO"] = "ACTIVO";
    Enum_StateProyect["INACTIVO"] = "INACTIVO";
})(Enum_StateProyect || (Enum_StateProyect = {}));
exports.Enum_StateProyect = Enum_StateProyect;
var Enum_PhaseProyect;
(function (Enum_PhaseProyect) {
    Enum_PhaseProyect["INICIADO"] = "INICIADO";
    Enum_PhaseProyect["DESARROLLO"] = "DESARROLLO";
    Enum_PhaseProyect["TERMINADO"] = "TERMINADO";
    Enum_PhaseProyect["NULO"] = "";
})(Enum_PhaseProyect || (Enum_PhaseProyect = {}));
exports.Enum_PhaseProyect = Enum_PhaseProyect;
var Enum_TypeObjective;
(function (Enum_TypeObjective) {
    Enum_TypeObjective["GENERAL"] = "GENERAL";
    Enum_TypeObjective["ESPECIFICO"] = "ESPECIFICO";
})(Enum_TypeObjective || (Enum_TypeObjective = {}));
exports.Enum_TypeObjective = Enum_TypeObjective;
