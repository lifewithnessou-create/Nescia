"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: brancher sur une table Supabase `newsletter_subscribers`
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="font-sans text-sm tracking-wide text-accent">
        Merci ! Vous serez tenue informée des actualités Nescia.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse e-mail"
        className="w-full border-b border-foreground/30 bg-transparent px-1 py-2 font-sans text-sm text-foreground placeholder:text-foreground/50 focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 border border-foreground px-6 py-2 font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
