import { PageBanner } from "@/components/PageBanner";
import { BookingButton } from "@/components/BookingButton";
import { createClient } from "@/lib/supabase/server";

type ClassSession = {
  id: string;
  class_name: string;
  starts_at: string;
  duration_minutes: number;
  capacity: number;
};

function formatDay(date: Date) {
  const label = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

export default async function PilatesReformer() {
  const supabase = await createClient();
  const now = new Date();
  const twoWeeksOut = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

  const { data: sessions, error } = await supabase
    .from("class_sessions")
    .select("id, class_name, starts_at, duration_minutes, capacity")
    .gte("starts_at", now.toISOString())
    .lte("starts_at", twoWeeksOut.toISOString())
    .order("starts_at", { ascending: true })
    .returns<ClassSession[]>();

  const byDay = new Map<string, ClassSession[]>();
  for (const session of sessions ?? []) {
    const day = new Date(session.starts_at).toDateString();
    if (!byDay.has(day)) byDay.set(day, []);
    byDay.get(day)!.push(session);
  }

  return (
    <main>
      <PageBanner
        title="Pilates Reformer"
        subtitle="Réservez votre séance"
        image="/images/pilates-reformer.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        {error && (
          <p className="text-center font-sans text-sm text-foreground/60">
            Le planning n&apos;est pas encore disponible — revenez bientôt.
          </p>
        )}

        {!error && byDay.size === 0 && (
          <p className="text-center font-sans text-sm text-foreground/60">
            Aucun cours programmé pour le moment.
          </p>
        )}

        <div className="flex flex-col gap-12">
          {[...byDay.entries()].map(([day, daySessions]) => (
            <div key={day}>
              <h2 className="font-serif text-2xl text-foreground">
                {formatDay(new Date(daySessions[0].starts_at))}
              </h2>
              <ul className="mt-4 flex flex-col divide-y divide-foreground/10">
                {daySessions.map((session) => (
                  <li
                    key={session.id}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <div>
                      <p className="font-sans text-sm text-foreground">
                        {formatTime(new Date(session.starts_at))} —{" "}
                        {session.class_name}
                      </p>
                      <p className="font-sans text-xs text-foreground/50">
                        {session.duration_minutes} min
                      </p>
                    </div>
                    <BookingButton
                      sessionId={session.id}
                      redirectTo="/pilates-reformer"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
