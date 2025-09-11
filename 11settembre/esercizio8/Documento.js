"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
var Documento = /** @class */ (function () {
    function Documento(contenuto) {
        this.contenuto = contenuto;
    }
    Documento.prototype.salva = function () {
        console.log("Documento salvato con contenuto: " + this.contenuto);
    };
    return Documento;
}());
exports.Documento = Documento;
// Test
var doc = new Documento("Contenuto esempio");
doc.salva();
