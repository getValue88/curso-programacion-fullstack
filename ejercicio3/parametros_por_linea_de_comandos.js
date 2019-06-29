let par = process.argv;

function sumar(num, anotherNum) {
    return parseFloat(num) + parseFloat(anotherNum);
}

console.log(sumar(par[2], par[3]));