export default class Vehiculo {
    private dominio: string
    private titular: string
    private marca: string
    private modelo: string
    private año: number
    private color: string

    public constructor(dominio: string, titular: string, marca: string, modelo: string, año: number, color: string) {
        this.dominio = dominio;
        this.titular = titular;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    public getDominio(): string {
        return this.dominio;
    }

    public getTitular(): string {
        return this.titular;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }
}