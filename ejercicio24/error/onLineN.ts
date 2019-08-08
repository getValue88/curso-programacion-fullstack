export default class ErrorOnLineN extends Error {
    file:string
    private line: number

    public constructor(name: string,file:string, line: number, message?: string) {
        super(message);
        this.name = name;
        this.file = file;
        this.line = line;
    }
}