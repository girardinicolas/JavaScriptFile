"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDivide = safeDivide;
function safeDivide(a, b) {
    if (b !== 0) {
        return { ok: true, value: a / b };
    }
    else {
        return { ok: false, error: 'Divisione per zero' };
    }
}
// Esempi di uso
var risultato1 = safeDivide(10, 2);
if (risultato1.ok) {
    console.log('Risultato della divisione:', risultato1.value);
}
else {
    console.error('Errore:', risultato1.error);
}
var risultato2 = safeDivide(10, 0);
if (risultato2.ok) {
    console.log('Risultato della divisione:', risultato2.value);
}
else {
    console.error('Errore:', risultato2.error);
}
