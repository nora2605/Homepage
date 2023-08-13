import { useNavigate } from "solid-start";
import TrackList from "~/components/TrackList";

export default function Music() {
  return (
    <main class="text-gray-100 px-4 mx-auto pt-24 justify-center self-center justify-items-center content-center">
      <TrackList />
    </main>
  );
}
