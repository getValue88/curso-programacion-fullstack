import * as fs from 'fs'

interface ILogger {
    writeLog(time: Date, event: string, desc: string): void;
}

export default class Logger implements ILogger {
    private static logger: Logger = new Logger();

    private constructor() {

    }

    public static getInstance(): Logger {
        return this.logger
    }

    public writeLog(time: Date, event: string, desc: string): void {
        let log: string = `${time}  ${event}: ${desc}\r`
        fs.appendFile("ejercicio22/logger/log.txt", log, (err) => {
            if (err)
                console.log(`Error al escribir el log: ${err}`);
        });
    }
}
