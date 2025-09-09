const zero = 0;
const indefinito = undefined;

// Operatore OR || restituisce il primo valore truthy, 0 è falsy quindi passa al secondo valore
console.log("zero || 10 =", zero || 10);  // Risultato: 10

// Operatore Nullish Coalescing ?? restituisce il primo valore che non sia null o undefined
console.log("zero ?? 10 =", zero ?? 10);  // Risultato: 0

// Per undefined entrambi restituiscono il secondo valore
console.log("indefinito || 10 =", indefinito || 10); // Risultato: 10
console.log("indefinito ?? 10 =", indefinito ?? 10); // Risultato: 10
