import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";

const featureList = [
  "Cours collectifs illimités",
  "Réduction Pilates Reformer",
  "Réduction Glow Bar",
  "Réduction boutique",
  "Événements",
];

const plans = [
  {
    name: "Basique",
    description: "L'essentiel pour bouger régulièrement.",
    included: [true, true, false, false, false],
    eventsNote: null,
  },
  {
    name: "Premium",
    description: "Plus d'avantages au quotidien.",
    included: [true, true, true, false, true],
    eventsNote: "À prix réduit, accès prioritaire",
  },
  {
    name: "Ultra VIP",
    description: "Le meilleur de Nescia, sans compter.",
    included: [true, true, true, true, true],
    eventsNote: "Gratuits, accès prioritaire",
    highlight: true,
  },
];

export default function Rejoindre() {
  return (
    <main>
      <PageBanner title="Rejoignez-nous" subtitle="Choisissez votre pack" />

      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <p className="mx-auto max-w-lg text-center font-sans text-sm text-foreground/70">
          Chaque pack est disponible sans engagement, ou avec engagement 6
          mois / 1 an pour un tarif préférentiel. Les événements restent
          accessibles à toutes, à prix plein pour les non-abonnées.
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-6 p-8 ${
                plan.highlight
                  ? "border-2 border-accent"
                  : "border border-foreground/15"
              }`}
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
                    <span>
                      {feature}
                      {plan.included[i] && feature === "Événements" && plan.eventsNote && (
                        <span className="block text-xs text-foreground/50">
                          {plan.eventsNote}
                        </span>
                      )}
                    </span>
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
