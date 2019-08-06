/*
    -Implementar un logger que incorpore al sistema de gestión de archivos
    -Investigar patrón singleton
    -Incluir un archivo de texto que explique las razones de por qué tomaron las decisiones que tomaron
*/

import Folder from "./tree/folder";
import File from "./tree/file";

const root: Folder = new Folder("root");
const src: Folder = new Folder("source");
const html: Folder = new Folder("html");
const css: Folder = new Folder("css");
const js: Folder = new Folder("js");
const otraCarpeta: Folder = new Folder("Otra carperta");

const index: File = new File("index.html");
const style: File = new File("style.css");
const script: File = new File("script2.js");
const jquery: File = new File("jQuery.js");
const gitIgnore: File = new File(".gitIgnore");
const borrador: File = new File("borrador.txt");

root.add(src);
src.add(html);
src.add(css);
src.add(js);
root.add(otraCarpeta);
otraCarpeta.add(new File("asd.txt"));
root.add(gitIgnore);
root.add(borrador)

html.add(index);
css.add(style);
js.add(script);
js.add(jquery);

root.delete(otraCarpeta);
root.delete(borrador);
// js.delete(jquery);
script.rename("script.js");
src.rename("src");

root.traverse(0);
// html.traverse(0);





