import { PageBanner } from "@/components/PageBanner";

export default function CoursCollectifs() {
  return (
    <main>
      <PageBanner title="Cours collectifs" subtitle="Pilates · Barre · Yoga" />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:px-10">
        <p className="font-sans text-lg leading-relaxed text-foreground/80">
          Le planning des cours collectifs et la réservation en ligne
          arrivent bientôt sur cette page.
        </p>
      </section>
    </main>
  );
}
