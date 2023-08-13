import { For, Show, createEffect, createMemo, createResource, createSignal, onCleanup, onMount } from 'solid-js';
import { A } from 'solid-start';
import TrackDetail from './TrackDetail';
import { apiroot } from '~/root';

export default function TrackList() {
    const [tracks] = createResource(() => fetch(apiroot + '/music/list').then(x => x.json()));

    const [searchQuery, setSearchQuery] = createSignal('');
    const [sortKey, setSortKey] = createSignal('title'); // Default sorting by title
    const [sortDirection, setSortDirection] = createSignal('asc'); // Default sorting in ascending order
    const [displayMode, setDisplayMode] = createSignal('list'); // Retrieve from Local Storage

    onMount(() => {
      setDisplayMode(localStorage.getItem('displayMode') || 'list');
    });

    const saveMode = (mode: 'list'|'widget') => {
      localStorage.setItem('displayMode', mode);
      return mode;
    };

    const sortedTracks = createMemo(() => {
      return ((tracks() ?? []) as Track[])
      .filter((track) =>
        track.title.toLowerCase().includes(searchQuery().toLowerCase())
      )
      .sort((a, b) => {
        if (sortKey() === 'year') {
          if (a.year === undefined || b.year === undefined) return 0;
          return (sortDirection() === 'asc' ? Math.sign(a.year - b.year) : Math.sign(b.year - a.year));
        } else {
        const compareValueA = a[sortKey() as keyof Track]?.toString() ?? '';
        const compareValueB = b[sortKey() as keyof Track]?.toString() ?? '';
        if (sortDirection() === 'asc') {
          return compareValueA.localeCompare(compareValueB);
        } else {
          return compareValueB.localeCompare(compareValueA);
        }
      }
      })
    });
  onCleanup(() => {
    localStorage.setItem('displayMode', displayMode());
  });

  createEffect(() => {
    localStorage.setItem('displayMode', displayMode());
  });

  return (
    <div class="min-h-screen bg-gray-900 text-white p-8">
      <div class="mb-4 flex justify-between">
        <input
          type="text"
          class="flex-grow px-2 py-1 border rounded bg-gray-800 text-white"
          placeholder="Search by title"
          value={searchQuery()}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
        <select
          class="flex px-2 py-1 ml-2 border rounded bg-gray-800 text-white"
          value={sortKey()}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="album">Album</option>
          <option value="genre">Genre</option>
          <option value="year">Year</option>
        </select>
        <button
          class="flex px-2 py-1 ml-2 border rounded bg-gray-800 text-white"
          onClick={() => setSortDirection(sortDirection() === 'asc' ? 'desc' : 'asc')}
        >
          {sortDirection() === 'asc' ? '↑' : '↓'}
        </button>
        <button
          class="flex px-2 py-1 ml-2 border rounded bg-gray-800 text-white"
          onClick={() => setDisplayMode(saveMode(displayMode() === 'widget' ? 'list' : 'widget'))}
        >
          Toggle Display Mode: {displayMode() === 'widget' ? 'Widget' : 'List'}
        </button>
      </div>
      <ul>
        <For each={sortedTracks()}>{(track) => (
            <li class="mb-4">
              <TrackDetail track={track} displayMode={displayMode() as 'list'|'widget'} />
            </li>
        )}
        </For>
      </ul>
    </div>
  );
}

export interface Track {
    id: string,
    title: string,
    album?: string,
    genre?: string,
    duration?: number,
    year?: number,
    opusNumber?: string,
    image?: string,
    score?: string,
    audio?: string,
    mscz?: string,
    midi?: string,
    description?: string,
    original: boolean
}