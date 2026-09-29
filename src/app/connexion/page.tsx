import { Suspense } from "react";
import { PageBanner } from "@/components/PageBanner";
import { LoginForm } from "@/components/LoginForm";
import { LogoutButton } from "@/components/LogoutButton";
import { createClient } from "@/lib/supabase/server";

export default async function Connexion() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      <PageBanner title="Connexion" subtitle="Espace membres" />
      <section className="mx-auto max-w-sm px-6 py-24 sm:px-10">
        {user ? (
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-sans text-sm text-foreground/80">
              Connectée en tant que{" "}
              <span className="text-foreground">{user.email}</span>
            </p>
            <LogoutButton />
          </div>
        ) : (
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        )}
      </section>
    </main>
  );
}
