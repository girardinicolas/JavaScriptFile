// Variabile dichiarata ma non inizializzata → undefined
let variabileNonInizializzata;
console.log("variabileNonInizializzata =", variabileNonInizializzata);

// Variabile esplicitamente inizializzata a null
let variabileNull = null;
console.log("variabileNull =", variabileNull);

// Oggetto con proprietà definita
let oggetto = { prop: 42 };
console.log("oggetto.prop =", oggetto.prop);

// Accesso a proprietà mancante → undefined
console.log("oggetto.propMancante =", oggetto.propMancante);
