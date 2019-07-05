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

    public constructor(inches: number, resolution: string, bright: number, contrast: number, gamma: number) {
        this.isOn = false;
        this.inches = inches;
        this.resolution = resolution;
        this.bright = bright;
        this.contrast = contrast;
        this.gamma = gamma;
    }

    onOff(): void {
        if (this.isOn) {
            this.isOn = false;
        } else {
            this.isOn = true;
        }
    }

    getInches(): number {
        return this.inches;
    }

    setResolution(resolution: string): void {
        this.resolution = resolution;
    }
    getResolution(): string {
        return this.resolution;
    }
    incrementBright(): void {
        if (this.bright < 100)
            this.bright += 1;
    }
    decrementBright(): void {
        if (this.bright > 1)
            this.bright -= 1;
    }
    getBright(): number {
        return this.bright;
    }
    incrementContrast(): void {
        if (this.contrast < 100)
            this.contrast += 1;
    }
    decrementContrast(): void {
        if (this.contrast > 1)
            this.contrast -= 1;
    }
    getContrast(): number {
        return this.contrast;
    }
    incrementGamma(): void {
        if (this.gamma < 100)
            this.gamma += 1;
    }
    decrementGamma(): void {
        if (this.gamma > 2)
            this.gamma -= 1;
    }
    getGamma(): number {
        return this.gamma;
    }
}


let unMonitor= new Monitor(17,"1024x768",50,50,50);
console.log(unMonitor);
