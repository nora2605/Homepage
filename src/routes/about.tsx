import { A } from "solid-start";

export default function About() {
  return (
    <main class="px-4 py-8 bg-gray-900 text-white">
      <h1 class="text-4xl font-bold mb-4">About Me</h1>
      <p class="text-lg mb-8">
        Hi, I'm Nora, I'm a hobbyist composer/musician, artist, programmer, conlanger and whatever
        based where you are not. I love creating and sharing my work with the
        world because i desperately need people to listen to me and give me more ideas,
        and this website is like a good starting point. Here you'll find links
        to my various projects and interests, as well as a blog where I share my
        awesome instrument collection with some knowledge.
      </p>
      <A href="https://pronouns.page/@nora2605" target="_blank" class="rainbow">Check out my GODDAMN LIBERAL PRONOUNS</A>
      <h2 class="text-2xl font-bold mb-2">My Background</h2>
      <p class="text-lg mb-8">
        I've always had a passion for music, art, and language. I started playing
        piano at a young age, and have since expanded my repertoire to include a
        variety of other instruments. I also enjoy creating visual art, and have
        been drawing and painting for like 3 years as consequence of covid. My interest in
        conlangs (constructed languages, yk when you invent one) started when I was making my
        first OC and its environment, and yeah I made like 11 worlds more...
      </p>
      <h2 class="text-2xl font-bold mb-2">My Work</h2>
      <p class="text-lg mb-8">
        I'm always working on something new, whether it's a new piece of music, a
        new drawing or painting, or a new conlang. You can find As to my
        various projects on the homepage of this website. I'm also an active
        contributor to open source software projects, and you can find As to
        some of my work on the "Open Source" page.
      </p>
      <h2 class="text-2xl font-bold mb-2">Contact Me</h2>
      <ul class="list-disc list-inside mb-8">
        <li><A class="text-sky-300 transition hover:text-gray-600" href="mailto://nora.ja2605@gmail.com">Email: nora.ja2605@gmail.com</A></li>
        <li>Discord: Nora2605#3789 (feel free to add me!)</li>
      </ul>
      <p class="t-2">ChatGPT wrote this btw</p>
    </main>
  );
}