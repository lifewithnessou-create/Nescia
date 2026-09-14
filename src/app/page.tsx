export default function Home() {
  return (
    <main>
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(43,36,29,0.35), rgba(43,36,29,0.65)), url('/images/hero.jpg'), radial-gradient(circle at 30% 20%, #c17f5b 0%, #8a5a3c 45%, #2b241d 100%)",
        }}
      >
        <div className="relative flex flex-col items-center px-6 text-center">
          <h1 className="font-serif text-[4rem] leading-none font-medium tracking-[0.08em] text-[#F3EEE5] sm:text-[6rem] md:text-[8rem]">
            NESCIA
          </h1>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-6 font-sans text-xs tracking-[0.35em] text-[#F3EEE5] sm:text-sm">
            PILATES · GLOW BAR · WELLNESS
          </p>
        </div>
      </section>
    </main>
  );
}
