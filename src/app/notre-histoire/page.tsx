import { PageBanner } from "@/components/PageBanner";

export default function NotreHistoire() {
  return (
    <main>
      <PageBanner title="Notre histoire" subtitle="L'esprit Nescia" />

      <section className="mx-auto max-w-3xl px-6 py-24 sm:px-10">
        <p className="font-sans text-lg leading-relaxed text-foreground/80">
          Nescia est né à Marrakech d&apos;une conviction simple : chaque
          femme mérite un lieu à elle, pensé pour prendre soin de son corps
          et de son esprit sans compromis. Entre les séances de Pilates
          Reformer, les cours collectifs et le Glow Bar, Nescia réunit le
          mouvement, le soin et la communauté sous un même toit.
        </p>
        <p className="mt-6 font-sans text-lg leading-relaxed text-foreground/80">
          Ce texte est un espace réservé — remplacez-le par la véritable
          histoire de Nescia : sa fondation, sa mission, et ce qui la rend
          unique à Marrakech.
        </p>
      </section>
    </main>
  );
}
