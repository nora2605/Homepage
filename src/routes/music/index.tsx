import {
  createResource,
  createSignal,
  For,
  onMount,
  Suspense,
} from "solid-js";
import TrackDetail from "~/components/TrackDetail";
import { apiroot } from "~/app";

export interface Track {
  id: string;
  title: string;
  album?: string;
  genre?: string;
  duration?: number;
  year?: number;
  opusNumber?: string;
  image?: string;
  score?: string;
  audio?: string;
  mscz?: string;
  midi?: string;
  description?: string;
  original: boolean;
}

export default function Music() {
  const [tracks] = createResource(async () => {
    const res = await fetch(apiroot + "/music/list");
    return (await res.json()) as Track[];
  });
  const [searchQuery, setSearchQuery] = createSignal("");
  const [sortKey, setSortKey] = createSignal("title"); // Default sorting by title
  const [sortDirection, setSortDirection] = createSignal("asc"); // Default sorting in ascending order
  const [displayMode, setDisplayMode] = createSignal("list"); // Retrieve from Local Storage

  onMount(() => {
    setDisplayMode(localStorage?.getItem("displayMode") || "list");
  });
  const sortedTracks = () => {
    return tracks()?.filter((track) =>
      track.title.toLowerCase().includes(searchQuery().toLowerCase())
    )
      .sort((a, b) => {
        if (sortKey() === "year") {
          if (a.year === undefined || b.year === undefined) return 0;
          return (sortDirection() === "asc"
            ? Math.sign(a.year - b.year)
            : Math.sign(b.year - a.year));
        } else {
          const compareValueA = a[sortKey() as keyof Track]?.toString() ?? "";
          const compareValueB = b[sortKey() as keyof Track]?.toString() ?? "";
          if (sortDirection() === "asc") {
            return compareValueA.localeCompare(compareValueB);
          } else {
            return compareValueB.localeCompare(compareValueA);
          }
        }
      });
  };
  return (
    <main class="text-gray-100 px-4 mx-auto pt-24 justify-center self-center justify-items-center content-center">
      <div class="text-xl">
        This page contains a (non-exhaustive) list of some pieces of music I
        made. To stream my music, go to
        <a
          class="text-teal-200 hover:underline pl-2"
          href="https://nijimilumir.bandcamp.com/"
        >
          My Bandcamp
        </a>,
        <a
          class="text-teal-200 hover:underline pl-2"
          href="https://soundcloud.com/nora2605"
        >
          My Soundcloud
        </a>{" "}
        or
        <a
          class="text-teal-200 hover:underline pl-2"
          href="https://youtube.com/@nora26056"
        >
          My YouTube
        </a>. If I made something, it's SOMEWHERE, but you might have to search
        or ask me directly{" :)"}
      </div>
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
            onClick={() =>
              setSortDirection(sortDirection() === "asc" ? "desc" : "asc")}
          >
            {sortDirection() === "asc" ? "↑" : "↓"}
          </button>
          <button
            class="flex px-2 py-1 ml-2 border rounded bg-gray-800 text-white"
            onClick={() =>
              setDisplayMode(
                displayMode() === "widget" ? "list" : "widget",
              )}
          >
            Toggle Display Mode:{" "}
            {displayMode() === "widget" ? "Widget" : "List"}
          </button>
        </div>
        <Suspense fallback={
          <div class="text-xl">Music Loading...</div>
        }>
          <ul>
            <For each={sortedTracks()}>
              {(track) => (
                <li class="mb-4">
                  <TrackDetail
                    track={track}
                    displayMode={displayMode() as "list" | "widget"}
                  />
                </li>
              )}
            </For>
          </ul>
        </Suspense>
      </div>
    </main>
  );
}
