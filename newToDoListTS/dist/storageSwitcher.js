import { AnimeStorageArray, AnimeStorageMap, animeStorage, setStorage } from './storage.js';
import { renderList, updateCounters } from './ui.js';
// Funzione mostra popup discreto in alto a destra per confermare cambio storage
function showModePopup(message, duration = 2500) {
    const popup = document.getElementById('modePopup');
    if (!popup)
        return;
    popup.textContent = message;
    popup.style.display = 'block';
    clearTimeout(popup._timeoutId);
    popup._timeoutId = setTimeout(() => {
        popup.style.display = 'none';
    }, duration);
}
// Cambia storage a Map, migra dati correnti, aggiorna UI, mostra popup
export function switchToMap() {
    const newStorage = new AnimeStorageMap();
    animeStorage.getAll().forEach(item => newStorage.add(item));
    setStorage(newStorage);
    renderList();
    updateCounters();
    showModePopup('Storage impostato su Map');
}
// Cambia storage ad Array, migra dati correnti, aggiorna UI, mostra popup
export function switchToArray() {
    const newStorage = new AnimeStorageArray();
    animeStorage.getAll().forEach(item => newStorage.add(item));
    setStorage(newStorage);
    renderList();
    updateCounters();
    showModePopup('Storage impostato su Array');
}
