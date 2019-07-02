/*  Implementar una función que sume los elementos de un arreglo
    Forzar algún tipo de error a modo de ejemplificación
*/
var arr = [2, 5, 7, 54, -25, 33, 20.5 /*, "hola" */]; //<-- forzar error introduciendo un string.
console.log(sumarArray(arr));
function sumarArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
