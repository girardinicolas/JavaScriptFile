import { Anime } from './anime.js';
import { animeStorage } from './storage.js';
import { renderList, updateCounters, mostraSoloContainer } from './ui.js';

export let currentFilter = 'all';       // filtro iniziale
export let currentSortOrder = 'desc';   // ordinamento iniziale

export async function addAnime() {
  const name = document.getElementById('newAnimeInput').value.trim();
  const description = document.getElementById('newAnimeDesc').value.trim();
  const image = document.getElementById('newAnimeImage').value.trim();

  if (!name) {
    alert('Inserisci un nome');
    return;
  }
  
  if (animeStorage.findByName(name)) {
    alert('Anime già esistente');
    return;
  }
  
  const newAnime = new Anime(name, description, image);
  animeStorage.add(newAnime);

  document.getElementById('newAnimeInput').value = '';
  document.getElementById('newAnimeDesc').value = '';
  document.getElementById('newAnimeImage').value = '';

  renderList();
  updateCounters();
}

export function removeAnime(index) {
  animeStorage.remove(index);
  renderList();
  updateCounters();
}

export function updateStatus(index, status, checked) {
  const allAnime = animeStorage.getAll();
  const anime = allAnime[index];
  if (!anime) return;

  if (status === 'seen' && checked) {
    anime.seen = true;
    anime.toWatch = false;
    anime.ongoing = false;
  } else if ((status === 'toWatch' || status === 'ongoing') && checked) {
    anime[status] = true;
    anime.seen = false;
  } else {
    anime[status] = checked;
  }

  animeStorage.update(index, anime);
  renderList();
  updateCounters();
}

export function changeFilter(newFilter) {
  currentFilter = newFilter;
  mostraSoloContainer(newFilter);
  renderList();
}

export function changeSort(newSort) {
  currentSortOrder = newSort;
  renderList();
}

window.onload = () => {
  const filterSelect = document.getElementById('filterSelect');
  if (filterSelect) {
    filterSelect.value = currentFilter;
    filterSelect.addEventListener('change', (e) => {
      changeFilter(e.target.value);
      updateCounters();
    });
  }
  renderList();
  updateCounters();
};
