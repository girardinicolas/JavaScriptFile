"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJson = parseJson;
function parseJson(raw) {
    try {
        return JSON.parse(raw);
    }
    catch (_a) {
        throw new Error('JSON non valido');
    }
}
// Test con stringa valida e non valida
var jsonValido = '{"nome":"Anna","eta":30}';
var jsonNonValido = '{"nome":"Anna", eta:30}';
try {
    var objValido = parseJson(jsonValido);
    console.log('Parsing valido:', objValido);
}
catch (error) {
    console.error(error);
}
try {
    var objNonValido = parseJson(jsonNonValido);
    console.log('Parsing non valido:', objNonValido);
}
catch (error) {
    console.error('Errore:', error.message);
}
