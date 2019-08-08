export default interface Component {
    rename(newName: string): void;
    traverse(depth: number): void;
}