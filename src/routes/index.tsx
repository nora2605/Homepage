import { A } from "@solidjs/router";
import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <main class="text-[aliceblue] px-4 py-8">
      <h1 class="text-4xl font-bold mb-4">Hey! I'm Nora👋</h1>
      <div class="flex flex-col md:flex-row">
        <div>
          <p class="text-lg mb-8">
            Hi I'm Nora! I'm known online as nora2605, Lümir/Luemir Nijimi or Nora Judith.
            I'm a hobbyist everything-doer, jack of all trades, consumer and creator and a self-proclaimed goddess and seraph.
            This will eventually be a homepage for all my projects, intellectual property, and
            interests. Use the navigation menu to explore a little.
            <br/>
            Keep in mind, this website is still under construction, so some pages may not be available yet.
          </p>
          <p class="mx-4 my-8 font-bold text-center flex flex-col">
            You're visitor number<br/>
            <img class="m-auto" src="https://moe-counter-api.glitch.me/get/@luemir.xyz" alt="luemir.xyz" elementtiming={""} fetchpriority={"high"} />
          </p>
          <h2 class="text-2xl font-bold mb-2">What I do</h2>
          <p class="text-lg mb-8">
            I do a lot of things, but most of them are creative. I make music, art, games, and conlangs.
            I also write stories and code; including working on my own programming language.
            Chances are, if you have a hobby, you can convince me to do it as well.
          </p>
          <p class="text-lg mb-8">
            If I'm not very online right now, I'm probably touching grass by doing archery, playing instruments (collection on my blog)
            or working/studying for my computer science degree.
          </p>
          <h2 class="text-2xl font-bold mb-2">My Projects (Navigation)</h2>
          <ul class="list-disc list-inside mb-8 ml-4">
            <li>
              <A class="text-sky-300 hover:text-gray-600" href="/conlangs">
                My Conlangs
              </A>
            </li>
            <li>
              <A class="text-sky-300 hover:text-gray-600" href="/music">
                My Music
              </A>
            </li>
            <li>
              <A class="text-sky-300 hover:text-gray-600" href="/art">My Art</A>
            </li>
            <li>
              <A class="text-sky-300 hover:text-gray-600" href="/open-source">
                My Open Source Projects
              </A>
            </li>
            <li>
              <A class="text-sky-300 hover:text-gray-600" href="/books">
                My Books
              </A>
            </li>
          </ul>
          <h2 class="text-2xl font-bold mb-2">About Me</h2>
          <p class="text-lg mb-8">
            See my awesome{" "}
            <A class="text-sky-300 hover:text-gray-600" href="/about">About</A>
            {" "}
            page!
          </p>
        </div>
        <div class="object-contain flex flex-col md:w-full">
          <img
            class="object-contain rounded-lg shadow-lg w-full h-auto md:w-full md:h-auto"
            src="/ntc.png"
            elementtiming={""}
            fetchpriority={"high"}
            alt="Drawing of Nora"
          >
            Drawing of Nora
          </img>
          <span class="text-sm text-gray-700">Drawing of me</span>
        </div>
      </div>
    </main>
  );
};

export default Home;
