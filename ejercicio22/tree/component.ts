export default interface Component {
    getName(): string;
    rename(newName: string): void;
    traverse(depth: number): void;
}