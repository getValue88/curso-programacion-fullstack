import * as fs from 'fs';
import Equipo from "./equipo";
import Grupo from "./grupo";
import Fecha from "./fecha";
import Partido from "./partido";

export default class Torneo {
    private equipos: Equipo[] = []
    private grupos: Grupo[] = []
    private fechas: Fecha[] = []
    private cuartosFinal: Partido[] = []
    private semiFinal: Partido[] = []
    private tercerPuesto: Partido
    private final: Partido

    public constructor(txtRoute: string, separatorRows: string, separatorCols: string) {
        this.loadTeamsFromTxtToGroups(txtRoute, separatorRows, separatorCols);

    }

    public showGrupos(index: number) {
        console.log(this.grupos[index - 1]);
    }

    //armado de fechas
    public setFechas(): void {
        this.fechas[0] = new Fecha();
        this.fechas[1] = new Fecha();
        this.fechas[2] = new Fecha();
        for (let i = 0; i < this.grupos.length; i++) {
            this.fechas[0].addPartido(new Partido(this.grupos[i].getTeam(1), this.grupos[i].getTeam(4)))
            this.fechas[0].addPartido(new Partido(this.grupos[i].getTeam(2), this.grupos[i].getTeam(3)))
            this.fechas[1].addPartido(new Partido(this.grupos[i].getTeam(1), this.grupos[i].getTeam(3)))
            this.fechas[1].addPartido(new Partido(this.grupos[i].getTeam(2), this.grupos[i].getTeam(4)))
            this.fechas[2].addPartido(new Partido(this.grupos[i].getTeam(1), this.grupos[i].getTeam(2)))
            this.fechas[2].addPartido(new Partido(this.grupos[i].getTeam(3), this.grupos[i].getTeam(4)))
        }
    }

    public getFechas(): Fecha[] {
        return this.fechas;
    }

    public sortGroups(): void {
        for (let i = 0; i < this.grupos.length; i++) {
            this.grupos[i].sortGroup();
        }
    }

    //elimina el 4to de cada grupo y el peor 3ro entre los 3 grupos en base a: puntos --> dif goles --> goles a favor
    public toNextRound(): void {
        for (let i = 0; i < this.grupos.length; i++) {
            this.grupos[i].toNextRound();
        }
        if ((this.grupos[0].getTeam(3).getPuntos() < this.grupos[1].getTeam(3).getPuntos()) && (this.grupos[0].getTeam(3).getPuntos() < this.grupos[2].getTeam(3).getPuntos())) {
            this.grupos[0].toNextRound();
        } else if ((this.grupos[1].getTeam(3).getPuntos() < this.grupos[0].getTeam(3).getPuntos()) && (this.grupos[1].getTeam(3).getPuntos() < this.grupos[2].getTeam(3).getPuntos())) {
            this.grupos[1].toNextRound();
        } else if ((this.grupos[2].getTeam(3).getPuntos() < this.grupos[0].getTeam(3).getPuntos()) && (this.grupos[2].getTeam(3).getPuntos() < this.grupos[1].getTeam(3).getPuntos())) {
            this.grupos[2].toNextRound();
        } else if ((this.grupos[0].getTeam(3).getGdif() < this.grupos[1].getTeam(3).getGdif()) && (this.grupos[0].getTeam(3).getGdif() < this.grupos[2].getTeam(3).getGdif())) {
            this.grupos[0].toNextRound();
        } else if ((this.grupos[1].getTeam(3).getGdif() < this.grupos[0].getTeam(3).getGdif()) && (this.grupos[1].getTeam(3).getGdif() < this.grupos[2].getTeam(3).getGdif())) {
            this.grupos[1].toNextRound();
        } else if ((this.grupos[2].getTeam(3).getGdif() < this.grupos[0].getTeam(3).getGdif()) && (this.grupos[2].getTeam(3).getGdif() < this.grupos[1].getTeam(3).getGdif())) {
            this.grupos[2].toNextRound();
        } else if ((this.grupos[0].getTeam(3).getGfavor() < this.grupos[1].getTeam(3).getGfavor()) && (this.grupos[0].getTeam(3).getGfavor() < this.grupos[2].getTeam(3).getGfavor())) {
            this.grupos[0].toNextRound();
        } else if ((this.grupos[1].getTeam(3).getGfavor() < this.grupos[0].getTeam(3).getGfavor()) && (this.grupos[1].getTeam(3).getGfavor() < this.grupos[2].getTeam(3).getGfavor())) {
            this.grupos[1].toNextRound();
        } else if ((this.grupos[2].getTeam(3).getGfavor() < this.grupos[0].getTeam(3).getGfavor()) && (this.grupos[2].getTeam(3).getGfavor() < this.grupos[1].getTeam(3).getGfavor())) {
            this.grupos[2].toNextRound();
        } else {
            let random = (Math.random() * 3)
            if (random <= 1) {
                this.grupos[0].toNextRound();
            } else if (random > 1 && random <= 2) {
                this.grupos[1].toNextRound();
            } else {
                this.grupos[2].toNextRound();
            }
        }
    }

