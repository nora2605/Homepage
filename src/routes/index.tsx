import { A } from "solid-start";
import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <main class="text-[aliceblue] px-4 py-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p class="text-lg mb-8">
        This is a homepage for all my projects, intellectual property, and
        interests. Use the navigation menu to explore the different sections of
        the website.
      </p>
      <h2 class="text-2xl font-bold mb-2">My Projects (Navigation)</h2>
      <ul class="list-disc list-inside mb-8 ml-4">
        <li>
          <A class="text-sky-300 hover:text-gray-600" href="/conlangs">
            My Conlangs
          </A>
        </li>
        <li>
          <A class="text-sky-300 hover:text-gray-600" href="/music">My Music</A>
        </li>
        <li>
          <A class="text-sky-300 hover:text-gray-600" href="/art">My Art</A>
        </li>
        <li>
          <A class="text-sky-300 hover:text-gray-600" href="/opensource">
            My Open Source Projects
          </A>
        </li>
        <li>
          <A class="text-sky-300 hover:text-gray-600" href="/games">My Games</A>
        </li>
        <li>
          <A class="text-sky-300 hover:text-gray-600" href="/books">My Books</A>
        </li>
      </ul>
      <h2 class="text-2xl font-bold mb-2">About Me</h2>
      <p class="text-lg mb-8">
        See my awesome{" "}
        <A class="text-sky-300 hover:text-gray-600" href="/about">About</A>{" "}
        page!
      </p>
    </main>
  );
};

export default Home;
