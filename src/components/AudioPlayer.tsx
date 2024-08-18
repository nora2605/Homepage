import { Ref, createSignal } from 'solid-js';

function AudioPlayer({ src, ...props }: {src: string, class?: string }) {
  const [isPlaying, setIsPlaying] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  let audioRef: HTMLAudioElement = {} as HTMLAudioElement;

  const togglePlay = () => {
    const audioElement = audioRef;
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
    setIsPlaying(!audioElement.paused);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.currentTime);
    setDuration(audioRef.duration);
  };

  setInterval(handleTimeUpdate, 20);

  return (
    <div {...props}>
      <style>{`input[type=range] {
  width: 100%;
  margin: 0.7px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  background: #484d4d;
  border: 0;
  width: 100%;
  height: 25.6px;
  cursor: pointer;
}
input[type=range]::-webkit-slider-thumb {
  margin-top: -0.7px;
  width: 18px;
  height: 27px;
  background: rgba(255, 67, 95, 0.93);
  border: 0;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #545a5a;
}
input[type=range]::-moz-range-track {
  background: #484d4d;
  border: 0;
  width: 100%;
  height: 25.6px;
  cursor: pointer;
}
input[type=range]::-moz-range-thumb {
  width: 18px;
  height: 27px;
  background: rgba(255, 67, 95, 0.93);
  border: 0;
  cursor: pointer;
}
input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 0.7px 0;
  color: transparent;
  width: 100%;
  height: 25.6px;
  cursor: pointer;
}
input[type=range]::-ms-fill-lower {
  background: #3c4040;
  border: 0;
}
input[type=range]::-ms-fill-upper {
  background: #484d4d;
  border: 0;
}
input[type=range]::-ms-thumb {
  width: 18px;
  height: 27px;
  background: rgba(255, 67, 95, 0.93);
  border: 0;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range]:focus::-ms-fill-lower {
  background: #484d4d;
}
input[type=range]:focus::-ms-fill-upper {
  background: #545a5a;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}
`}
      </style>
      <div class="flex items-center justify-between bg-gray-900 p-4 rounded-lg shadow-md transition transform">
        <button
          class={`transition transform outline-none px-3 py-1 rounded-md active:scale-80 ${isPlaying() ? 'bg-gray-700 scale-90' : 'bg-gray-600'} text-white hover:scale-105`}
          onClick={togglePlay}
        >
          {isPlaying() ? 'Pause' : 'Play'}
        </button>
        <div class="text-gray-400 flex items-center space-x-2">
          <span>Volume:</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            class="ml-2 h-1 w-16"
            value="1"
            onInput={(event) => (audioRef.volume = Number(event.target.value))}
          />
        </div>
        <div class="text-gray-400">
          {isNaN(duration()) ? "0:00 / ??" : `${
            Math.floor(currentTime() / 60).toFixed(0).padStart(2, "0")
            }:${
            (currentTime() % 60).toFixed(2).padStart(5, "0")
            } / ${
            Math.floor(duration() / 60).toFixed(0).padStart(2, "0")
            }:${
            (duration() % 60).toFixed(2).padStart(5, "0")
            }`}
        </div>
      </div>
      <input
        type="range"
        min="0"
        max={duration()}
        step="0.2"
        value={currentTime()}
        class="w-full h-2 mt-2"
        onInput={(event) => {
          audioRef.currentTime = Number(event.target.value);
          setCurrentTime(Number(event.target.value));
        }}
      />
      <audio ref={audioRef} src={src} preload="none">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
