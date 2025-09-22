// Classe che rappresenta un singolo anime con proprietà e metodi base
export class Anime {
  constructor(name, description, image, toWatch = false, ongoing = false, seen = false) {
    this.name = name;               // nome anime
    this.description = description; // descrizione
    this.image = image;             // URL immagine
    this.toWatch = toWatch;         // flag “da vedere”
    this.ongoing = ongoing;         // flag “in corso”
    this.seen = seen;               // flag “visto”
    this.addedDate = Date.now();    // timestamp di aggiunta
  }

  // Metodo per mostrare informazioni principali come stringa
  displayInfo() {
    return `${this.name}: ${this.description}`;
  }
}
