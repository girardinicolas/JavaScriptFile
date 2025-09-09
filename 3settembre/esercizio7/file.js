function dividi(a, b) {
    const risultato = Math.floor(a / b);
    const resto = a % b;
    return { risultato, resto };
}

// Esempio di chiamata e stampa in console
const divisione = dividi(13, 5);
console.log(divisione); // { risultato: 2, resto: 3 }
