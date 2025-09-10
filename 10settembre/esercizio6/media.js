function media() {
    var numeri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeri[_i] = arguments[_i];
    }
    if (numeri.length === 0) {
        return 0; // Evita divisione per zero
    }
    var somma = numeri.reduce(function (acc, val) { return acc + val; }, 0);
    return somma / numeri.length;
}
// Esempi d'uso
console.log(media(10, 20, 30)); // 20
console.log(media(5, 15)); // 10
console.log(media()); // 0
