export class AnimeStorageMap {
    constructor() {
      this.map = new Map();
    }
  
    add(item) {
      this.map.set(item.name.toLowerCase(), item);
    }
  
    remove(indexOrName) {
      if (typeof indexOrName === 'number') {
        const keys = Array.from(this.map.keys());
        if (indexOrName >= 0 && indexOrName < keys.length) {
          this.map.delete(keys[indexOrName]);
        }
      } else {
        this.map.delete(indexOrName.toLowerCase());
      }
    }
  
    update(indexOrName, newData) {
      let key;
      if (typeof indexOrName === 'number') {
        key = Array.from(this.map.keys())[indexOrName];
      } else {
        key = indexOrName.toLowerCase();
      }
      if (key && this.map.has(key)) {
        const current = this.map.get(key);
        this.map.set(key, { ...current, ...newData });
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
  }
  