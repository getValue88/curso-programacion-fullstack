export default class Auto {
    private dominio: string
    private marca: string
    private modelo: string
    private año: number
    private color: string
    private combustible: string
    private motor: number
    private cajaCambios: string
    private isFull: boolean
    private kilometraje: number

    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public setDominio(value: string): void {
        this.dominio = value;
    }

    public setMarca(value: string): void {
        this.marca = value;
    }

    public setModelo(value: string): void {
        this.modelo = value;
    }

    public setAño(value: number): void {
        this.año = value;
    }

    public setColor(value: string): void {
        this.color = value;
    }

    public setCombustible(value: string): void {
        this.combustible = value;
    }

    public setMotor(value: number): void {
        this.motor = value;
    }

    public setCajaCambios(value: string): void {
        this.cajaCambios = value;
    }

    public setIsFull(value: boolean): void {
        this.isFull = value;
    }

    public setKilometraje(value: number): void {
        this.kilometraje = value;
    }

    public getDominio(): string {
        return this.dominio;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getAño(): number {
        return this.año;
    }

    public getColor(): string {
        return this.color;
    }

    public getCombustible(): string {
        return this.combustible;
    }

    public getMotor(): number {
        return this.motor;
    }

    public getCajaCambios(): string {
        return this.cajaCambios;
    }

    public getIsFull(): boolean {
        return this.isFull;
    }

    public getKilometraje(): number {
        return this.kilometraje;
    }
}