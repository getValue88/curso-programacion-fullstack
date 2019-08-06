import Component from "./component";

export default class File implements Component {
    private name: string

    public constructor(name: string) {
        this.name = name;
    }

    public rename(newName:string):void{
        this.name = newName;
    }

    public traverse(depth: number): void {
        let str = "";
        for (let i = 0; i < depth; i++) {
            str += "  ";
        }
        console.log(str + this.name);
    }
}