import Telefono from './telefono'
import Camara from './camara'

class TelefonoConCamara extends Telefono {
    private camara: Camara

    public constructor(carama: Camara) {
        super()
        this.camara = new Camara()
    }

    public sacarFoto(): void {
        console.log("Sacando foto...");
    }
}