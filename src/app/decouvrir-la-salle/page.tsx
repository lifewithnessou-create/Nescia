import Link from "next/link";
import { PageBanner } from "@/components/PageBanner";
import { PhotoFrame } from "@/components/PhotoFrame";

const studioPhotos = [
  "/images/studio-1.jpg",
  "/images/studio-2.jpg",
  "/images/studio-3.jpg",
];

const events = [
  {
    name: "Brunch bien-être",
    date: "Un dimanche par mois",
    image: "/images/event-1.jpg",
  },
  {
    name: "Masterclass Reformer",
    date: "Trimestriel",
    image: "/images/event-2.jpg",
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

export default function DecouvrirLaSalle() {
  return (
    <main>
      <PageBanner
        title="Découvrir la salle"
        subtitle="Studio · Glow Bar · Événements · Avis"
      />

      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Le studio
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {studioPhotos.map((src) => (
            <PhotoFrame key={src} src={src} className="aspect-square" />
          ))}
        </div>
      </section>

      <section className="bg-foreground px-6 py-24 text-background sm:px-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <PhotoFrame src="/images/glow-bar-1.jpg" className="aspect-4/3" />
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Le Glow Bar</h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-background/80">
              Jus pressés à froid, shots bien-être et en-cas sains à savourer
              avant ou après votre séance.
            </p>
            <Link
              href="/glow-bar"
              className="mt-6 inline-block border border-background px-6 py-3 font-sans text-xs tracking-[0.2em] uppercase transition-colors hover:bg-background hover:text-foreground"
            >
              Voir le menu
            </Link>
          </div>
        </div>
      </section>

      <section id="evenements" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24 sm:px-10">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Événements
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <div key={event.name} className="group">
              <PhotoFrame src={event.image} className="aspect-4/3" />
              <h3 className="mt-4 font-serif text-xl text-foreground">
                {event.name}
              </h3>
              <p className="font-sans text-sm text-foreground/60">
                {event.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10">
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
      </section>
    </main>
  );
}
