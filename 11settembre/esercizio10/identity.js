function identity(value) {
    return value;
}
// Test con stringhe
var stringa = identity("Ciao mondo");
console.log(stringa);
// Test con numeri
var numero = identity(42);
console.log(numero);
