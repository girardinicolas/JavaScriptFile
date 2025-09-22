import { animeStorage } from './storage.js';
import { removeAnime, updateStatus } from './main.js';
import { currentFilter, currentSortOrder } from './main.js';

export function mostraSoloContainer(filter: 'all' | 'toWatch' | 'ongoing' | 'seen'): void {
  const containers: Record<'toWatch' | 'ongoing' | 'seen', HTMLElement | null> = {
    toWatch: document.getElementById('toWatchContainer'),
    ongoing: document.getElementById('ongoingContainer'),
    seen: document.getElementById('seenContainer'),
  };

  if (filter === 'all' || !filter) {
    Object.values(containers).forEach(c => {
      if (c) c.style.display = 'grid';
    });
  } else {
    Object.keys(containers).forEach(key => {
      const c = containers[key as 'toWatch' | 'ongoing' | 'seen'];
      if (c) c.style.display = (key === filter) ? 'grid' : 'none';
    });
  }
}

export function renderList(): void {
  const toWatchContainer = document.getElementById('toWatchContainer');
  const ongoingContainer = document.getElementById('ongoingContainer');
  const seenContainer = document.getElementById('seenContainer');

  if (!toWatchContainer || !ongoingContainer || !seenContainer) return;

  toWatchContainer.innerHTML = '';
  ongoingContainer.innerHTML = '';
  seenContainer.innerHTML = '';

  let list = animeStorage.getAll();

  if (currentFilter === 'toWatch') {
    list = list.filter(a => a.toWatch);
  } else if (currentFilter === 'ongoing') {
    list = list.filter(a => a.ongoing);
  } else if (currentFilter === 'seen') {
    list = list.filter(a => a.seen);
  }

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
    desc.style.userSelect = 'text';

    desc.addEventListener('click', () => {
      const expanded = desc.classList.toggle('expanded');
      if (expanded) card.classList.add('expanded');
      else card.classList.remove('expanded');
    });
    card.appendChild(desc);

    const actions = document.createElement('div');
    actions.className = 'actions-container';

    ['toWatch', 'ongoing', 'seen'].forEach(status => {
      // Fix: Use a strongly-typed key instead of string index to avoid TS error
      type StatusKey = 'toWatch' | 'ongoing' | 'seen';
      const statusKey = status as StatusKey;
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = anime[statusKey];
      cb.id = `${statusKey}${index}`;
      cb.addEventListener('change', e => updateStatus(index, statusKey, (e.target as HTMLInputElement).checked));

      const label = document.createElement('label');
      label.htmlFor = cb.id;
      label.textContent =
        status === 'toWatch' ? 'Da vedere' : status === 'ongoing' ? 'In corso' : 'Visto';

      actions.appendChild(cb);
      actions.appendChild(label);
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Rimuovi';
    removeBtn.onclick = () => removeAnime(index);
    actions.appendChild(removeBtn);

    card.appendChild(actions);

    if (anime.seen) seenContainer.appendChild(card);
    else if (anime.ongoing) ongoingContainer.appendChild(card);
    else toWatchContainer.appendChild(card);
  });
}

export function updateCounters(): void {
  const allAnime = animeStorage.getAll();
  const toWatchCount = allAnime.filter(a => a.toWatch).length;
  const ongoingCount = allAnime.filter(a => a.ongoing).length;
  const seenCount = allAnime.filter(a => a.seen).length;

  const toWatchCountElem = document.getElementById('toWatchCount');
  const ongoingCountElem = document.getElementById('ongoingCount');
  const seenCountElem = document.getElementById('seenCount');

  if (toWatchCountElem) toWatchCountElem.textContent = toWatchCount.toString();
  if (ongoingCountElem) ongoingCountElem.textContent = ongoingCount.toString();
  if (seenCountElem) seenCountElem.textContent = seenCount.toString();
}
