import { createResource } from "solid-js";
import TrackList from "~/components/TrackList";

export const apiroot = 'https://api.luemir.xyz';

export default function About() {
  const [tracks] = createResource(() => fetch(apiroot + '/music/list').then(x => x.json()));
  
  return (
    <main class="text-gray-100 px-4 mx-auto pt-24 justify-center self-center justify-items-center content-center">
      <TrackList tracks={tracks() ?? []}/>
    </main>
  );
}
