import { animeStorage } from './storage.js';
import { removeAnime, updateStatus } from './main.js';
import { currentFilter, currentSortOrder } from './main.js';

export function renderList() {
  const toWatchContainer = document.getElementById('toWatchContainer');
  const ongoingContainer = document.getElementById('ongoingContainer');
  const seenContainer = document.getElementById('seenContainer');

  toWatchContainer.innerHTML = '';
  ongoingContainer.innerHTML = '';
  seenContainer.innerHTML = '';

  let list = animeStorage.getAll();

  if (currentFilter === 'toWatch') list = list.filter(a => a.toWatch);
  else if (currentFilter === 'ongoing') list = list.filter(a => a.ongoing);
  else if (currentFilter === 'seen') list = list.filter(a => a.seen);

  list.sort((a, b) =>
    currentSortOrder === 'asc' ? a.addedDate - b.addedDate : b.addedDate - a.addedDate
  );

  list.forEach((anime, index) => {
    const card = document.createElement('div');
    card.className = 'anime-card';

    const img = document.createElement('img');
    img.src = anime.image || 'https://via.placeholder.com/250x350?text=No+Image';
    img.alt = anime.name;
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = anime.name;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = anime.description || 'Nessuna descrizione disponibile.';
    card.appendChild(desc);

    ['toWatch', 'ongoing', 'seen'].forEach(status => {
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = anime[status];
      cb.id = `${status}${index}`;
      cb.addEventListener('change', e => updateStatus(index, status, e.target.checked));

      const label = document.createElement('label');
      label.htmlFor = cb.id;
      label.textContent = status === 'toWatch' ? 'Da vedere' : status === 'ongoing' ? 'In corso' : 'Visto';

      card.appendChild(cb);
      card.appendChild(label);
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Rimuovi';
    removeBtn.onclick = () => removeAnime(index);
    card.appendChild(removeBtn);

    if (anime.seen) seenContainer.appendChild(card);
    else if (anime.ongoing) ongoingContainer.appendChild(card);
    else toWatchContainer.appendChild(card);
  });
}

export function updateCounters() {
  const toWatchCount = animeStorage.getAll().filter(a => a.toWatch).length;
  const ongoingCount = animeStorage.getAll().filter(a => a.ongoing).length;
  const seenCount = animeStorage.getAll().filter(a => a.seen).length;

  document.getElementById('toWatchCount').textContent = toWatchCount;
  document.getElementById('ongoingCount').textContent = ongoingCount;
  document.getElementById('seenCount').textContent = seenCount;
}