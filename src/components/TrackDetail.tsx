import { createResource, Show } from "solid-js";
import { Track } from "./TrackList";
import { apiroot } from "../routes/music/index";

export default function TrackDetail(props: { track: Track; displayMode: "list" | "widget" }) {
  if (!props.track) return null;
  // fetch full track info
  const [track] = createResource(() => fetch(`${apiroot}/music/${props.track.id}`).then(x => x.json()))
  if (!track()) return null;

  const isMediaAvailable = (mediaType: keyof Track) => !!track()[mediaType];

  return (
    <>
      <Show when={props.displayMode === "widget"}>
        <div class="flex p-4 bg-gray-800 text-white transition hover:bg-gray-700 cursor-pointer border border-gray-600 shadow-md transform hover:scale-105">
          <div class="w-1/4">
            <img
              src={isMediaAvailable('image') ? `${apiroot}/music/${props.track.id}/preview` : '/musicplc.png'}
              alt={track().name}
              class="w-full h-auto rounded"
              elementtiming={""}
              fetchpriority={"high"}
            />
          </div>
          <div class="w-3/4 pl-4">
            <div class="flex flex-col justify-between h-full">
              <div>
                <h2 class="text-xl font-semibold mb-2">{track().name}</h2>
                <p class="text-gray-300 mb-1">{track().album}</p>
                <p class="text-gray-300 mb-1">Year: {track().year}</p>
                <p class="text-gray-300">Genre: {track().genre}</p>
                <p class="text-gray-300">Opus Number: {track().opusNumber}</p>
                {/* Add other details */}
              </div>
              <div>
                <p class="text-gray-400 mt-4">{track().description}</p>
              </div>
              <div class="flex mt-4">
                {isMediaAvailable('audio') && (
                  <a href={`${apiroot}/music/${props.track.id}/audio`} class="mr-2">
                    <button class="px-4 py-2 border rounded bg-gray-700 text-white">Download Audio</button>
                  </a>
                )}
                {isMediaAvailable('score') && (
                  <a href={`${apiroot}/music/${props.track.id}/score`} class="mr-2">
                    <button class="px-4 py-2 border rounded bg-gray-700 text-white">Download Score</button>
                  </a>
                )}
                {isMediaAvailable('midi') && (
                  <a href={`${apiroot}/music/${props.track.id}/midi`}>
                    <button class="px-4 py-2 border rounded bg-gray-700 text-white">Download MIDI</button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Show>
      <Show when={props.displayMode === "list"}>
        <div class="p-4 border-b border-gray-600 transition hover:bg-gray-700 cursor-pointer border border-gray-600 shadow-md transform hover:scale-105">
          <h2 class="text-xl font-semibold mb-2">{track().name}</h2>
          <p class="text-gray-400 mb-1">Year: {track().year}</p>
          <p class="text-gray-400">Genre: {track().genre}</p>
          <p class="text-gray-400">Opus Number: {track().opusNumber}</p>
          {/* Add other details */}
        </div>
      </Show>
    </>
  );
}
