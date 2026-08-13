"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const getTheme = (): Theme => {
  try {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Fall back to the operating system preference if storage is unavailable.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemeToggle() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setTheme(getTheme()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // The active theme still works for this session when storage is blocked.
    }
    setTheme(nextTheme);
  };

  const isDark = theme === "dark";

  if (pathname.startsWith("/rolesmith")) {
    return null;
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="fixed right-4 top-5 z-50 rounded-full bg-background/90 px-3 shadow-sm backdrop-blur-md"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="text-primary" aria-hidden="true" /> : <Moon className="text-primary" aria-hidden="true" />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}
