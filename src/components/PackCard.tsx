"use client";

import Link from "next/link";
import { useState } from "react";

const engagements = [
  { value: "sans-engagement", label: "Sans engagement" },
  { value: "6-mois", label: "6 mois" },
  { value: "1-an", label: "1 an" },
];

export function PackCard({
  name,
  description,
  featureList,
  included,
  eventsNote,
  highlight,
}: {
  name: string;
  description: string;
  featureList: string[];
  included: boolean[];
  eventsNote?: string | null;
  highlight?: boolean;
}) {
  const [engagement, setEngagement] = useState(engagements[0].value);

  return (
    <div
      className={`flex flex-col gap-6 p-8 ${
        highlight ? "border-2 border-accent" : "border border-foreground/15"
      }`}
    >
      <div>
        <h2 className="font-serif text-2xl text-foreground">{name}</h2>
        <p className="mt-2 font-sans text-sm text-foreground/60">
          {description}
        </p>
      </div>

      <ul className="flex flex-1 flex-col gap-3 font-sans text-sm">
        {featureList.map((feature, i) => (
          <li
            key={feature}
            className={`flex items-start gap-2 ${
              included[i] ? "text-foreground" : "text-foreground/35 line-through"
            }`}
          >
            <span className={included[i] ? "text-accent" : ""}>
              {included[i] ? "✓" : "✕"}
            </span>
            <span>
              {feature}
              {included[i] && feature === "Événements" && eventsNote && (
                <span className="block text-xs text-foreground/50">
                  {eventsNote}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <div>
        <p className="mb-2 font-sans text-xs tracking-[0.15em] text-foreground/50 uppercase">
          Engagement
        </p>
        <div className="flex flex-wrap gap-2">
          {engagements.map((e) => (
            <button
              key={e.value}
              type="button"
              onClick={() => setEngagement(e.value)}
              className={`border px-3 py-1.5 font-sans text-xs transition-colors ${
                engagement === e.value
                  ? "border-accent bg-accent text-background"
                  : "border-foreground/20 text-foreground/70 hover:border-foreground/50"
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>
        <p className="mt-2 font-sans text-xs text-foreground/50">
          {engagement === "sans-engagement"
            ? "Tarif standard, résiliable à tout moment."
            : "Tarif préférentiel pour cet engagement."}
        </p>
      </div>

      <Link
        href={`/adhesion?pack=${encodeURIComponent(name)}&engagement=${engagement}`}
        className="border border-foreground px-6 py-3 text-center font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
      >
        Je veux celui-là
      </Link>
    </div>
  );
}
