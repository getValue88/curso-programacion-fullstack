/*
    Implementar un sistema de archivos
        -Investigar patrón composite
*/

import Folder from './folder';
import File from "./file";

try {
    const root: Folder = new Folder("Root");
    const src: Folder = new Folder("src");
    const html: Folder = new Folder("html");
    const css: Folder = new Folder("css");
    const js: Folder = new Folder("js");
    const otraCarpeta: Folder = new Folder("Otra carperta");
    // const invalidFolder: Folder = new Folder("");     // <-- error: Folder name must be a text and can't be empty.

    const index: File = new File("index.html");
    const style: File = new File("style.css");
    const script: File = new File("script.js");
    const jquery: File = new File("jQuery.js");
    const gitIgnore: File = new File(".gitIgnore");
    const borrador: File = new File("borrador.txt");
    // const invalidFile: File = new File(1);           // <-- error: File name must be a text and can't be empty.

    root.add(src);
    src.add(html);
    src.add(css);
    src.add(js);
    root.add(otraCarpeta);
    root.add(gitIgnore);
    root.add(borrador)

    html.add(index);
    css.add(style);
    js.add(script);
    js.add(jquery);

    root.delete(otraCarpeta);
    root.delete(borrador);

    /*  root.rename("");        // <-- error: Folder name must be a text and can't be empty.
        script.rename("");      // <-- error: File name must be a text and can't be empty.
    
        html.delete(style);     // <-- error: folder/file not found .
    
        root.traverse(-1);      // <-- error: depth level can't be a negative value.
        script.traverse(-1);    // <-- error: depth level can't be a negative value.
    */

    root.traverse(0);

} catch (err) {
    console.log(`Error: ${err.message}`);
}





