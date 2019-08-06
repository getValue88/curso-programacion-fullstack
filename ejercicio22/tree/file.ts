import Component from "./component";
import Logger from "../logger/logger";

export default class File implements Component {
    private name: string

    public constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }

    public rename(newName: string): void {
        const beforeName = this.name;
        this.name = newName;
        Logger.getInstance().writeLog(new Date(), "rename File\t", `from: ${beforeName} to ${newName}`);
    }

    public traverse(depth: number): void {
        let str = "";
        for (let i = 0; i < depth; i++) {
            str += "  ";
        }
        console.log(str + this.name);
    }
}