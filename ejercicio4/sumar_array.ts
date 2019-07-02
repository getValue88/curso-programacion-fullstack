/*  Implementar una función que sume los elementos de un arreglo
    Forzar algún tipo de error a modo de ejemplificación
*/

let arr: number[] = [2, 5, 7, 54, -25, 33, 20.5 /*, "hola" */]; //<-- forzar error introduciendo un string.

console.log(sumarArray(arr));

function sumarArray(arr) : number {
    let total: number = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}