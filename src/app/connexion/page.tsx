import { PageBanner } from "@/components/PageBanner";

export default function Connexion() {
  return (
    <main>
      <PageBanner title="Connexion" subtitle="Espace membres" />
      <section className="mx-auto max-w-md px-6 py-24 text-center sm:px-10">
        <p className="font-sans text-lg leading-relaxed text-foreground/80">
          La connexion à votre espace membre arrive bientôt sur cette page.
        </p>
      </section>
    </main>
  );
}
