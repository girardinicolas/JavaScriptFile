import { addAnime, changeFilter, changeSort } from './main.js';
import { switchToArray, switchToMap } from './storageSwitcher.js';
import { renderList, updateCounters } from './ui.js';

export function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addAnimeBtn').addEventListener('click', addAnime);
    document.getElementById('btnArrayStorage').addEventListener('click', switchToArray);
    document.getElementById('btnMapStorage').addEventListener('click', switchToMap);

    document.getElementById('filterSelect').addEventListener('change', e => changeFilter(e.target.value));
    document.getElementById('sortSelect').addEventListener('change', e => changeSort(e.target.value));

    renderList();
    updateCounters();
  });
}

setupEventListeners();
