import { PageBanner } from "@/components/PageBanner";
import { SignupForm } from "@/components/SignupForm";

export default function Inscription() {
  return (
    <main>
      <PageBanner title="Créer un compte" subtitle="Rejoignez Nescia" />
      <section className="mx-auto max-w-sm px-6 py-24 sm:px-10">
        <SignupForm />
      </section>
    </main>
  );
}
