var username: string;
var age: number;

// Assegnazioni corrette
username = "Mario";
age = 25;

// Assegnazioni errate (scatenano errore TypeScript)
// username = 123; // Errore: Type 'number' non assegnabile a tipo 'string'
// age = "trentacinque"; // Errore: Type 'string' non assegnabile a tipo 'number'

console.log(`Username: ${username}, Age: ${age}`);
