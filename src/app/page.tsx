import Link from "next/link";
import { PhotoFrame } from "@/components/PhotoFrame";
import { NewsletterForm } from "@/components/NewsletterForm";

const bookingOptions = [
  {
    title: "Pilates Reformer",
    description:
      "Séances individuelles ou en petit groupe sur machine, pour renforcer, sculpter et aligner le corps en douceur.",
    href: "/pilates-reformer",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-10 w-10"
      >
        <rect x="6" y="21" width="36" height="4" rx="2" />
        <circle cx="12" cy="23" r="3" />
        <circle cx="36" cy="23" r="3" />
        <path d="M24 21V9" />
        <path d="M18 9h12" />
      </svg>
    ),
  },
  {
    title: "Cours collectifs",
    description:
      "Pilates mat, barre, yoga et stretching en groupe, dans une ambiance conviviale et énergisante.",
    href: "/cours-collectifs",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-10 w-10"
      >
        <circle cx="16" cy="19" r="6" />
        <circle cx="32" cy="19" r="6" />
        <circle cx="24" cy="33" r="6" />
      </svg>
    ),
  },
];

const memberships = [
  {
    name: "Découverte",
    price: "450 MAD / mois",
    perks: [
      "4 cours collectifs par mois",
      "1 séance Reformer d'essai offerte",
      "Tarif préférentiel Glow Bar",
    ],
  },
  {
    name: "Essentiel",
    price: "850 MAD / mois",
    perks: [
      "Cours collectifs illimités",
      "2 séances Reformer par mois",
      "-10% en boutique",
    ],
  },
  {
    name: "Premium",
    price: "1450 MAD / mois",
    perks: [
      "Accès illimité Reformer et cours collectifs",
      "Glow Bar inclus 2x / semaine",
      "Accès prioritaire aux événements",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center">
        <PhotoFrame
          src="/images/hero.jpg"
          className="absolute inset-0"
          overlay="linear-gradient(to bottom, rgba(43,36,29,0.35), rgba(43,36,29,0.65))"
        />
        <div className="relative flex flex-col items-center px-6 text-center">
          <h1 className="font-serif text-[4rem] leading-none font-medium tracking-[0.08em] text-[#F3EEE5] sm:text-[6rem] md:text-[8rem]">
            NESCIA
          </h1>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-6 font-sans text-xs tracking-[0.35em] text-[#F3EEE5] sm:text-sm">
            PILATES · GLOW BAR · WELLNESS
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Réservez votre séance
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-foreground/70">
            Choisissez la formule qui vous correspond aujourd&apos;hui.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {bookingOptions.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="group flex flex-col items-center gap-4 border border-foreground/15 px-8 py-12 text-center transition-colors hover:border-accent"
            >
              <span className="text-accent">{option.icon}</span>
              <h3 className="font-serif text-2xl text-foreground">
                {option.title}
              </h3>
              <p className="font-sans text-sm text-foreground/70">
                {option.description}
              </p>
              <span className="mt-2 font-sans text-xs tracking-[0.2em] text-accent uppercase transition-transform group-hover:translate-x-1">
                Réserver →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background sm:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">Nos abonnements</h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-background/70">
            Trois formules pour intégrer Nescia à votre rythme de vie.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {memberships.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col gap-6 border border-background/20 p-8"
            >
              <div>
                <h3 className="font-serif text-2xl">{plan.name}</h3>
                <p className="mt-2 font-sans text-sm tracking-wide text-accent">
                  {plan.price}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-3 font-sans text-sm text-background/80">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="text-accent">·</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center">
        <PhotoFrame
          src="/images/studio-1.jpg"
          className="absolute inset-0"
          overlay="linear-gradient(to bottom, rgba(43,36,29,0.5), rgba(43,36,29,0.6))"
        />
        <div className="relative flex flex-col items-center px-6 text-center">
          <h2 className="font-serif text-3xl text-[#F3EEE5] sm:text-4xl">
            Découvrir la salle et ses avantages
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-[#F3EEE5]/85">
            Studio, Glow Bar, événements et avis de nos membres.
          </p>
          <Link
            href="/decouvrir-la-salle"
            className="mt-8 border border-[#F3EEE5] px-8 py-3 font-sans text-xs tracking-[0.2em] text-[#F3EEE5] uppercase transition-colors hover:bg-[#F3EEE5] hover:text-foreground"
          >
            Explorer
          </Link>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:px-10">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Restez informée
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-sm text-foreground/70">
          Nouveautés, offres et événements Nescia, directement dans votre
          boîte mail.
        </p>
        <div className="mt-8 flex justify-center">
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
