import Link from "next/link";
import { PhotoFrame } from "@/components/PhotoFrame";

export function DestinationCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image: string;
}) {
  return (
    <Link href={href} className="group relative block aspect-square overflow-hidden">
      <PhotoFrame
        src={image}
        className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
        overlay="linear-gradient(to top, rgba(43,36,29,0.75), rgba(43,36,29,0) 60%)"
      />
      <span className="absolute inset-x-0 bottom-0 p-5 font-serif text-xl text-[#F3EEE5]">
        {title}
      </span>
    </Link>
  );
}
