"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(
        error.message.includes("Email not confirmed")
          ? "Votre e-mail n'est pas encore confirmé. Vérifiez votre boîte de réception (et les spams)."
          : "E-mail ou mot de passe incorrect.",
      );
      setLoading(false);
      return;
    }

    router.push(redirect);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-sans text-xs tracking-[0.15em] text-foreground/60 uppercase">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-sans text-xs tracking-[0.15em] text-foreground/60 uppercase">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      {error && (
        <p className="font-sans text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 border border-foreground px-6 py-3 font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
      >
        {loading ? "Connexion…" : "Se connecter"}
      </button>

      <p className="mt-2 text-center font-sans text-sm text-foreground/70">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="text-accent">
          Créer un compte
        </Link>
      </p>
    </form>
  );
}
