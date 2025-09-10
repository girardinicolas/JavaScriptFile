import { AnimeStorageArray, AnimeStorageMap, animeStorage, setStorage } from './storage.js';
import { renderList, updateCounters } from './ui.js';

export function switchToMap() {
  const newStorage = new AnimeStorageMap();
  animeStorage.getAll().forEach(item => newStorage.add(item));
  setStorage(newStorage);
  renderList();
  updateCounters();
  alert('Storage impostato su Map');
}

export function switchToArray() {
  const newStorage = new AnimeStorageArray();
  animeStorage.getAll().forEach(item => newStorage.add(item));
  setStorage(newStorage);
  renderList();
  updateCounters();
  alert('Storage impostato su Array');
}
