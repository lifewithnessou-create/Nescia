import { PageBanner } from "@/components/PageBanner";

const pricingPlans = [
  {
    name: "Sans abonnement",
    price: "À l'unité",
    highlight: false,
    rows: [
      { label: "Cours collectifs", value: "120 MAD / séance" },
      { label: "Pilates Reformer", value: "180 MAD / séance" },
    ],
  },
  {
    name: "Avec l'abonnement",
    price: "650 MAD / mois",
    highlight: true,
    rows: [
      { label: "Cours collectifs", value: "Illimités, inclus" },
      { label: "Pilates Reformer", value: "-20%, soit 144 MAD / séance" },
    ],
  },
];

export default function Rejoindre() {
  return (
    <main>
      <PageBanner title="Rejoignez-nous" subtitle="Choisissez votre formule" />

      <section className="mx-auto max-w-3xl px-6 py-24 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
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
                <p className="mt-2 font-sans text-sm tracking-wide text-accent">
                  {plan.price}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-4 font-sans text-sm text-foreground/70">
                {plan.rows.map((row) => (
                  <li key={row.label} className="flex flex-col gap-0.5">
                    <span className="text-foreground/50">{row.label}</span>
                    <span className="text-foreground">{row.value}</span>
                  </li>
                ))}
              </ul>
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
