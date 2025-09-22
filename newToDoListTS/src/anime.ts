// Classe che rappresenta un singolo anime con proprietà e metodi base
export class Anime {
  name: string;
  description?: string;
  image?: string;
  toWatch: boolean;
  ongoing: boolean;
  seen: boolean;
  addedDate: number;

  constructor(
    name: string,
    description?: string,
    image?: string,
    toWatch = false,
    ongoing = false,
    seen = false
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.toWatch = toWatch;
    this.ongoing = ongoing;
    this.seen = seen;
    this.addedDate = Date.now();
  }

  // Metodo per mostrare informazioni principali come stringa
  displayInfo(): string {
    return `${this.name}: ${this.description}`;
  }
}
