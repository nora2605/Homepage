import { useNavigate } from "solid-start";
import TrackList from "~/components/TrackList";

export default function Music() {
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
      <TrackList />
    </main>
  );
}
