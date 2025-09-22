import { Anime } from './anime.js';
import { animeStorage } from './storage.js';
import { renderList, updateCounters, mostraSoloContainer } from './ui.js';

export let currentFilter: 'all' | 'toWatch' | 'ongoing' | 'seen' = 'all';     // filtro iniziale
export let currentSortOrder: 'asc' | 'desc' = 'desc';                       // ordinamento iniziale

export async function addAnime(): Promise<void> {
  const nameInput = document.getElementById('newAnimeInput') as HTMLInputElement | null;
  const descInput = document.getElementById('newAnimeDesc') as HTMLInputElement | null;
  const imageInput = document.getElementById('newAnimeImage') as HTMLInputElement | null;

  if (!nameInput) return;
  const name = nameInput.value.trim();
  const description = descInput?.value.trim() ?? '';
  const image = imageInput?.value.trim() ?? '';

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

  if (nameInput) nameInput.value = '';
  if (descInput) descInput.value = '';
  if (imageInput) imageInput.value = '';

  renderList();
  updateCounters();
}

export function removeAnime(index: number): void {
  animeStorage.remove(index);
  renderList();
  updateCounters();
}

export function updateStatus(index: number, status: 'toWatch' | 'ongoing' | 'seen', checked: boolean): void {
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

export function changeFilter(newFilter: 'all' | 'toWatch' | 'ongoing' | 'seen'): void {
  currentFilter = newFilter;
  mostraSoloContainer(newFilter);
  renderList();
}

export function changeSort(newSort: 'asc' | 'desc'): void {
  currentSortOrder = newSort;
  renderList();
}

window.onload = () => {
  const filterSelect = document.getElementById('filterSelect') as HTMLSelectElement | null;
  if (filterSelect) {
    filterSelect.value = currentFilter;
    filterSelect.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      changeFilter(target.value as 'all' | 'toWatch' | 'ongoing' | 'seen');
      updateCounters();
    });
  }
  renderList();
  updateCounters();
};
