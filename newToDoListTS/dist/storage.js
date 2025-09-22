import { Anime } from './anime.js';
const STORAGE_KEY = 'animeList';
// Storage che usa un Array internamente
export class AnimeStorageArray {
    constructor() {
        this.list = [];
    }
    add(item) {
        const anime = item instanceof Anime ? item : new Anime(item.name, item.description, item.image, item.toWatch ?? false, item.ongoing ?? false, item.seen ?? false);
        this.list.push(anime);
        this.persist();
    }
    remove(index) {
        this.list.splice(index, 1);
        this.persist();
    }
    update(index, newData) {
        const current = this.list[index];
        if (!current)
            return;
        // Create a new Anime instance to ensure all required fields and methods are present
        this.list[index] = new Anime(newData.name ?? current.name, newData.description ?? current.description, newData.image ?? current.image, newData.toWatch ?? current.toWatch, newData.ongoing ?? current.ongoing, newData.seen ?? current.seen);
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
            this.list = parsed.map(item => new Anime(item.name, item.description, item.image, item.toWatch ?? false, item.ongoing ?? false, item.seen ?? false));
        }
        else {
            this.list = [];
        }
    }
    persist() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.list));
    }
}
// Storage che usa una Map internamente, chiave: nome anime minuscolo
export class AnimeStorageMap {
    constructor() {
        this.map = new Map();
    }
    add(item) {
        const anime = item instanceof Anime ? item : new Anime(item.name, item.description, item.image, item.toWatch ?? false, item.ongoing ?? false, item.seen ?? false);
        this.map.set(anime.name.toLowerCase(), anime);
        this.persist();
    }
    remove(indexOrName) {
        if (typeof indexOrName === 'number') {
            const keys = Array.from(this.map.keys());
            if (indexOrName >= 0 && indexOrName < keys.length) {
                this.map.delete(keys[indexOrName]);
            }
        }
        else {
            this.map.delete(indexOrName.toLowerCase());
        }
        this.persist();
    }
    update(indexOrName, newData) {
        let key;
        if (typeof indexOrName === 'number') {
            const keys = Array.from(this.map.keys());
            key = indexOrName >= 0 && indexOrName < keys.length ? keys[indexOrName] : undefined;
        }
        else {
            key = indexOrName.toLowerCase();
        }
        if (key && this.map.has(key)) {
            const current = this.map.get(key);
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
                new Anime(item.name, item.description, item.image, item.toWatch ?? false, item.ongoing ?? false, item.seen ?? false)
            ]));
        }
        else {
            this.map = new Map();
        }
    }
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
