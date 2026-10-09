import { PageBanner } from "@/components/PageBanner";
import { AdhesionForm } from "@/components/AdhesionForm";

export default async function Adhesion({
  searchParams,
}: {
  searchParams: Promise<{ pack?: string; engagement?: string }>;
}) {
  const params = await searchParams;
  const pack = params.pack ?? "Basique";
  const engagement = params.engagement ?? "sans-engagement";

  return (
    <main>
      <PageBanner title="Votre adhésion" subtitle="Dernière étape" />
      <section className="mx-auto max-w-md px-6 py-24 sm:px-10">
        <AdhesionForm pack={pack} engagement={engagement} />
      </section>
    </main>
  );
}
