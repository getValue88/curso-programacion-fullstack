export default abstract class Vehiculo {
    private marca: string
    private modelo: string
    private estaPrendido: boolean
    protected velocidad: number
    protected tipo: number

    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaPrendido = false;
        this.velocidad = 0;
    }

    public encenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getTipo(): number {
        return this.tipo;
    }

    abstract acelerar(): void
    abstract frenar(): void
}