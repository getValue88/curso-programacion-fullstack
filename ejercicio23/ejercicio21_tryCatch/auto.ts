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
        if (marca == "" || typeof marca != "string")
            throw new Error("La marca ingresada es un valor vacío o no es un texto");
        if (modelo == "" || typeof modelo != "string")
            throw new Error("El modelo ingresado es un valor vacío o no es un texto");

        this.marca = marca;
        this.modelo = modelo;
    }

    public setDominio(value: string): void {
        if (value == "" || typeof value != "string")
            throw new Error("El dominio ingresado es un valor vacío o no es un texto");

        this.dominio = value;
    }

    public setAño(value: number): void {
        const currentYear = new Date().getFullYear()
        if (value < 1960 || value > currentYear || isNaN(value))
            throw new Error("El año es invalido");

        this.año = value;
    }

    public setColor(value: string): void {
        if (value == "" || typeof value != "string")
            throw new Error("El color ingresado es un valor vacío o no es un texto");

        this.color = value;
    }

    public setCombustible(value: string): void {
        if (value == "" || typeof value != "string")
            throw new Error("El tipo de combustible ingresado es un valor vacío o no es un texto");

        this.combustible = value;
    }

    public setMotor(value: number): void {
        if (isNaN(value))
            throw new Error("El campo motor debe ser un valor numerico");

        this.motor = value;
    }

    public setCajaCambios(value: string): void {
        if (value == "" || typeof value != "string")
            throw new Error("La caja de cambios ingresada es un valor vacío o no es un texto");

        this.cajaCambios = value;
    }

    public setIsFull(value: boolean): void {
        if (typeof value != "boolean")
            throw new Error("Valor invalido. isFull solo soporta true or false");

        this.isFull = value;
    }

    public setKilometraje(value: number): void {
        if (isNaN(value) || value < 0 || value > 1000000)
            throw new Error("El kilometraje debe ser un valor numerico");

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