import { A, useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function Header() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Conlangs", href: "/conlangs" },
    { label: "Music", href: "/music" },
    { label: "Art", href: "/art" },
    { label: "Open Source", href: "/open-source" },
    { label: "Books", href: "/books" },
    { label: "Games", href: "/games" },
    { label: "Blog", href: "https://blog.luemir.xyz", external: true },
    { label: "About", href: "/about" },
  ];
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  const [mobileNavOpen, setMobileNavOpen] = createSignal(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen());
  return (
    <>
      <nav class="bg-black border-b border-gray-800">
        <div class="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="w-10 h-10 m-2"
                src="/favicon.ico"
                elementtiming={""}
                fetchpriority={"high"}
                alt="icon"
              />
              <A
                class="max-6-xs text-3xl text-sky-300 font-thin uppercase my-16"
                href="/"
              >
                Lümir's home
              </A>
            </div>
            <div class="hidden ml-5 md:flex space-x-3">
              {menuItems.map((item) =>
                item.external
                  ? (
                    <a
                      class="inline-flex items-center transition px-1 pt-1 border-b-2 text-sm font-medium text-red-300 border-transparent hover:border-gray-500"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  )
                  : (
                    <A
                      class={`${
                        active(
                          item.href,
                        )
                      } inline-flex transition items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-100`}
                      href={item.href}
                    >
                      {item.label}
                    </A>
                  )
              )}
            </div>
            <div class="md:hidden ml-5 flex space-x-3">
              <a
                class="inline-flex items-center transition px-1 pt-1 border-b-2 text-sm font-medium text-gray-100 border-transparent hover:border-sky-300"
                onclick={toggleMobileNav}
              >
                Navigation
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        class={`${
          mobileNavOpen() ? "opacity-100" : "opacity-0 hidden"
        } fixed flex-box z-10 transition top-0 inset-x-0 p-2 transform origin-top-right md:hidden`}
      >
        <div class="rounded-lg shadow-md bg-black ring-1 ring-white ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="/favicon.ico"
                alt="Logo"
                elementtiming={""}
                fetchpriority={"high"}
              />
            </div>
            <A class="text-3xl text-sky-300 font-thin uppercase" href="/">
              Lümir's home
            </A>
            <div class="-mr-2">
              <button
                type="button"
                onClick={toggleMobileNav}
                class="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              >
                <span class="sr-only">Close main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) =>
              item.external
                ? (
                  <a
                    class="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-500"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                )
                : (
                  <A
                    class={`${
                      active(
                        item.href,
                      )
                    } border-b-2 block px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-500`}
                    href={item.href}
                  >
                    {item.label}
                  </A>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
