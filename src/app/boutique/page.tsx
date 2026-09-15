import { PageBanner } from "@/components/PageBanner";

export default function Boutique() {
  return (
    <main>
      <PageBanner title="Boutique" subtitle="Bientôt disponible" />
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:px-10">
        <p className="font-sans text-lg leading-relaxed text-foreground/80">
          Notre sélection tenues et accessoires arrive prochainement.
        </p>
      </section>
    </main>
  );
}
