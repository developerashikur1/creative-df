"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (stored === "dark" || (!stored && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  return (
    <div className="fixed right-3.5 bottom-3.5">
      <button
        onClick={toggleTheme}
        className="p-1.5 rounded-md text-muted-foreground bg-accent hover:text-foreground hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </button>
    </div>
  );
};

export default DarkMode;
