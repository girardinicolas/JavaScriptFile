function ordinaArray(arr, order) {
    if (order === 'asc') {
        return arr.slice().sort(function (a, b) { return a - b; });
    }
    else if (order === 'desc') {
        return arr.slice().sort(function (a, b) { return b - a; });
    }
    else {
        throw new Error("Ordine di ordinamento non valido: " + order);
    }
}
var numeri = [5, 2, 9, 1, 5];
console.log('Ascendente:', ordinaArray(numeri, 'asc'));
console.log('Descendente:', ordinaArray(numeri, 'desc'));
try {
    console.log('Errore test:', ordinaArray(numeri, 'random'));
}
catch (e) {
    console.error('Errore catturato:', e.message);
}
