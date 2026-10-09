"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const engagementLabels: Record<string, string> = {
  "sans-engagement": "Sans engagement",
  "6-mois": "6 mois",
  "1-an": "1 an",
};

export function AdhesionForm({
  pack,
  engagement,
}: {
  pack: string;
  engagement: string;
}) {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [goals, setGoals] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: `${firstName} ${lastName}` } },
    });

    if (signUpError) {
      setError(
        signUpError.message.includes("already registered")
          ? "Un compte existe déjà avec cet e-mail. Connectez-vous d'abord."
          : `Erreur : ${signUpError.message}`,
      );
      setLoading(false);
      return;
    }

    const userId = signUpData.user?.id;
    if (userId) {
      const { error: insertError } = await supabase
        .from("membership_requests")
        .insert({
          user_id: userId,
          pack,
          engagement,
          city,
          goals,
        });

      if (insertError) {
        setError(`Erreur : ${insertError.message}`);
        setLoading(false);
        return;
      }
    }

    router.push("/adhesion/confirmation");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="mb-4 border border-accent/40 bg-accent/5 p-4 text-center">
        <p className="font-serif text-xl text-foreground">{pack}</p>
        <p className="font-sans text-sm text-foreground/60">
          {engagementLabels[engagement] ?? engagement}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className="font-sans text-xs tracking-[0.15em] text-foreground/60 uppercase">
            Prénom
          </label>
          <input
            id="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className="font-sans text-xs tracking-[0.15em] text-foreground/60 uppercase">
            Nom
          </label>
          <input
            id="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
          />
        </div>
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

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="font-sans text-xs tracking-[0.15em] text-foreground/60 uppercase">
          Ville
        </label>
        <input
          id="city"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="goals" className="font-sans text-xs tracking-[0.15em] text-foreground/60 uppercase">
          Qu&apos;attendez-vous de Nescia ?
        </label>
        <textarea
          id="goals"
          rows={3}
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className="border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>

      {error && <p className="font-sans text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-4 border border-foreground px-6 py-3 font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent disabled:opacity-50"
      >
        {loading ? "Envoi…" : "Valider mon adhésion"}
      </button>

      <p className="text-center font-sans text-xs text-foreground/50">
        Le paiement en ligne arrive bientôt. Un membre de l&apos;équipe vous
        contactera pour finaliser votre adhésion.
      </p>
    </form>
  );
}
