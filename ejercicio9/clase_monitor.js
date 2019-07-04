/*
    Plantear la clase Monitor

    Implementar en TypeScript

    =================================================================================================================

    DIAGRAMA DE CLASE
    -----------------
    MONITOR:
        STATUS:
            isOn: boolean
            inches: number
            resolution: string
            bright: number
            contrast: number
            gamma: number
        METHODS:
            onOff(): void
            getInches(): number
            setResolution(): void
            getResolution(): string
            incrementBright(): void
            decrementBright(): void
            getBright(): number
            incrementContrast(): void
            decrementContrast(): void
            getContrast(): number
            incrementGamma(): void
            decrementGamma(): void
            getGamma(): number

*/
var Monitor = /** @class */ (function () {
    function Monitor(inches, resolution, bright, contrast, gamma) {
        this.isOn = false;
        this.inches = inches;
        this.resolution = resolution;
        this.bright = bright;
        this.contrast = contrast;
        this.gamma = gamma;
    }
    Monitor.prototype.onOff = function () {
        if (this.isOn) {
            this.isOn = false;
        }
        else {
            this.isOn = true;
        }
    };
    Monitor.prototype.getInches = function () {
        return this.inches;
    };
    Monitor.prototype.setResolution = function (resolution) {
        this.resolution = resolution;
    };
    Monitor.prototype.getResolution = function () {
        return this.resolution;
    };
    Monitor.prototype.incrementBright = function () {
        if (this.bright < 100)
            this.bright += 1;
    };
    Monitor.prototype.decrementBright = function () {
        if (this.bright > 1)
            this.bright -= 1;
    };
    Monitor.prototype.getBright = function () {
        return this.bright;
    };
    Monitor.prototype.incrementContrast = function () {
        if (this.contrast < 100)
            this.contrast += 1;
    };
    Monitor.prototype.decrementContrast = function () {
        if (this.contrast > 1)
            this.contrast -= 1;
    };
    Monitor.prototype.getContrast = function () {
        return this.contrast;
    };
    Monitor.prototype.incrementGamma = function () {
        if (this.gamma < 100)
            this.gamma += 1;
    };
    Monitor.prototype.decrementGamma = function () {
        if (this.gamma > 2)
            this.gamma -= 1;
    };
    Monitor.prototype.getGamma = function () {
        return this.gamma;
    };
    return Monitor;
}());
var unMonitor = new Monitor(17, "1024x768", 50, 50, 50);
console.log(unMonitor);
