import Equipo from './equipo'

export default class Grupo {
    private equipos: Equipo[] = []

    public constructor() {

    }

    public getTeam(index: number): Equipo {
        return this.equipos[index - 1];
    }

    public addTeam(equipo: Equipo): Grupo {
        this.equipos.push(equipo);
        return this;
    }
    //ordena el grupo por : Puntos --> Dif de gol --> Gol a favor
    public sortGroup(): void {
        this.equipos.sort((a, b) => a.getPuntos() < b.getPuntos() ? 1 : -1);
        for (let i = 0; i < this.equipos.length; i++) {
            for (let j = 1; j < this.equipos.length; j++) {
                if (this.equipos[j - 1].getPuntos() == this.equipos[j].getPuntos()) {
                    if (this.equipos[j - 1].getGdif() < this.equipos[j].getGdif()) {
                        let x = this.equipos[j - 1];
                        this.equipos[j - 1] = this.equipos[j];
                        this.equipos[j] = x;
                    } else if (this.equipos[j - 1].getGdif() == this.equipos[j].getGdif()) {
                        if (this.equipos[j - 1].getGfavor() < this.equipos[j].getGfavor()) {
                            let x = this.equipos[j - 1];
                            this.equipos[j - 1] = this.equipos[j];
                            this.equipos[j] = x;
                        }
                    }
                }
            }
        }
    }
    public toNextRound(): void {
        this.equipos.pop();
    }

    public getLength(): number {
        return this.equipos.length;
    }
}