"use strict";
exports.__esModule = true;
var Partido = /** @class */ (function () {
    function Partido(equipoUno, equipoDos) {
        this.equipoUno = equipoUno;
        this.equipoDos = equipoDos;
    }
    // simular partido. agregar puntos,goles a favor,goles en contra, actualizar diferencia de gol e imprimir resultado en consola
    Partido.prototype.jugarPartidoGrupo = function () {
        this.golesEquipoUno = this.simularGoles();
        this.golesEquipoDos = this.simularGoles();
        if (this.golesEquipoUno > this.golesEquipoDos) {
            this.equipoUno.add3Points();
        }
        else if (this.golesEquipoDos > this.golesEquipoUno) {
            this.equipoDos.add3Points();
        }
        else {
            this.equipoUno.add1Point();
            this.equipoDos.add1Point();
        }
        this.equipoUno.addGfavor(this.golesEquipoUno);
        this.equipoUno.addGcontra(this.golesEquipoDos);
        this.equipoUno.setGdif();
        this.equipoDos.addGfavor(this.golesEquipoDos);
        this.equipoDos.addGcontra(this.golesEquipoUno);
        this.equipoDos.setGdif();
        console.log("Resultado: " + this.equipoUno.getPais() + " " + this.golesEquipoUno + " vs " + this.golesEquipoDos + " " + this.equipoDos.getPais());
    };
    //simular partido. En caso de empate simula penales. Devuelve array :Equipo = [ganador,perdedor] e imprime resultado en consola
    Partido.prototype.jugarPartidoEliminatorio = function () {
        this.golesEquipoUno = this.simularGoles();
        this.golesEquipoDos = this.simularGoles();
        if (this.golesEquipoUno != this.golesEquipoDos) {
            console.log("Resultado: " + this.equipoUno.getPais() + " " + this.golesEquipoUno + " vs " + this.golesEquipoDos + " " + this.equipoDos.getPais());
        }
        if (this.golesEquipoUno > this.golesEquipoDos) {
            this.ganador = this.equipoUno;
            this.perdedor = this.equipoDos;
        }
        else if (this.golesEquipoUno < this.golesEquipoDos) {
            this.ganador = this.equipoDos;
            this.perdedor = this.equipoUno;
        }
        else {
            var randomUno = Math.random();
            var randomDos = Math.random();
            if (randomUno > randomDos) {
                this.ganador = this.equipoUno;
                this.perdedor = this.equipoDos;
                console.log("Resultado: " + this.equipoUno.getPais() + " " + this.golesEquipoUno + " (5) vs (4) " + this.golesEquipoDos + " " + this.equipoDos.getPais());
            }
            else {
                this.ganador = this.equipoDos;
                this.perdedor = this.equipoUno;
                console.log("Resultado: " + this.equipoUno.getPais() + " " + this.golesEquipoUno + " (4) vs (5) " + this.golesEquipoDos + " " + this.equipoDos.getPais());
            }
        }
        return [this.ganador, this.perdedor];
    };
    Partido.prototype.simularGoles = function () {
        var goles;
        var random = Math.random();
        if (random >= .95) {
            goles = 5;
        }
        else if (random < .95 && random >= .87) {
            goles = 4;
        }
        else if (random < .87 && random >= .75) {
            goles = 3;
        }
        else if (random < .75 && random >= .50) {
            goles = 2;
        }
        else if (random < .5 && random > .15) {
            goles = 1;
        }
        else {
            goles = 0;
        }
        return goles;
    };
    return Partido;
}());
exports["default"] = Partido;
