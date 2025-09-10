import { fetchTodos, addFakePost } from './fetchAndPost.js';
import { renderList, updateCounters } from './ui.js';
import { switchToArray, switchToMap } from './storageSwitcher.js';
import { addAnime, onFilterChange, onSortChange } from './main.js';

export function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', async () => {
    await fetchTodos();
    renderList();

    const btnArray = document.getElementById('btnArrayStorage');
    const btnMap = document.getElementById('btnMapStorage');
    const btnAddFakePost = document.getElementById('btnAddFakePost');
    const btnAddAnime = document.getElementById('addAnimeBtn');
    const filterSelect = document.getElementById('filterSelect');
    const sortSelect = document.getElementById('sortSelect');

    if (btnArray) btnArray.addEventListener('click', switchToArray);
    if (btnMap) btnMap.addEventListener('click', switchToMap);
    if (btnAddFakePost) btnAddFakePost.addEventListener('click', addFakePost);
    if (btnAddAnime) btnAddAnime.addEventListener('click', addAnime);
    if (filterSelect) filterSelect.addEventListener('change', onFilterChange);
    if (sortSelect) sortSelect.addEventListener('change', onSortChange);
  });
}
