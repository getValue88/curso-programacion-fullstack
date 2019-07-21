import Torneo from './torneo'

let a = new Torneo("equipos.txt",'\r\n',',');

console.log("\nSORTEO GRUPO 1");
a.showGrupos(1);
console.log("\nSORTEO GRUPO 2");
a.showGrupos(2);
console.log("\nSORTEO GRUPO 3");
a.showGrupos(3);
//--------------------------------------------
a.setFechas();

console.log("\nFECHA 1");
a.getFechas()[0].showFecha();
console.log("\nFECHA 2");
a.getFechas()[1].showFecha();
console.log("\nFECHA 3");
a.getFechas()[2].showFecha();
//--------------------------------------------
console.log("\nRESULTADOS FECHA 1");
a.getFechas()[0].simularFecha();
console.log("\nRESULTADOS FECHA 2");
a.getFechas()[1].simularFecha();
console.log("\nRESULTADOS FECHA 3");
a.getFechas()[2].simularFecha();
//---------------------------------------------
a.sortGroups();

console.log("\nFINAL GRUPO 1");
a.showGrupos(1);
console.log("\nFINAL GRUPO 2");
a.showGrupos(2);
console.log("\nFINAL GRUPO 3");
a.showGrupos(3);
//-----------------------------------------------
a.toNextRound();
console.log("\nCLASIFICADOS A LA SIGUIENTE FASE");
a.showGrupos(1);
a.showGrupos(2);
a.showGrupos(3);

a.setClasificados();
//-----------------------------------------------
console.log("\nCUARTOS DE FINAL");
a.setCuartos();
a.jugarCuartos();
//-----------------------------------------------
console.log("\nSEMIFINALES");
a.setSemis();
a.jugarSemis();
//-----------------------------------------------
console.log("\nTERCER PUESTO");
a.jugarTercer();
//-----------------------------------------------
console.log("\nFINAL!!");
a.jugarFinal();

