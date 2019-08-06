import Component from "./component";

export default class Folder implements Component {
    private name: string
    private childrens: Component[] = []

    public constructor(name: string) {
        this.name = name;
    }

    public add(c: Component): void {
        this.childrens.push(c);
    }

    public delete(c: Component): void {
        this.childrens.map((child, i) => {
            if (child == c)
                this.childrens.splice(i, 1);
        });
    }

    public rename(newName: string){
        this.name= newName;
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