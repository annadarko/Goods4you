import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useSmoothScroll(offset = 0) {
  const location = useLocation();

  const scrollToHash = (hashOrPath: string) => {
    const hash = hashOrPath.startsWith("/#")
      ? hashOrPath.slice(1)
      : hashOrPath;
    const id = decodeURIComponent(hash.replace("#", ""));
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"], a[href^="/#"]'
      );
      if (!a) return;

      const href = a.getAttribute("href")!;
      e.preventDefault();               
      history.pushState({}, "", href);  
      scrollToHash(href);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [offset]);

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => scrollToHash(location.hash));
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash, offset]);
}