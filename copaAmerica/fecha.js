"use strict";
exports.__esModule = true;
var Fecha = /** @class */ (function () {
    function Fecha() {
        this.partidos = [];
    }
    Fecha.prototype.addPartido = function (partido) {
        this.partidos.push(partido);
    };
    Fecha.prototype.showFecha = function () {
        for (var i = 0; i < this.partidos.length; i++) {
            console.log(this.partidos[i]);
        }
    };
    Fecha.prototype.simularFecha = function () {
        for (var i = 0; i < this.partidos.length; i++) {
            this.partidos[i].jugarPartidoGrupo();
        }
    };
    return Fecha;
}());
exports["default"] = Fecha;
