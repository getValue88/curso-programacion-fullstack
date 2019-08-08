import Component from "./component";

export default class File implements Component {
    private name: string

    public constructor(name: string) {
        if (typeof name != "string" || name == "")
            throw new Error("File name must be a text and can't be empty");
        this.name = name;
    }

    public rename(newName: string): void {
        if (newName == "" || typeof newName != "string")
            throw new Error("File name must be a text and can't be empty");
        this.name = newName;
    }

    public traverse(depth: number): void {
        if (depth < 0 || isNaN(depth))
            throw new Error("Depth level can't be a negative value and must be a number");
        let str = "";
        for (let i = 0; i < depth; i++) {
            str += "  ";
        }
        console.log(str + this.name);
    }
}