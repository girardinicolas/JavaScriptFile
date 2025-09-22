import { Anime } from './anime.js';

const STORAGE_KEY = 'animeList';

export interface AnimeStorage {
  add(item: Anime | Partial<Anime>): void;
  remove(index: number | string): void;
  update(index: number | string, newData: Partial<Anime>): void;
  findByName(name: string): Anime | undefined;
  getAll(): Anime[];
  size(): number;
  load(): void;
  persist(): void;
}

// Storage che usa un Array internamente
export class AnimeStorageArray implements AnimeStorage {
  private list: Anime[];

  constructor() {
    this.list = [];
  }

  add(item: Anime | Partial<Anime>): void {
    const anime = item instanceof Anime ? item : new Anime(
      item.name!,
      item.description,
      item.image,
      item.toWatch ?? false,
      item.ongoing ?? false,
      item.seen ?? false
    );
    this.list.push(anime);
    this.persist();
  }

  remove(index: number): void {
    this.list.splice(index, 1);
    this.persist();
  }

  update(index: number, newData: Partial<Anime>): void {
    const current = this.list[index];
    if (!current) return;
    // Create a new Anime instance to ensure all required fields and methods are present
    this.list[index] = new Anime(
      newData.name ?? current.name,
      newData.description ?? current.description,
      newData.image ?? current.image,
      newData.toWatch ?? current.toWatch,
      newData.ongoing ?? current.ongoing,
      newData.seen ?? current.seen
    );
    this.persist();
  }

  findByName(name: string): Anime | undefined {
    return this.list.find(a => a.name.toLowerCase() === name.toLowerCase());
  }

  getAll(): Anime[] {
    return this.list;
  }

  size(): number {
    return this.list.length;
  }

  load(): void {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed: Partial<Anime>[] = JSON.parse(data);
      this.list = parsed.map(item => new Anime(
        item.name!,
        item.description,
        item.image,
        item.toWatch ?? false,
        item.ongoing ?? false,
        item.seen ?? false
      ));
    } else {
      this.list = [];
    }
  }

  persist(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list));
  }
}

// Storage che usa una Map internamente, chiave: nome anime minuscolo
export class AnimeStorageMap implements AnimeStorage {
  private map: Map<string, Anime>;

  constructor() {
    this.map = new Map();
  }

  add(item: Anime | Partial<Anime>): void {
    const anime = item instanceof Anime ? item : new Anime(
      item.name!,
      item.description,
      item.image,
      item.toWatch ?? false,
      item.ongoing ?? false,
      item.seen ?? false
    );
    this.map.set(anime.name.toLowerCase(), anime);
    this.persist();
  }

  remove(indexOrName: number | string): void {
    if (typeof indexOrName === 'number') {
      const keys = Array.from(this.map.keys());
      if (indexOrName >= 0 && indexOrName < keys.length) {
        this.map.delete(keys[indexOrName]);
      }
    } else {
      this.map.delete(indexOrName.toLowerCase());
    }
    this.persist();
  }

  update(indexOrName: number | string, newData: Partial<Anime>): void {
    let key: string | undefined;
    if (typeof indexOrName === 'number') {
      const keys = Array.from(this.map.keys());
      key = indexOrName >= 0 && indexOrName < keys.length ? keys[indexOrName] : undefined;
    } else {
      key = indexOrName.toLowerCase();
    }

    if (key && this.map.has(key)) {
      const current = this.map.get(key)!;
      // Ensure displayInfo is not set to undefined
      const { displayInfo, ...restNewData } = newData;
      const updated = {
        ...current,
        ...restNewData,
        displayInfo: displayInfo !== undefined ? displayInfo : current.displayInfo
      };
      this.map.set(key, updated);
      this.persist();
    }
  }

  findByName(name: string): Anime | undefined {
    return this.map.get(name.toLowerCase());
  }

  getAll(): Anime[] {
    return Array.from(this.map.values());
  }

  size(): number {
    return this.map.size;
  }

  load(): void {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed: Partial<Anime>[] = JSON.parse(data);
      this.map = new Map(parsed.map(item => [
        item.name!.toLowerCase(),
        new Anime(
          item.name!,
          item.description,
          item.image,
          item.toWatch ?? false,
          item.ongoing ?? false,
          item.seen ?? false
        )
      ]));
    } else {
      this.map = new Map();
    }
  }

  persist(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.getAll()));
  }
}

// Istanza default come ArrayStorage
export let animeStorage: AnimeStorage = new AnimeStorageArray();
animeStorage.load();

// Cambia istanza di storage in uso e ricarica dati da localStorage
export function setStorage(newStorage: AnimeStorage): void {
  animeStorage = newStorage;
  animeStorage.load();
}
