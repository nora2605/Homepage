// @refresh reload
import { createResource, Suspense } from "solid-js";
import {
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
import Header from "./components/Header";
import Footer from "./components/Footer";

export const apiroot = "https://api.luemir.xyz/api";

export default function Root() {
  const location = useLocation();
  return (
    <Html lang="en">
      <Head>
        <Title>Lumi Home</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div class="flex flex-col min-h-screen bg-gray-900">
              <Header />
              <main class="flex-grow">
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </div>
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
