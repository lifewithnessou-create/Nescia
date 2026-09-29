"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="border border-foreground px-6 py-3 font-sans text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
    >
      Se déconnecter
    </button>
  );
}
