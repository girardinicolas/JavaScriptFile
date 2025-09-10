export function saluta(nome: string = 'ospite'): void {
  console.log(`Ciao, ${nome}!`);
}

// Esempi d'uso
  saluta();        // Usa valore di default: "Ciao, ospite!"
  saluta('Mario'); // Passa parametro: "Ciao, Mario!"
  