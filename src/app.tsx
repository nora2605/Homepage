import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Component, Suspense } from "solid-js";
import { Meta, MetaProvider, Title } from "@solidjs/meta";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const apiroot = "https://api.luemir.xyz/api";

const HHead: Component = () => {
  const location = useLocation();
  return (<MetaProvider>
    <Title>Lumi Home</Title>
    <Meta charset="utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta name="description" content="Nora2605 aka Luemir is a Creative/Content Creator and Developer from Germany. This is her personal website." />
    <Meta name="author" content="Nora2605" />
    <Meta name="keywords" content="Nora2605, Luemir, Lümir, Nijimi, Nora Judith, Creative, Content Creator, Developer, Germany" />
    <Meta
      property="og:title"
      content={`Lümi Home - ${
        location.pathname === "/"
          ? "Home"
          : location.pathname.split("/").slice(-1)[0]
      }`}
    />
    <Meta
      property="og:description"
      content={`literally me when ${
        location.pathname === "/"
          ? "Home"
          : location.pathname.split("/").slice(-1)[0]
      }`}
    />
    <Meta
      property="theme-color"
      content={`#11b2ff`}
    />
    <Meta property="og:image" content={`/favicon.png`} />
    <Meta
      property="og:url"
      content={"https://luemir.xyz" + location.pathname}
    />
    <Meta property="og:site_name" content="Lümi Home" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/favicon.png" />

  </MetaProvider>);
};

export default function Root() {
  return (
    <Router root={props => (<>
      <HHead />
      <Suspense>
        <div class="flex flex-col min-h-screen bg-gray-900">
          <Header />
          <main class="flex-grow">
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {props.children}
            </div>
          </main>
          <Footer />
        </div>
      </Suspense>
    </>)}>
      <FileRoutes />
    </Router>
  );
}
