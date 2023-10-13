export default function OpenSource() {
  return (
    <main class="text-gray-100 px-4 mx-auto pt-24 justify-center self-center justify-items-center content-center">
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
      {/*Insert awesome cool SVG that shows coding*/}
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="80" height="80" rx="10" fill="#1A202C" />
        <path d="M20 20H80V80H20V20Z" stroke="#CBD5E0" stroke-width="2" />
        <path d="M20 20L80 80" stroke="#CBD5E0" stroke-width="2" />
        <path d="M20 80L80 20" stroke="#CBD5E0" stroke-width="2" />
      </svg>
    </main>
  );
}
