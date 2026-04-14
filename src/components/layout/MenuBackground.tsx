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

export default function MenuBackground() {
  useEffect(() => {
    const init = async () => {
      try {
        await window.UnicornStudio?.init?.();
      } catch (e) {
        console.error("Menu UnicornStudio init failed:", e);
      }
    };

    const timer = window.setTimeout(() => {
      init();
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div
        data-us-project-src="/glyph_waves_remix.json"
        data-us-dpi="1.5"
        data-us-scale="1"
        data-us-lazyload="false"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}