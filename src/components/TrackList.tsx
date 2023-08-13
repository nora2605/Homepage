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
        const compareValueA = a[sortKey() as keyof Track]?.toLocaleString() ?? '';
        const compareValueB = b[sortKey() as keyof Track]?.toLocaleString() ?? '';
        if (sortDirection() === 'asc') {
          return compareValueA.localeCompare(compareValueB);
        } else {
          return compareValueB.localeCompare(compareValueA);
        }
      })
    });
  onCleanup(() => {
    localStorage.setItem('displayMode', displayMode());
  });

  createEffect(() => {
    localStorage.setItem('displayMode', displayMode());
    console.log(tracks());
    console.log(sortedTracks());
  });

  return (
    <div class="min-h-screen bg-gray-900 text-white p-8">
      <div class="mb-4">
        <input
          type="text"
          class="px-2 py-1 border rounded bg-gray-800 text-white"
          placeholder="Search by title"
          value={searchQuery()}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
        <select
          class="px-2 py-1 ml-2 border rounded bg-gray-800 text-white"
          value={sortKey()}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="album">Album</option>
          <option value="genre">Genre</option>
          <option value="year">Year</option>
        </select>
        <button
          class="px-2 py-1 ml-2 border rounded bg-gray-800 text-white"
          onClick={() => setSortDirection(sortDirection() === 'asc' ? 'desc' : 'asc')}
        >
          {sortDirection() === 'asc' ? '↑' : '↓'}
        </button>
        <button
          class="px-2 py-1 ml-2 border rounded bg-gray-800 text-white"
          onClick={() => setDisplayMode(saveMode(displayMode() === 'widget' ? 'list' : 'widget'))}
        >
          Toggle Display Mode: {displayMode() === 'widget' ? 'Widget' : 'List'}
        </button>
      </div>
      <ul>
        <For each={sortedTracks()}>{(track) => (
            <li class="mb-4">
              <A href={`/music/${track.id}`}>
                <TrackDetail track={track} displayMode={displayMode() as 'list'|'widget'} />
              </A>
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