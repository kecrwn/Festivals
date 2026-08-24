/** Route metadata mirrors the quiet, factual KA Festivals voice and keeps client-side navigation indexable and share-ready. */
import { useEffect } from "react";

const siteOrigin = "https://kafestivals.vercel.app";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const fullTitle = `${title} | KA Festivals`;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    const canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = `${siteOrigin}${window.location.pathname}`;
    setMeta("property", "og:url", `${siteOrigin}${window.location.pathname}`);
  }, [description, title]);
}
