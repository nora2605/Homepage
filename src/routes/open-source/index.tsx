import Tesseract from "~/components/Tesseract";

export default function OpenSource() {
  return (
    <main class="text-gray-100 px-4 mx-auto pt-24 justify-center self-center justify-items-center content-center overflow-hidden">
      <h1 class="text-4xl font-bold mb-4 text-white">
        My Open Source Projects
      </h1>
      <p class="text-lg mb-8 text-gray-400">
        I have a few open source projects on{" "}
        <a class="text-sky-300" href="https://github.com/nora2605">
          My GitHub.
        </a>
      </p>
      <h2 class="text-2xl font-bold mb-2">Highlights</h2>
      <ul class="list-disc list-inside mb-8">
        <li>
          <a
            class="text-sky-300 transition text-xl hover:text-gray-600"
            href="https://github.com/nora2605/jane"
          >
            JANE (My awesome ass language)
          </a>
        </li>
        <li>
          <a
            class="text-sky-300 transition text-xl hover:text-gray-600"
            href="https://github.com/nora2605/johnjs"
          >
            JOHN for JS (Awesome ass object notation language)
          </a>
        </li>
      </ul>
      <h2 class="text-2xl font-bold mb-2">Awesome ass rotating CSS Tesseract but every face is a rotating CSS Cube:</h2>
      <div class="overflow-hidden flex flex-row lg:min-w-[1000px] items-center justify-center lg:min-h-[1000px] m-auto">
        <Tesseract />
      </div>
    </main>
  );
}
