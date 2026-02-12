"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      className="rounded-xl px-4 py-2 text-sm font-semibold tracking-wide transition-all active:translate-y-0.5 active:shadow-none"
      style={dark ? {
        background: "linear-gradient(to bottom, #555, #3a3a3a)",
        color: "#888",
        textShadow: "0 1px 1px rgba(255,255,255,0.05)",
        boxShadow: "0 4px 0 #2a2a2a, 0 6px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
      } : {
        background: "linear-gradient(to bottom, #7ec8c8, #5ba8a8)",
        color: "#3d7a7a",
        textShadow: "0 1px 1px rgba(255,255,255,0.2)",
        boxShadow: "0 4px 0 #4a9090, 0 6px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
      }}
      aria-label="Toggle dark mode"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
