// Classe che rappresenta un singolo anime con proprietà e metodi base
export class Anime {
    constructor(name, description, image, toWatch = false, ongoing = false, seen = false) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.toWatch = toWatch;
        this.ongoing = ongoing;
        this.seen = seen;
        this.addedDate = Date.now();
    }
    // Metodo per mostrare informazioni principali come stringa
    displayInfo() {
        return `${this.name}: ${this.description}`;
    }
}
