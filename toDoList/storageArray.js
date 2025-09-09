export class AnimeStorageArray {
    constructor() {
      this.list = [];
    }
  
    add(item) {
      this.list.push(item);
    }
  
    remove(index) {
      this.list.splice(index, 1);
    }
  
    update(index, newData) {
      this.list[index] = { ...this.list[index], ...newData };
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
  }
  