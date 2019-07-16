export default class Auto {
    private estaPrendido: boolean
    private velocidadActual: number
    private color: string
    private marca: string
    private modelo: string
    private year: number
    private kilometraje: number
    protected ruedas: number

    public constructor(marca: string, modelo: string, year: number, color: string) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometraje = 0;
        this.ruedas = 4
    }

    public estaEncendido(): boolean {
        return this.estaPrendido;
    }

    public encenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }

    public acelerar(): void {
        this.velocidadActual += 1;
    }

    public frenar(): void {
        this.velocidadActual -= 1;
    }

    public setKilometraje(n: number) {
        this.kilometraje += n;
    }

    public getStatus(): boolean {
        return this.estaPrendido;
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getModel(): string {
        return this.modelo;
    }

    public getYear(): number {
        return this.year;
    }

    public getKilometraje(): number {
        return this.kilometraje;
    }

    public getColor(): string {
        return this.color;
    }

    public getRuedas(): number {
        return this.ruedas;
    }
}