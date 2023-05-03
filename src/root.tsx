// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  useLocation,
} from "solid-start";
import "./root.css";
import {
  faBandcamp,
  faGithub,
  faPatreon,
  faSoundcloud,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Root() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Conlangs", href: "/conlangs" },
    { label: "Music", href: "/music" },
    { label: "Art", href: "/art" },
    { label: "Open Source", href: "/open-source" },
    { label: "Games", href: "/games" },
    { label: "Books", href: "/books" },
    { label: "Blog", href: "https://blog.luemir.ml", external: true },
    { label: "About", href: "/about" },
  ];

  const socialLinks = [
    { icon: faGithub, href: "https://github.com/nora2605" },
    { icon: faTwitter, href: "https://twitter.com/nora26056" },
    { icon: faPatreon, href: "https://ko-fi.com/nora2605" },
    { icon: faSoundcloud, href: "https://soundcloud.com/nora2605" },
    { icon: faEnvelope, href: "mailto:nora.ja2605@gmail.com" },
    { icon: faBandcamp, href: "https://nijimilumir.bandcamp.com/" },
  ];
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          property="og:title"
          content={`Lümi Home - ${
            location.pathname === "/"
              ? "Home"
              : location.pathname.substring(1).toUpperCase()
          }`}
        />
        <Meta
          property="og:description"
          content={`literally me when ${
            location.pathname === "/"
              ? "Home"
              : location.pathname.substring(1).toUpperCase()
          }`}
        />
        <Meta property="og:image" content={`/favicon.ico`} />
        <Meta
          property="og:url"
          content={"https://luemir.ml" + location.pathname}
        />
        <Meta property="og:site_name" content="Lümi Home" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div class="flex flex-col min-h-screen bg-gray-900">
              <nav class="bg-black border-b border-gray-800">
                <div class="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div class="flex justify-between h-16">
                    <div class="flex-shrink-0 flex items-center">
                      <img
                        class="w-10 h-10 m-2"
                        src="favicon.ico"
                        elementtiming={""}
                        fetchpriority={"high"}
                      />
                      <A
                        class="max-6-xs text-3xl text-sky-300 font-thin uppercase my-16"
                        href="/"
                      >
                        Lümir's home
                      </A>
                    </div>
                    <div class="sm:-my-px ml-6 sm:flex space-x-3">
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
                                active(item.href)
                              } inline-flex transition items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-100`}
                              href={item.href}
                            >
                              {item.label}
                            </A>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </nav>
              <main class="flex-grow">
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </div>
              </main>
              <footer class="bg-black border-t border-gray-800">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                  <div class="text-gray-300 text-sm">
                    &copy; Nora J.F., {new Date().getFullYear()}
                  </div>
                  <div class="flex space-x-1">
                    {socialLinks.map((link) => (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          class="w-8 h-8 text-gray-400 hover:text-white transition fill-gray-400 hover:fill-white"
                          viewBox="0 0 700 500"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d={link.icon.icon.toString().match(/M.*/)
                              ?.toString()}
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </footer>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
