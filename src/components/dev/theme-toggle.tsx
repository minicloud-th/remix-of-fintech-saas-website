import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "dev-theme";

export const useDevTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
    const timer = window.setTimeout(() => root.classList.remove("theme-transition"), 400);
    return () => window.clearTimeout(timer);
  }, [theme]);

  return { theme, setTheme };
};

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useDevTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative grid h-9 w-9 place-items-center rounded-full border border-dev-line bg-dev-surface text-dev-ink-soft",
        "transition-colors duration-300 hover:border-dev-accent/40 hover:text-dev-ink",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent/40",
        className,
      )}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -35, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center"
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
