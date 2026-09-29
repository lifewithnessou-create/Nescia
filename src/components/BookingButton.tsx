"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function BookingButton({
  sessionId,
  redirectTo,
}: {
  sessionId: string;
  redirectTo: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<
    "idle" | "loading" | "booked" | "already" | "error"
  >("idle");

  async function handleClick() {
    setStatus("loading");
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push(`/connexion?redirect=${encodeURIComponent(redirectTo)}`);
      return;
    }

    const { error } = await supabase
      .from("bookings")
      .insert({ session_id: sessionId, user_id: user.id });

    if (error) {
      setStatus(error.code === "23505" ? "already" : "error");
      return;
    }

    setStatus("booked");
  }

  if (status === "booked" || status === "already") {
    return (
      <span className="font-sans text-xs tracking-[0.15em] text-accent uppercase">
        {status === "booked" ? "Réservé ✓" : "Déjà réservé ✓"}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={status === "loading"}
      className="font-sans text-xs tracking-[0.15em] text-foreground uppercase underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent disabled:opacity-50"
    >
      {status === "loading" ? "…" : "Réserver"}
      {status === "error" && (
        <span className="ml-2 text-red-700 normal-case">— erreur, réessayez</span>
      )}
    </button>
  );
}
