"use strict";
exports.__esModule = true;
var fs = require("fs");
var equipo_1 = require("./equipo");
var grupo_1 = require("./grupo");
var fecha_1 = require("./fecha");
var partido_1 = require("./partido");
var Torneo = /** @class */ (function () {
    function Torneo(txtRoute, separatorRows, separatorCols) {
        this.equipos = [];
        this.grupos = [];
        this.fechas = [];
        this.cuartosFinal = [];
        this.semiFinal = [];
        this.loadTeamsFromTxtToGroups(txtRoute, separatorRows, separatorCols);
    }
    Torneo.prototype.showGrupos = function (index) {
        console.log(this.grupos[index - 1]);
    };
    //armado de fechas
    Torneo.prototype.setFechas = function () {
        this.fechas[0] = new fecha_1["default"]();
        this.fechas[1] = new fecha_1["default"]();
        this.fechas[2] = new fecha_1["default"]();
        for (var i = 0; i < this.grupos.length; i++) {
            this.fechas[0].addPartido(new partido_1["default"](this.grupos[i].getTeam(1), this.grupos[i].getTeam(4)));
            this.fechas[0].addPartido(new partido_1["default"](this.grupos[i].getTeam(2), this.grupos[i].getTeam(3)));
            this.fechas[1].addPartido(new partido_1["default"](this.grupos[i].getTeam(1), this.grupos[i].getTeam(3)));
            this.fechas[1].addPartido(new partido_1["default"](this.grupos[i].getTeam(2), this.grupos[i].getTeam(4)));
            this.fechas[2].addPartido(new partido_1["default"](this.grupos[i].getTeam(1), this.grupos[i].getTeam(2)));
            this.fechas[2].addPartido(new partido_1["default"](this.grupos[i].getTeam(3), this.grupos[i].getTeam(4)));
        }
    };
    Torneo.prototype.getFechas = function () {
        return this.fechas;
    };
    Torneo.prototype.sortGroups = function () {
        for (var i = 0; i < this.grupos.length; i++) {
            this.grupos[i].sortGroup();
        }
    };
    //elimina el 4to de cada grupo y el peor 3ro entre los 3 grupos en base a: puntos --> dif goles --> goles a favor
    Torneo.prototype.toNextRound = function () {
        for (var i = 0; i < this.grupos.length; i++) {
            this.grupos[i].toNextRound();
        }
        if ((this.grupos[0].getTeam(3).getPuntos() < this.grupos[1].getTeam(3).getPuntos()) && (this.grupos[0].getTeam(3).getPuntos() < this.grupos[2].getTeam(3).getPuntos())) {
            this.grupos[0].toNextRound();
        }
        else if ((this.grupos[1].getTeam(3).getPuntos() < this.grupos[0].getTeam(3).getPuntos()) && (this.grupos[1].getTeam(3).getPuntos() < this.grupos[2].getTeam(3).getPuntos())) {
            this.grupos[1].toNextRound();
        }
        else if ((this.grupos[2].getTeam(3).getPuntos() < this.grupos[0].getTeam(3).getPuntos()) && (this.grupos[2].getTeam(3).getPuntos() < this.grupos[1].getTeam(3).getPuntos())) {
            this.grupos[2].toNextRound();
        }
        else if ((this.grupos[0].getTeam(3).getGdif() < this.grupos[1].getTeam(3).getGdif()) && (this.grupos[0].getTeam(3).getGdif() < this.grupos[2].getTeam(3).getGdif())) {
            this.grupos[0].toNextRound();
        }
        else if ((this.grupos[1].getTeam(3).getGdif() < this.grupos[0].getTeam(3).getGdif()) && (this.grupos[1].getTeam(3).getGdif() < this.grupos[2].getTeam(3).getGdif())) {
            this.grupos[1].toNextRound();
        }
        else if ((this.grupos[2].getTeam(3).getGdif() < this.grupos[0].getTeam(3).getGdif()) && (this.grupos[2].getTeam(3).getGdif() < this.grupos[1].getTeam(3).getGdif())) {
            this.grupos[2].toNextRound();
        }
        else if ((this.grupos[0].getTeam(3).getGfavor() < this.grupos[1].getTeam(3).getGfavor()) && (this.grupos[0].getTeam(3).getGfavor() < this.grupos[2].getTeam(3).getGfavor())) {
            this.grupos[0].toNextRound();
        }
        else if ((this.grupos[1].getTeam(3).getGfavor() < this.grupos[0].getTeam(3).getGfavor()) && (this.grupos[1].getTeam(3).getGfavor() < this.grupos[2].getTeam(3).getGfavor())) {
            this.grupos[1].toNextRound();
        }
        else if ((this.grupos[2].getTeam(3).getGfavor() < this.grupos[0].getTeam(3).getGfavor()) && (this.grupos[2].getTeam(3).getGfavor() < this.grupos[1].getTeam(3).getGfavor())) {
            this.grupos[2].toNextRound();
        }
        else {
            var random = (Math.random() * 3);
            if (random <= 1) {
                this.grupos[0].toNextRound();
            }
            else if (random > 1 && random <= 2) {
                this.grupos[1].toNextRound();
            }
            else {
                this.grupos[2].toNextRound();
            }
        }
    };
    //resetea el arreglo de equipos dejando solo los equipos clasificados y despues los mezcla al azar
    Torneo.prototype.setClasificados = function () {
        this.equipos = [];
        for (var i = 0; i < this.grupos.length; i++) {
            for (var j = 0; j < this.grupos[i].getLength(); j++) {
                this.equipos.push(this.grupos[i].getTeam(j + 1));
            }
        }
        this.equipos.sort(function () { return Math.random() - .5; });
    };
    //armado de 4tos de final
    Torneo.prototype.setCuartos = function () {
        this.cuartosFinal.push(new partido_1["default"](this.equipos[0], this.equipos[7]));
        this.cuartosFinal.push(new partido_1["default"](this.equipos[1], this.equipos[6]));
        this.cuartosFinal.push(new partido_1["default"](this.equipos[2], this.equipos[5]));
        this.cuartosFinal.push(new partido_1["default"](this.equipos[3], this.equipos[4]));
    };
    //simula cuartos de final. Resetea el arreglo de equipos dejando solo los ganadores.
    Torneo.prototype.jugarCuartos = function () {
        this.equipos = [];
        for (var i = 0; i < this.cuartosFinal.length; i++) {
            this.equipos.push(this.cuartosFinal[i].jugarPartidoEliminatorio()[0]);
        }
    };
    //armado de semifinal
    Torneo.prototype.setSemis = function () {
        this.semiFinal.push(new partido_1["default"](this.equipos[0], this.equipos[3]));
        this.semiFinal.push(new partido_1["default"](this.equipos[1], this.equipos[2]));
    };
    //simulacion de semifinal y armado de 3er puesto y final
    Torneo.prototype.jugarSemis = function () {
        var x = [];
        for (var i = 0; i < this.semiFinal.length; i++) {
            x[i] = this.semiFinal[i].jugarPartidoEliminatorio();
        }
        this.tercerPuesto = new partido_1["default"](x[0][1], x[1][1]);
        this.final = new partido_1["default"](x[0][0], x[1][0]);
    };
    Torneo.prototype.jugarTercer = function () {
        this.tercerPuesto.jugarPartidoEliminatorio();
    };
    Torneo.prototype.jugarFinal = function () {
        this.final.jugarPartidoEliminatorio();
    };
    // lee de un txt una lista de equipos y la organiza en grupos de forma aleatoria teniendo en cuenta los equipos designados como cabeza de serie
    Torneo.prototype.loadTeamsFromTxtToGroups = function (txtRoute, separatorRows, separatorCols) {
        var arr = fs.readFileSync(txtRoute, 'utf8').split(separatorRows);
        arr.sort(function () { return Math.random() - .5; }); //desordenar array al azar
        var mat = [];
        var total = 0;
        var bomboB = 0;
        //por cada cabeza de serie que encuentro, creo un equipo, creo un grupo y le agrego dicho equipo
        for (var i = 0; i < arr.length; i++) {
            mat[i] = arr[i].split(",");
            if (mat[i][1] == "a") {
                this.equipos.push(new equipo_1["default"](mat[i][0]));
                this.grupos[total] = new grupo_1["default"]().addTeam(this.equipos[total]);
                total++;
            }
        }
        // por cada No cabeza de serie, creo un equipo y los reparto en los grupos ya creados
        for (var i = 0; i < arr.length; i++) {
            if (mat[i][1] == "b") {
                this.equipos.push(new equipo_1["default"](mat[i][0]));
                this.grupos[bomboB].addTeam(this.equipos[total]);
                total++;
                bomboB++;
                if (bomboB >= 3)
                    bomboB = 0;
            }
        }
    };
    return Torneo;
}());
exports["default"] = Torneo;