    //resetea el arreglo de equipos dejando solo los equipos clasificados y despues los mezcla al azar
    public setClasificados(): void {
        this.equipos = []
        for (let i = 0; i < this.grupos.length; i++) {
            for (let j = 0; j < this.grupos[i].getLength(); j++) {
                this.equipos.push(this.grupos[i].getTeam(j + 1));
            }
        }
        this.equipos.sort(() => Math.random() - .5);
    }

    //armado de 4tos de final
    public setCuartos(): void {
        this.cuartosFinal.push(new Partido(this.equipos[0], this.equipos[7]));
        this.cuartosFinal.push(new Partido(this.equipos[1], this.equipos[6]));
        this.cuartosFinal.push(new Partido(this.equipos[2], this.equipos[5]));
        this.cuartosFinal.push(new Partido(this.equipos[3], this.equipos[4]));
    }

    //simula cuartos de final. Resetea el arreglo de equipos dejando solo los ganadores.
    public jugarCuartos() :void {
        this.equipos = []
        for (let i = 0; i < this.cuartosFinal.length; i++) {
            this.equipos.push(this.cuartosFinal[i].jugarPartidoEliminatorio()[0]);
        }
    }

    //armado de semifinal
    public setSemis() :void{
        this.semiFinal.push(new Partido(this.equipos[0], this.equipos[3]));
        this.semiFinal.push(new Partido(this.equipos[1], this.equipos[2]));
    }

    //simulacion de semifinal y armado de 3er puesto y final
    public jugarSemis(): void {
        let x: Equipo[][] = []
        for (let i = 0; i < this.semiFinal.length; i++) {
            x[i] = this.semiFinal[i].jugarPartidoEliminatorio();

        }
        this.tercerPuesto = new Partido(x[0][1], x[1][1]);
        this.final = new Partido(x[0][0], x[1][0]);
    }

    public jugarTercer(): void {
        this.tercerPuesto.jugarPartidoEliminatorio();
    }

    public jugarFinal(): void {
        this.final.jugarPartidoEliminatorio();
    }

    // lee de un txt una lista de equipos y la organiza en grupos de forma aleatoria teniendo en cuenta los equipos designados como cabeza de serie
    private loadTeamsFromTxtToGroups(txtRoute: string, separatorRows: string, separatorCols: string): void {
        let arr: string[] = fs.readFileSync(txtRoute, 'utf8').split(separatorRows);
        arr.sort(() => Math.random() - .5); //desordenar array al azar
        let mat: string[][] = [];
        let total = 0;
        let bomboB = 0;
        //por cada cabeza de serie que encuentro, creo un equipo, creo un grupo y le agrego dicho equipo
        for (let i = 0; i < arr.length; i++) {
            mat[i] = arr[i].split(",");
            if (mat[i][1] == "a") {
                this.equipos.push(new Equipo(mat[i][0]));
                this.grupos[total] = new Grupo().addTeam(this.equipos[total])
                total++;
            }
        }
        // por cada No cabeza de serie, creo un equipo y los reparto en los grupos ya creados
        for (let i = 0; i < arr.length; i++) {
            if (mat[i][1] == "b") {
                this.equipos.push(new Equipo(mat[i][0]));
                this.grupos[bomboB].addTeam(this.equipos[total]);
                total++;
                bomboB++;
                if (bomboB >= 3)
                    bomboB = 0;
            }
        }
    }
}