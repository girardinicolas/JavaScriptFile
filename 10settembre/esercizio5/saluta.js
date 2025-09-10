function saluta(nome) {
    if (nome === void 0) { nome = 'ospite'; }
    console.log("Ciao, " + nome + "!");
}
// Esempi d'uso
saluta(); // Usa valore di default: "Ciao, ospite!"
saluta('Mario'); // Passa parametro: "Ciao, Mario!"
