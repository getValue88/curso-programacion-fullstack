/*
    Plantear la clase Auto de la forma en que se vió en la clase → especificando variables internas y métodos

    Implementar en TypeScript

    ============================================================================================================

    DIAGRAMA DE CLASE
    -----------------
    AUTO:
        VARIABLES INTERNAS:
            estaPrendido: boolean
            velocidadActual: number
            color: string
            marca: string
            modelo: string
            año: number
            kilometraje: number
        METODOS:
            encenderApagar(): void
            acelerar(): void
            frenar(): void
            setKilometraje(): void
            getStatus(): boolean
            getVelocidadActual(): number
            getMarca(): string
            getModel(): string
            getYear(): number
            getKilometraje(): number
*/

class Auto {
    private estaPrendido: boolean
    private velocidadActual: number
    private color: string
    private marca: string
    private modelo: string
    private year: number
    private kilometraje: number

    constructor(color: string, marca: string, modelo: string,year: number, kilometraje: number) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometraje = kilometraje;
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

    public getYear():number{
        return this.year;
    }

    public getKilometraje(): number {
        return this.kilometraje;
    }
}

let audiA3 = new Auto("rojo", "Audi", "A3",2019,0);

console.log(audiA3);

/* 
audiA3.encenderApagar();

console.log("El auto esta encendido? " + audiA3.getStatus());
 */