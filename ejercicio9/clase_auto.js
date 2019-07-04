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
var Auto = /** @class */ (function () {
    function Auto(color, marca, modelo, year, kilometraje) {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.kilometraje = kilometraje;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 1;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual -= 1;
    };
    Auto.prototype.setKilometraje = function (n) {
        this.kilometraje += n;
    };
    Auto.prototype.getStatus = function () {
        return this.estaPrendido;
    };
    Auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModel = function () {
        return this.modelo;
    };
    Auto.prototype.getYear = function () {
        return this.year;
    };
    Auto.prototype.getKilometraje = function () {
        return this.kilometraje;
    };
    return Auto;
}());
var audiA3 = new Auto("rojo", "Audi", "A3", 2019, 0);
console.log(audiA3);
/*
audiA3.encenderApagar();

console.log("El auto esta encendido? " + audiA3.getStatus());
 */ 
