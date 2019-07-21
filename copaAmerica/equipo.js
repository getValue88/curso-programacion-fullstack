"use strict";
exports.__esModule = true;
var Equipo = /** @class */ (function () {
    function Equipo(pais) {
        this.pais = pais;
        this.puntos = 0;
        this.gFavor = 0;
        this.gContra = 0;
        this.gDif = 0;
    }
    Equipo.prototype.getPais = function () {
        return this.pais;
    };
    Equipo.prototype.getPuntos = function () {
        return this.puntos;
    };
    Equipo.prototype.add3Points = function () {
        this.puntos += 3;
    };
    Equipo.prototype.add1Point = function () {
        this.puntos += 1;
    };
    Equipo.prototype.getGfavor = function () {
        return this.gFavor;
    };
    Equipo.prototype.addGfavor = function (value) {
        this.gFavor += value;
    };
    Equipo.prototype.addGcontra = function (value) {
        this.gContra += value;
    };
    Equipo.prototype.getGdif = function () {
        return this.gDif;
    };
    Equipo.prototype.setGdif = function () {
        this.gDif = this.gFavor - this.gContra;
    };
    return Equipo;
}());
exports["default"] = Equipo;
