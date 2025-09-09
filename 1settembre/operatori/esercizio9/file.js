const a = 5;
const b = '5';

console.log("a == b:", a == b);   // true, perché == fa coercizione di tipo
console.log("a === b:", a === b); // false, perché === confronta valore e tipo

console.log("0 == false:", 0 == false);  // true, coercizione di tipo
console.log("0 === false:", 0 === false); // false, tipi diversi

console.log("'' == false:", '' == false);  // true
console.log("'' === false:", '' === false); // false

// Esempio con valori identici e stesso tipo:
const c = 10;
const d = 10;
console.log("c == d:", c == d);   // true
console.log("c === d:", c === d); // true
