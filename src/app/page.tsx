import { HeroCarousel } from "@/components/HeroCarousel";
import { DestinationCard } from "@/components/DestinationCard";
import { NewsletterForm } from "@/components/NewsletterForm";

const bookingCards = [
  {
    title: "Pilates Reformer",
    image: "/images/pilates-reformer.jpg",
    href: "/pilates-reformer",
  },
  {
    title: "Cours collectifs",
    image: "/images/cours-collectifs.jpg",
    href: "/cours-collectifs",
  },
];

const discoverCards = [
  {
    title: "Glow Bar",
    image: "/images/glow-bar-1.jpg",
    href: "/glow-bar",
  },
  {
    title: "Boutique",
    image: "/images/boutique-1.jpg",
    href: "/boutique",
  },
  {
    title: "Événements",
    image: "/images/event-1.jpg",
    href: "/decouvrir-la-salle#evenements",
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

const hours = [
  { day: "Lundi – Vendredi", time: "7h00 – 21h00" },
  { day: "Samedi", time: "8h00 – 19h00" },
  { day: "Dimanche", time: "9h00 – 14h00" },
];

const reviews = [
  {
    quote:
      "Un cocon en plein Marrakech, l'équipe est attentive et les cours sont exigeants avec bienveillance.",
    author: "Membre Nescia",
  },
  {
    quote:
      "Le Glow Bar après le Reformer, c'est devenu mon rituel de la semaine.",
    author: "Membre Nescia",
  },
  {
    quote: "Ambiance chaleureuse, coaching au top. Je recommande à 100%.",
    author: "Membre Nescia",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center">
        <HeroCarousel />
        <div className="relative flex flex-col items-center px-6 text-center">
          <h1 className="font-serif text-[4rem] leading-none font-medium tracking-[0.08em] text-[#F3EEE5] sm:text-[6rem] md:text-[8rem]">
            NESCIA
          </h1>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-6 font-sans text-xs tracking-[0.35em] text-[#F3EEE5] sm:text-sm">
            MOVE · GLOW · CONNECT
          </p>
        </div>
      </section>

      <section id="reservation" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24 sm:px-10">
        <h2 className="text-center font-serif text-3xl text-foreground sm:text-4xl">
          Réservez votre cours
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {bookingCards.map((card) => (
            <DestinationCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background sm:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">
            Venez découvrir aussi
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {discoverCards.map((card) => (
              <DestinationCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section id="abonnements" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:px-10">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            Nos abonnements
          </h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm text-foreground/70">
            Trois formules pour intégrer Nescia à votre rythme de vie.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {memberships.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col gap-6 border border-foreground/15 p-8"
            >
              <div>
                <h3 className="font-serif text-2xl text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 font-sans text-sm tracking-wide text-accent">
                  {plan.price}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-3 font-sans text-sm text-foreground/70">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="text-accent">·</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <span className="font-sans text-xs tracking-[0.2em] text-accent uppercase">
                Adhérer →
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="nous-trouver" className="bg-foreground px-6 py-24 text-background scroll-mt-24 sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Nous trouver</h2>
            <p className="mt-4 font-sans text-sm text-background/70">
              Hivernage, Marrakech
            </p>
            <div className="relative mt-6 aspect-4/3 overflow-hidden">
              <iframe
                title="Localisation Nescia"
                src="https://www.google.com/maps?q=Marrakech&output=embed"
                loading="lazy"
                className="pointer-events-none absolute inset-0 h-full w-full border-0"
              />
              <a
                href="https://maps.google.com/?q=Marrakech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir dans Google Maps"
                className="absolute inset-0"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Horaires</h2>
            <div className="mt-6 flex flex-col gap-2">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between gap-4 font-sans text-sm text-background/80"
                >
                  <span className="text-background/60">{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="avis" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24 text-center sm:px-10">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Ce que nos clientes en pensent
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.quote} className="flex flex-col gap-4">
              <p className="font-serif text-lg text-foreground/85 italic">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="font-sans text-xs tracking-[0.2em] text-accent uppercase">
                {review.author}
              </p>
            </div>
          ))}
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
