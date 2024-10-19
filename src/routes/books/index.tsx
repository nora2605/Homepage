import { createResource, For, Suspense } from "solid-js";
import BookDetail from "~/components/BookDetail";
import { apiroot } from "~/app";

export interface Book {
  id: string;
  title: string;
  genre?: string;
  year?: number;
  description?: string;
}

export default function Books() {
  const [books] = createResource(async () => {
    const res = await fetch(apiroot + "/lit/list");
    return (await res.json()) as Book[];
  });
  return (
    <main class="text-gray-100 px-4 mx-auto pt-24 justify-center self-center justify-items-center content-center">
      <h1 class="text-4xl font-bold mb-4 text-white">My Stuff i write</h1>
      <ul>
        <Suspense>
          <For each={books()}>
            {(book) => (
              <li class="mb-4">
                <BookDetail book={book} />
              </li>
            )}
          </For>
        </Suspense>
      </ul>
    </main>
  );
}
