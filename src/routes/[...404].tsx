import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-300 p-4">
      <h1 class="max-6-xs text-6xl text-sky-300 font-thin uppercase my-16">
        Not Found
      </h1>
      <p class="mt-8">
        Go back Home, lost one
      </p>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>
      </p>
    </main>
  );
}
