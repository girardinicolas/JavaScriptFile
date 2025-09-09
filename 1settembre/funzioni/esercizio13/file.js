// Funzione dichiarata
function calcolaMedia(num1, num2) {
    return (num1 + num2) / 2;
}

// Espressione di funzione
const calcolaMediaExpr = function(num1, num2) {
    return (num1 + num2) / 2;
};

// Arrow function
const calcolaMediaArrow = (num1, num2) => (num1 + num2) / 2;

// Esempi di utilizzo
console.log("Funzione dichiarata:", calcolaMedia(8, 12));
console.log("Espressione di funzione:", calcolaMediaExpr(8, 12));
console.log("Arrow function:", calcolaMediaArrow(8, 12));
