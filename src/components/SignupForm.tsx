"use client";

import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });

    setLoading(false);

    if (error) {
      setError(
        error.message.includes("already registered")
          ? "Un compte existe déjà avec cet e-mail."
          : `Erreur Supabase : ${error.message}`,
      );
      return;
    }

    setDone(true);
  }

  if (done) {
    return (
      <p className="text-center font-sans text-sm text-foreground/80">
        Compte créé ! Vérifiez votre boîte mail pour confirmer votre adresse,
        puis{" "}
        <Link href="/connexion" className="text-accent">
          connectez-vous
        </Link>
        .
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="font-sans text-xs tracking-[0.15em] text-foreground/60 uppercase">
          Nom complet
        </label>
        <input
          id="fullName"
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

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
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      {error && <p className="font-sans text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 border border-foreground px-6 py-3 font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
      >
        {loading ? "Création…" : "Créer mon compte"}
      </button>

      <p className="mt-2 text-center font-sans text-sm text-foreground/70">
        Déjà un compte ?{" "}
        <Link href="/connexion" className="text-accent">
          Se connecter
        </Link>
      </p>
    </form>
  );
}
