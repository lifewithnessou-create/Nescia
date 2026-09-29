import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";

const featureList = [
  "Cours collectifs illimités",
  "Tarif réduit sur le Pilates Reformer",
  "Accès prioritaire aux événements",
  "Tarif préférentiel Glow Bar",
];

const plans = [
  {
    name: "Sans engagement",
    description: "Résiliable à tout moment.",
    included: [true, true, false, false],
  },
  {
    name: "Engagement 6 mois",
    description: "Un tarif avantageux sur la durée.",
    included: [true, true, true, false],
  },
  {
    name: "Engagement 12 mois",
    description: "La formule la plus complète.",
    included: [true, true, true, true],
  },
];

export default function Rejoindre() {
  return (
    <main>
      <PageBanner title="Rejoignez-nous" subtitle="Choisissez votre formule" />

      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col gap-6 border border-foreground/15 p-8"
            >
              <div>
                <h2 className="font-serif text-2xl text-foreground">
                  {plan.name}
                </h2>
                <p className="mt-2 font-sans text-sm text-foreground/60">
                  {plan.description}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-3 font-sans text-sm">
                {featureList.map((feature, i) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 ${
                      plan.included[i]
                        ? "text-foreground"
                        : "text-foreground/35 line-through"
                    }`}
                  >
                    <span className={plan.included[i] ? "text-accent" : ""}>
                      {plan.included[i] ? "✓" : "✕"}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/connexion"
                className="border border-foreground px-6 py-3 text-center font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Je veux celui-là
              </Link>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-md text-center font-sans text-sm text-foreground/70">
          L&apos;inscription en ligne arrive bientôt. En attendant,
          contactez-nous pour rejoindre Nescia dès aujourd&apos;hui.
        </p>
      </section>
    </main>
  );
}
