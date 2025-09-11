import { Salvabile } from './Salvabile';

export class Documento implements Salvabile {
    private contenuto: string;

    constructor(contenuto: string) {
        this.contenuto = contenuto;
    }

    public salva(): void {
        console.log("Documento salvato con contenuto: " + this.contenuto);
    }
}

// Test
const doc = new Documento("Contenuto esempio");
doc.salva();
