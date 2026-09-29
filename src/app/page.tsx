import Link from "next/link";
import { PhotoFrame } from "@/components/PhotoFrame";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BookingModal } from "@/components/BookingModal";
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

const hours = [
  { day: "Lundi – Vendredi", time: "7h00 – 21h00" },
  { day: "Samedi", time: "8h00 – 19h00" },
  { day: "Dimanche", time: "9h00 – 14h00" },
];

const exploreLinks = [
  {
    title: "Glow Bar",
    description: "Jus, shots bien-être et en-cas sains.",
    href: "/glow-bar",
    image: "/images/glow-bar-1.jpg",
  },
  {
    title: "Boutique",
    description: "Tenues et accessoires Nescia.",
    href: "/boutique",
    image: "/images/studio-2.jpg",
  },
  {
    title: "Événements",
    description: "Brunchs, masterclass et rendez-vous du mois.",
    href: "/decouvrir-la-salle#evenements",
    image: "/images/event-1.jpg",
  },
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
          <div className="mt-10 [&_button]:border-[#F3EEE5] [&_button]:text-[#F3EEE5] [&_button]:hover:border-accent [&_button]:hover:text-accent">
            <BookingModal />
          </div>
        </div>
      </section>

      <section id="reservation" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:px-10">
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

      <section
        id="abonnements"
        className="scroll-mt-24 bg-foreground px-6 py-24 text-background sm:px-10"
      >
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

      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Nous trouver
            </h2>
            <p className="mt-4 font-sans text-sm text-foreground/70">
              Hivernage, Marrakech
            </p>
            <a
              href="https://maps.google.com/?q=Marrakech"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-sans text-xs tracking-[0.2em] text-accent uppercase"
            >
              Voir sur la carte →
            </a>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              Horaires
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between gap-4 font-sans text-sm text-foreground/80"
                >
                  <span className="text-foreground/60">{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background sm:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">
            À découvrir aussi
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {exploreLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group block">
                <PhotoFrame src={item.image} className="aspect-4/3" />
                <h3 className="mt-4 font-serif text-xl">{item.title}</h3>
                <p className="font-sans text-sm text-background/70">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="avis" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24 text-center sm:px-10">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Avis de nos membres
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
        <Link
          href="/decouvrir-la-salle"
          className="mt-10 inline-block font-sans text-xs tracking-[0.2em] text-accent uppercase"
        >
          Découvrir la salle en détail →
        </Link>
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
