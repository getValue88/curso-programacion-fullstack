export default class Equipo {
    private pais: string
    private puntos: number
    private gFavor: number
    private gContra: number
    private gDif: number

    public constructor(pais: string) {
        this.pais = pais;
        this.puntos = 0;
        this.gFavor = 0;
        this.gContra = 0;
        this.gDif = 0;
    }

    public getPais(): string {
        return this.pais;
    }

    public getPuntos(): number {
        return this.puntos;
    }

    public add3Points(): void {
        this.puntos += 3;
    }

    public add1Point(): void {
        this.puntos += 1;
    }

    public getGfavor(): number {
        return this.gFavor;
    }

    public addGfavor(value: number): void {
        this.gFavor += value;
    }

    public addGcontra(value: number): void {
        this.gContra += value;
    }

    public getGdif(): number {
        return this.gDif;
    }

    public setGdif(): void {
        this.gDif = this.gFavor - this.gContra;
    }
}