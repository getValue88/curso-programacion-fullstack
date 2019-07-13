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

class Monitor {
   private isOn: boolean
   private inches: number
   private resolution: string
   private bright: number
   private contrast: number
   private gamma: number

    constructor(inches: number, resolution: string, bright: number, contrast: number, gamma: number) {
        this.isOn = false;
        this.inches = inches;
        this.resolution = resolution;
        this.bright = bright;
        this.contrast = contrast;
        this.gamma = gamma;
    }

    public onOff(): void {
        if (this.isOn) {
            this.isOn = false;
        } else {
            this.isOn = true;
        }
    }

    public getInches(): number {
        return this.inches;
    }

    public setResolution(resolution: string): void {
        this.resolution = resolution;
    }
    public getResolution(): string {
        return this.resolution;
    }
    public incrementBright(): void {
        if (this.bright < 100)
            this.bright += 1;
    }
    public decrementBright(): void {
        if (this.bright > 1)
            this.bright -= 1;
    }
    public getBright(): number {
        return this.bright;
    }
    public incrementContrast(): void {
        if (this.contrast < 100)
            this.contrast += 1;
    }
    public decrementContrast(): void {
        if (this.contrast > 1)
            this.contrast -= 1;
    }
    public getContrast(): number {
        return this.contrast;
    }
    public incrementGamma(): void {
        if (this.gamma < 100)
            this.gamma += 1;
    }
    public decrementGamma(): void {
        if (this.gamma > 2)
            this.gamma -= 1;
    }
    public getGamma(): number {
        return this.gamma;
    }
}


let unMonitor= new Monitor(17,"1024x768",50,50,50);
console.log(unMonitor);
