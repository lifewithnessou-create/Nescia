"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Pilates Reformer", href: "/pilates-reformer" },
  { label: "Cours collectifs", href: "/cours-collectifs" },
  { label: "Glow Bar", href: "/glow-bar" },
  { label: "Boutique", href: "/boutique" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.15em] text-[#F3EEE5]"
          onClick={() => setOpen(false)}
        >
          NESCIA
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.2em] text-[#F3EEE5] uppercase transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/connexion"
          className="hidden font-sans text-xs tracking-[0.2em] text-[#F3EEE5] uppercase transition-opacity hover:opacity-70 md:block"
        >
          Connexion
        </Link>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-end justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px bg-[#F3EEE5] transition-all ${open ? "w-6 translate-y-[3.5px] rotate-45" : "w-6"}`}
          />
          <span
            className={`h-px bg-[#F3EEE5] transition-all ${open ? "w-6 -translate-y-[3.5px] -rotate-45" : "w-4"}`}
          />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl tracking-wide text-foreground"
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
