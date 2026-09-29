"use client";

import Link from "next/link";
import { useState } from "react";

const options = [
  {
    title: "Pilates Reformer",
    description: "Séances individuelles ou en petit groupe sur machine.",
    href: "/pilates-reformer",
  },
  {
    title: "Cours collectifs",
    description: "Pilates mat, barre, yoga et stretching en groupe.",
    href: "/cours-collectifs",
  },
];

export function BookingModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="border border-foreground px-10 py-4 font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
      >
        Réserver un cours
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 px-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-background p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-serif text-2xl text-foreground">
                Réserver un cours
              </h3>
              <button
                type="button"
                aria-label="Fermer"
                onClick={() => setOpen(false)}
                className="font-serif text-2xl text-foreground/60 hover:text-foreground"
              >
                ×
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {options.map((option) => (
                <Link
                  key={option.href}
                  href={option.href}
                  onClick={() => setOpen(false)}
                  className="border border-foreground/15 p-5 transition-colors hover:border-accent"
                >
                  <p className="font-serif text-lg text-foreground">
                    {option.title}
                  </p>
                  <p className="mt-1 font-sans text-sm text-foreground/70">
                    {option.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
