class Anime {
    name: string;
    description: string;
    image: string;
    toWatch: boolean;
    ongoing: boolean;
    seen: boolean;
  
    constructor(
      name: string,
      description: string,
      image: string,
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
    }
  
    displayInfo(): string {
      return `${this.name}: ${this.description}`;
    }
  }
  