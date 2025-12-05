import songs from "./songs.json";

function renderNumberedList(listId, items) {
  const container = document.getElementById(listId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (song, i) => `
        <li class="song-list-numbered-item">
          <span class="song-index">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <p class="song-title">${song.title}</p>
            <p class="song-note">${song.note}</p>
          </div>
        </li>
      `,
    )
    .join("");
}

function renderSimpleList(listId, items) {
  const container = document.getElementById(listId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (song) => `
        <li class="song-list-simple-item">
          <p class="song-title">${song.title}</p>
          <p class="song-note">${song.note}</p>
        </li>
      `,
    )
    .join("");
}

renderNumberedList("currentRotation", songs.currentRotation);
renderNumberedList("timelessFavorites", songs.timelessFavorites);
