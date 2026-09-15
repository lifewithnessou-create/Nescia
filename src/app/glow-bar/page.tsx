import { PageBanner } from "@/components/PageBanner";

const menu = [
  {
    category: "Jus pressés à froid",
    items: [
      { name: "Green Glow", desc: "Épinard, pomme, concombre, citron", price: "45 MAD" },
      { name: "Sunrise", desc: "Carotte, orange, gingembre", price: "45 MAD" },
      { name: "Detox Beet", desc: "Betterave, pomme, menthe", price: "45 MAD" },
    ],
  },
  {
    category: "Shots bien-être",
    items: [
      { name: "Immunity", desc: "Gingembre, curcuma, citron", price: "25 MAD" },
      { name: "Energy", desc: "Maca, guarana, miel", price: "25 MAD" },
    ],
  },
  {
    category: "En-cas sains",
    items: [
      { name: "Energy balls", desc: "Dattes, amandes, cacao", price: "30 MAD" },
      { name: "Bowl açaí", desc: "Açaí, granola, fruits frais", price: "60 MAD" },
    ],
  },
];

const hours = [
  { day: "Lundi – Vendredi", time: "7h30 – 20h00" },
  { day: "Samedi", time: "8h00 – 18h00" },
  { day: "Dimanche", time: "9h00 – 14h00" },
];

export default function GlowBar() {
  return (
    <main>
      <PageBanner
        title="Glow Bar"
        subtitle="Jus, shots & en-cas sains"
        image="/images/glow-bar-1.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
          Le menu
        </h2>
        <div className="mt-10 flex flex-col gap-12">
          {menu.map((section) => (
            <div key={section.category}>
              <h3 className="font-serif text-xl text-accent">
                {section.category}
              </h3>
              <ul className="mt-4 flex flex-col divide-y divide-foreground/10">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <div>
                      <p className="font-sans text-sm text-foreground">
                        {item.name}
                      </p>
                      <p className="font-sans text-xs text-foreground/60">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-sans text-sm whitespace-nowrap text-foreground/80">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 text-background sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">Horaires</h2>
          <div className="mx-auto mt-8 flex max-w-xs flex-col gap-3">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between font-sans text-sm">
                <span className="text-background/70">{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
