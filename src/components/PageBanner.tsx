import { PhotoFrame } from "@/components/PhotoFrame";

export function PageBanner({
  title,
  subtitle,
  image = "/images/hero.jpg",
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center">
      <PhotoFrame
        src={image}
        className="absolute inset-0"
        overlay="linear-gradient(to bottom, rgba(43,36,29,0.4), rgba(43,36,29,0.55))"
      />
      <div className="relative px-6 text-center">
        <h1 className="font-serif text-4xl tracking-wide text-[#F3EEE5] sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-sans text-xs tracking-[0.3em] text-[#F3EEE5]/80 uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
