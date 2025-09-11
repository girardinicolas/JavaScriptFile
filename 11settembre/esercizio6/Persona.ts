export class Persona {
    private eta: number;

    constructor(eta: number) {
        this.eta = eta;
    }

    public getEta(): number {
        return this.eta;
    }
}

const persona = new Persona(30);
console.log(persona.getEta()); // Stampa 30

// Questa riga darà errore di compilazione perché eta è privata
// console.log(persona.eta);
