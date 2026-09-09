import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import DevLogo from "./logo";
import ThemeToggle from "./theme-toggle";
import { useMotionSafe } from "./motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Download", href: "#download" },
  { label: "FAQ", href: "#faq" },
];

const DevNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { fadeDown } = useMotionSafe();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      variants={fadeDown(0)}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-500",
        scrolled
          ? "border-b border-dev-line/80 bg-dev-bg/70 shadow-[0_1px_20px_-12px_rgb(0_0_0/0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-accent/40 rounded-lg">
          <DevLogo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="dev-underline text-sm text-dev-ink-soft transition-colors duration-300 hover:text-dev-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.a
            href="#download"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="hidden h-9 items-center rounded-full bg-dev-ink px-4 text-sm font-medium text-dev-bg sm:inline-flex"
          >
            Get the app
          </motion.a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-dev-line text-dev-ink-soft md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-dev-line/70 bg-dev-bg/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm text-dev-ink-soft transition-colors hover:bg-dev-accent-soft hover:text-dev-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default DevNavbar;
