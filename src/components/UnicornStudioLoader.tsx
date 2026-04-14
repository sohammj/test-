"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      init?: () => Promise<unknown>;
      destroy?: () => void;
    };
  }
}

export default function UnicornStudioLoader() {
  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      try {
        await window.UnicornStudio?.init?.();
      } catch (e) {
        console.error("UnicornStudio init failed:", e);
      }
    };

    const existing = document.querySelector(
      'script[data-unicornstudio="true"]'
    ) as HTMLScriptElement | null;

    if (existing) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
    script.async = true;
    script.dataset.unicornstudio = "true";

    script.onload = () => {
      if (!cancelled) init();
    };

    (document.head || document.body).appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}