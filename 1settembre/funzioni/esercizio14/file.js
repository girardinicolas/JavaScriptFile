function raddoppiaArray(arr) {
    return arr.map(num => num * 2);
}

// Esempio di utilizzo
const numeri = [1, 3, 5, 7];
const numeriRaddoppiati = raddoppiaArray(numeri);

console.log("Array originale:", numeri);
console.log("Array raddoppiato:", numeriRaddoppiati);
