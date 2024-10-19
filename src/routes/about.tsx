import { A } from "@solidjs/router";
import "./about.css";

export default function About() {
  return (
    <main class="text-gray-100 px-4 mx-auto pt-24 justify-center self-center justify-items-center content-center">
      <h1 class="spin text-4xl font-bold mb-4 text-white">About Me</h1>
      <p class="text-lg mb-8 text-gray-400">
        Hi, I'm Nora, I'm a hobbyist composer/musician, artist, programmer,
        conlanger and whatever based where you are not. I love creating and
        sharing my work with the world because i desperately need people to
        listen to me and give me more ideas, and this website is like a good
        starting point. Here you'll find links to my various projects and
        interests, as well as a blog where I share my awesome instrument
        collection with some knowledge.
      </p>
      <A
        href="https://pronouns.page/@nora2605"
        target="_blank"
        class="rainbow"
      >
        Check out my GODDAMN LIBERAL PRONOUNS
      </A>
      <h2 class="text-2xl font-bold mb-2 spin">some banger info</h2>
      <p class="text-lg mb-8 text-gray-400">
        I've always had a passion for music, art, and language. I started
        playing piano at a young age, and have since expanded my repertoire to
        include a variety of other instruments. I also enjoy creating visual
        art, and have been drawing and painting for like 3 years as consequence
        of covid. My interest in conlangs (constructed languages, yk when you
        invent one) started when I was making my first OC and its environment,
        and yeah I made like 11 worlds more...
      </p>
      <h2 class="text-2xl font-bold mb-2 spin">My banger Work</h2>
      <p class="text-lg mb-8 text-gray-400">
        I'm always working on something ig. Maybe it's new maybe it's not who
        knows. But what I know is that I procrastinate a lot. If you are
        interested in a thing I'll probably have enough motivation boost from
        the fact that there is someone existing who's remotely interested in
        what I do that I finish it in 2 weeks but... until then you gotta wait
        or help me yourself. mwew
      </p>
      <h2 class="text-2xl font-bold mb-2 spin">you should Contact Me now!</h2>
      <ul class="list-disc list-inside mb-8">
        <li>
          <A
            class="text-sky-300 transition hover:text-gray-600"
            href="mailto://nora.ja2605@gmail.com"
          >
            Email: nora.ja2605@gmail.com
          </A>
        </li>
        <li>Discord: @nora2605 (feel free to add me!)</li>
      </ul>
      <p class="t-2">ChatGPT wrote this btw</p>
    </main>
  );
}
