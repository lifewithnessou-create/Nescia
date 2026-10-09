import { PageBanner } from "@/components/PageBanner";
import { PackCard } from "@/components/PackCard";

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
            <PackCard key={plan.name} featureList={featureList} {...plan} />
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-md text-center font-sans text-sm text-foreground/70">
          Sélectionnez un pack et un engagement pour accéder au formulaire
          d&apos;adhésion.
        </p>
      </section>
    </main>
  );
}
