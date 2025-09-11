import { Persona } from './Persona';

export class Studente extends Persona {
    private matricola: string;

    constructor(eta: number, matricola: string) {
        super(eta);
        this.matricola = matricola;
    }

    public stampaInfo(): void {
        console.log(`Età: ${this.getEta()}, Matricola: ${this.matricola}`);
    }
}

// Test rapido:
const studente = new Studente(21, "MAT123456");
studente.stampaInfo();
