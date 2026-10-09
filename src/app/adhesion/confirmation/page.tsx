import { PageBanner } from "@/components/PageBanner";

export default function AdhesionConfirmation() {
  return (
    <main>
      <PageBanner title="Bienvenue chez Nescia" subtitle="À très vite en salle" />
      <section className="mx-auto max-w-md px-6 py-24 text-center sm:px-10">
        <p className="font-sans text-lg leading-relaxed text-foreground/80">
          Votre demande d&apos;adhésion est bien enregistrée. Un membre de
          l&apos;équipe Nescia vous contactera très prochainement pour
          finaliser votre inscription et votre premier paiement.
        </p>
        <p className="mt-6 font-sans text-sm text-foreground/60">
          En attendant, retrouvez-nous à Hivernage, Marrakech.
        </p>
      </section>
    </main>
  );
}
