// file.js
var variabileVar = 10;
let variabileLet = 20;
const variabileConst = 30;

console.log("valore iniziale variabileVar:", variabileVar);
console.log("valore iniziale variabileLet:", variabileLet);
console.log("valore iniziale variabileConst:", variabileConst);

variabileVar = 40;    // Funziona: var può essere riassegnata
variabileLet = 50;    // Funziona: let può essere riassegnata

console.log("valore dopo riassegnazione variabileVar:", variabileVar);
console.log("valore dopo riassegnazione variabileLet:", variabileLet);

try {
    variabileConst = 60;  // Errore: const non può essere riassegnata
} catch(e) {
    console.error("Errore riassegnazione const:", e.message);
}
