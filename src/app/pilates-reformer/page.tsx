import { PageBanner } from "@/components/PageBanner";

export default function PilatesReformer() {
  return (
    <main>
      <PageBanner title="Pilates Reformer" subtitle="Séances sur machine" />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:px-10">
        <p className="font-sans text-lg leading-relaxed text-foreground/80">
          Le détail des cours, horaires et la réservation en ligne arrivent
          bientôt sur cette page.
        </p>
      </section>
    </main>
  );
}
