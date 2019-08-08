import Component from "./component";

export default class Folder implements Component {
    private name: string
    private childrens: Component[] = []

    public constructor(name: string) {
        if (typeof name != "string" || name == "")
            throw new Error("Folder name must be a text and can't be empty");
        this.name = name;
    }

    public add(c: Component): void {
        this.childrens.push(c);
    }

    public delete(c: Component): void {
        let deleted: boolean = false;
        this.childrens.map((child, i) => {
            if (child == c) {
                this.childrens.splice(i, 1);
                deleted = true;
            }
        });
        if (!deleted)
            throw new Error("Folder/File not found");
    }

    public rename(newName: string) {
        if (newName == "" || typeof newName != "string")
            throw new Error("Folder name must be a text and can't be empty");
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
        for (let i = 0; i < this.childrens.length; i++) {
            this.childrens[i].traverse(depth + 1);
        }
    }
}