export const GA_MEASUREMENT_ID = "G-0X6MFNJ0G2";

type Gtag = (command: "js" | "config" | "event", ...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/**
 * The GA4 snippet in index.html disables the automatic page view so a
 * client-side route change is counted exactly once, by this helper.
 */
export const trackPageView = (pathname: string, language: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: pathname,
    page_location: `${window.location.origin}${pathname}${window.location.search}`,
    page_title: document.title,
    language,
  });
};
