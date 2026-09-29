"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Réserver un cours", href: "/#reservation" },
  { label: "Nos abonnements", href: "/#abonnements" },
  { label: "Notre histoire", href: "/notre-histoire" },
  { label: "Glow Bar", href: "/glow-bar" },
  { label: "Boutique", href: "/boutique" },
  { label: "Événements", href: "/decouvrir-la-salle#evenements" },
  { label: "Avis", href: "/#avis" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = !scrolled && !open;
  const textColor = light ? "text-[#F3EEE5]" : "text-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className={`font-serif text-xl tracking-[0.15em] ${textColor}`}
          onClick={() => setOpen(false)}
        >
          NESCIA
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/connexion"
            aria-label="Connexion"
            onClick={() => setOpen(false)}
            className={textColor}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c1.2-3.5 4-5.5 7-5.5s5.8 2 7 5.5" strokeLinecap="round" />
            </svg>
          </Link>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`font-serif text-2xl tracking-[0.3em] ${textColor}`}
          >
            {open ? "×" : "⋯"}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl tracking-wide text-foreground sm:text-3xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/connexion"
            onClick={() => setOpen(false)}
            className="mt-4 font-sans text-xs tracking-[0.2em] text-accent uppercase"
          >
            Connexion
          </Link>
        </div>
      )}
    </header>
  );
}
