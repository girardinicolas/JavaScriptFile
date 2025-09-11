var Persona = /** @class */ (function () {
    function Persona(eta) {
        this.eta = eta;
    }
    Persona.prototype.getEta = function () {
        return this.eta;
    };
    return Persona;
}());
var persona = new Persona(30);
console.log(persona.getEta()); // Stampa 30
// Questa riga darà errore di compilazione perché eta è privata
// console.log(persona.eta);
