import { Anime } from './anime.js';

const STORAGE_KEY = 'animeList';

export class AnimeStorageArray {
  constructor() {
    this.list = [];
  }

  add(item) {
    const anime = item instanceof Anime ? item : new Anime(
      item.name,
      item.description,
      item.image,
      item.toWatch,
      item.ongoing,
      item.seen
    );
    this.list.push(anime);
    this.persist();
  }

  remove(index) {
    this.list.splice(index, 1);
    this.persist();
  }

  update(index, newData) {
    this.list[index] = { ...this.list[index], ...newData };
    this.persist();
  }

  findByName(name) {
    return this.list.find(a => a.name.toLowerCase() === name.toLowerCase());
  }

  getAll() {
    return this.list;
  }

  size() {
    return this.list.length;
  }

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

  persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list));
  }
}

export class AnimeStorageMap {
  constructor() {
    this.map = new Map();
  }

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

  update(indexOrName, newData) {
    let key = typeof indexOrName === 'number' ? Array.from(this.map.keys())[indexOrName] : indexOrName.toLowerCase();
    if (key && this.map.has(key)) {
      const current = this.map.get(key);
      this.map.set(key, { ...current, ...newData });
      this.persist();
    }
  }

  findByName(name) {
    return this.map.get(name.toLowerCase());
  }

  getAll() {
    return Array.from(this.map.values());
  }

  size() {
    return this.map.size;
  }

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

  persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.getAll()));
  }
}

export let animeStorage = new AnimeStorageArray();
animeStorage.load();

export function setStorage(newStorage) {
  animeStorage = newStorage;
  animeStorage.load();
}
