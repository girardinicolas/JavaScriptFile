export class AnimeStorageArray {
  constructor() {
    this.list = [];
  }
  add(item) { this.list.push(item); }
  remove(index) { this.list.splice(index, 1); }
  update(index, newData) { this.list[index] = { ...this.list[index], ...newData }; }
  findByName(name) { return this.list.find(a => a.name.toLowerCase() === name.toLowerCase()); }
  getAll() { return this.list; }
  size() { return this.list.length; }
}

export class AnimeStorageMap {
  constructor() {
    this.map = new Map();
  }
  add(item) { this.map.set(item.name.toLowerCase(), item); }
  remove(indexOrName) {
    if (typeof indexOrName === 'number') {
      const keys = Array.from(this.map.keys());
      if (indexOrName >= 0 && indexOrName < keys.length) this.map.delete(keys[indexOrName]);
    } else {
      this.map.delete(indexOrName.toLowerCase());
    }
  }
  update(indexOrName, newData) {
    let key = typeof indexOrName === 'number' ? Array.from(this.map.keys())[indexOrName] : indexOrName.toLowerCase();
    if (key && this.map.has(key)) {
      const current = this.map.get(key);
      this.map.set(key, { ...current, ...newData });
    }
  }
  findByName(name) { return this.map.get(name.toLowerCase()); }
  getAll() { return Array.from(this.map.values()); }
  size() { return this.map.size; }
}

export let animeStorage = new AnimeStorageArray();

export function setStorage(newStorage) {
  animeStorage = newStorage;
}
