import Component from "./component";
import Logger from "../logger/logger";

export default class Folder implements Component {
    private name: string
    private childrens: Component[] = []

    public constructor(name: string) {
        this.name = name;
    }

    public add(c: Component): void {
        this.childrens.push(c);
        Logger.getInstance().writeLog(new Date(), "add\t\t\t", `${this.name}/${c.getName()}`);
    }

    public delete(c: Component): void {
        this.childrens.map((child, i) => {
            if (child == c) {
                this.childrens.splice(i, 1);
                Logger.getInstance().writeLog(new Date(), "delete\t    ", `${this.name}/${c.getName()}`);
            }
        });
    }

    public getName(): string {
        return this.name;
    }

    public rename(newName: string): void {
        let beforeName: string = this.name;
        this.name = newName;
        Logger.getInstance().writeLog(new Date(), "rename Folder", `from: ${beforeName} to ${newName}`);
    }

    public traverse(depth: number): void {
        let str = "";
        for (let i = 0; i < depth; i++) {
            str += "  ";
        }
        console.log(str + this.name);
        for (let i = 0; i < this.childrens.length; i++) {
            this.childrens[i].traverse(depth + 1);
        }
    }
}