let par = process.argv.slice(2);

function sumar(num, anotherNum) {
    return parseFloat(num) + parseFloat(anotherNum);
}

console.log(sumar(par[0], par[1]));