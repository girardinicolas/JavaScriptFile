import { Anime } from './anime.js';

const STORAGE_KEY = 'animeList';

// Storage che usa un Array internamente
export class AnimeStorageArray {
  constructor() {
    this.list = []; // lista locale di anime
  }

  // Aggiunge anime (istanza o oggetto da convertire)
  add(item) {
    const anime = item instanceof Anime ? item : new Anime(
      item.name,
      item.description,
      item.image,
      item.toWatch,
      item.ongoing,
      item.seen
    );
    this.list.push(anime);     // inserisce nell'array
    this.persist();            // salva su localStorage
  }

  // Rimuove anime per indice
  remove(index) {
    this.list.splice(index, 1);
    this.persist();
  }

  // Aggiorna anime in posizione index con nuovi dati
  update(index, newData) {
    this.list[index] = { ...this.list[index], ...newData };
    this.persist();
  }

  // Cerca anime per nome (case insensitive)
  findByName(name) {
    return this.list.find(a => a.name.toLowerCase() === name.toLowerCase());
  }

  // Ritorna lista completa
  getAll() {
    return this.list;
  }

  // Ritorna dimensione della lista
  size() {
    return this.list.length;
  }

  // Carica dati da localStorage e li trasforma in oggetti Anime
  load() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      this.list = parsed.map(item => new Anime(
        item.name,
        item.description,
        item.image,
        item.toWatch,
        item.ongoing,
        item.seen
      ));
    }
  }

  // Salva dati correnti su localStorage
  persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list));
  }
}

// Storage che usa una Map internamente, chiave: nome anime minuscolo
export class AnimeStorageMap {
  constructor() {
    this.map = new Map();
  }

  // Aggiunge anime nella Map con nome in minuscolo come chiave
  add(item) {
    const anime = item instanceof Anime ? item : new Anime(
      item.name,
      item.description,
      item.image,
      item.toWatch,
      item.ongoing,
      item.seen
    );
    this.map.set(anime.name.toLowerCase(), anime);
    this.persist();
  }

  // Rimuove anime per indice o nome
  remove(indexOrName) {
    if (typeof indexOrName === 'number') {
      const keys = Array.from(this.map.keys());
      if (indexOrName >= 0 && indexOrName < keys.length)
        this.map.delete(keys[indexOrName]);
    } else {
      this.map.delete(indexOrName.toLowerCase());
    }
    this.persist();
  }

  // Aggiorna anime per indice o nome
  update(indexOrName, newData) {
    let key = typeof indexOrName === 'number' ? Array.from(this.map.keys())[indexOrName] : indexOrName.toLowerCase();
    if (key && this.map.has(key)) {
      const current = this.map.get(key);
      this.map.set(key, { ...current, ...newData });
      this.persist();
    }
  }

  // Cerca anime per nome
  findByName(name) {
    return this.map.get(name.toLowerCase());
  }

  // Ritorna tutti gli anime come array
  getAll() {
    return Array.from(this.map.values());
  }

  // Dimensione della mappa
  size() {
    return this.map.size;
  }

  // Carica da localStorage e inizializza la Map
  load() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      this.map = new Map(parsed.map(item => [
        item.name.toLowerCase(),
        new Anime(
          item.name,
          item.description,
          item.image,
          item.toWatch,
          item.ongoing,
          item.seen
        )
      ]));
    }
  }

  // Salva su localStorage l’array degli anime (da mappa)
  persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.getAll()));
  }
}

// Istanza default come ArrayStorage
export let animeStorage = new AnimeStorageArray();
animeStorage.load();

// Cambia istanza di storage in uso e ricarica dati da localStorage
export function setStorage(newStorage) {
  animeStorage = newStorage;
  animeStorage.load();
}
