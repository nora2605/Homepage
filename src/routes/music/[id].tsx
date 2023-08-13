import { Show, createMemo, createResource } from "solid-js";
import { useParams } from "solid-start";
import { Track } from "~/components/TrackList";
import TrackPage from "~/components/TrackPage";
import { apiroot } from "~/root";

export default function Music() {
  const params = useParams();
  const id = params.id;

  const [trackInfo] = createResource(() => fetch(apiroot + '/music/' + id).then(x => x.json()));
  const track = createMemo(() => {
    return (trackInfo()) as Track;
  });

  return (
    <main class="text-gray-100 px-4 mx-auto pt-24">
      <Show when={trackInfo.state == 'ready'} fallback={(<>Loading...</>)}>
        <TrackPage track={track()} />
      </Show>
    </main>
  );
}
