import {
  faBandcamp,
  faGithub,
  faPatreon,
  faSoundcloud,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { A } from "@solidjs/router";

export default function Footer() {
  const socialLinks = [
    { icon: faGithub, href: "https://github.com/nora2605" },
    { icon: faTwitter, href: "https://twitter.com/nora26056" },
    { icon: faPatreon, href: "https://ko-fi.com/nora2605" },
    { icon: faSoundcloud, href: "https://soundcloud.com/nora2605" },
    { icon: faEnvelope, href: "mailto:nora.ja2605@gmail.com" },
    { icon: faBandcamp, href: "https://nijimilumir.bandcamp.com/" },
  ];
  return (
    <footer class="bg-black border-t border-gray-800">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div class="text-gray-300 text-sm">
          &copy; Nora J.F., {new Date().getFullYear()}
        </div>
        <A href="/impressum" class="text-gray-300 text-sm">
          All works are licensed under CC-BY 4.0 unless otherwise stated.
        </A>
        <div class="flex space-x-1">
          {socialLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <svg
                class="w-8 h-8 text-gray-400 hover:text-white transition fill-gray-400 hover:fill-white"
                viewBox="0 0 700 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={link.icon.icon.toString().match(/M.*/)?.toString()} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
