"use strict";
exports.__esModule = true;
var Grupo = /** @class */ (function () {
    function Grupo() {
        this.equipos = [];
    }
    Grupo.prototype.getTeam = function (index) {
        return this.equipos[index - 1];
    };
    Grupo.prototype.addTeam = function (equipo) {
        this.equipos.push(equipo);
        return this;
    };
    //ordena el grupo por : Puntos --> Dif de gol --> Gol a favor
    Grupo.prototype.sortGroup = function () {
        this.equipos.sort(function (a, b) { return a.getPuntos() < b.getPuntos() ? 1 : -1; });
        for (var i = 0; i < this.equipos.length; i++) {
            for (var j = 1; j < this.equipos.length; j++) {
                if (this.equipos[j - 1].getPuntos() == this.equipos[j].getPuntos()) {
                    if (this.equipos[j - 1].getGdif() < this.equipos[j].getGdif()) {
                        var x = this.equipos[j - 1];
                        this.equipos[j - 1] = this.equipos[j];
                        this.equipos[j] = x;
                    }
                    else if (this.equipos[j - 1].getGdif() == this.equipos[j].getGdif()) {
                        if (this.equipos[j - 1].getGfavor() < this.equipos[j].getGfavor()) {
                            var x = this.equipos[j - 1];
                            this.equipos[j - 1] = this.equipos[j];
                            this.equipos[j] = x;
                        }
                    }
                }
            }
        }
    };
    Grupo.prototype.toNextRound = function () {
        this.equipos.pop();
    };
    Grupo.prototype.getLength = function () {
        return this.equipos.length;
    };
    return Grupo;
}());
exports["default"] = Grupo;
