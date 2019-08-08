
export default abstract class Vehiculo {
    private marca: string
    private modelo: string
    private estaPrendido: boolean
    protected velocidad: number
    protected tipo: number

    public constructor(marca: string, modelo: string) {
        if (typeof marca != "string" || marca == "" || typeof modelo != "string" || modelo == "")
            throw new Error("Marca o modelo deben ser texto y no pueden ser vacíos");
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