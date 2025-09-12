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
  
    displayInfo() {
      return `${this.name}: ${this.description}`;
    }
  }
  