"use client";

import { useEffect, useState } from "react";
import { PhotoFrame } from "@/components/PhotoFrame";

const slides = [
  "/images/hero.jpg",
  "/images/studio-1.jpg",
  "/images/studio-2.jpg",
  "/images/glow-bar-1.jpg",
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((src, i) => (
        <PhotoFrame
          key={src}
          src={src}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === index ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          overlay="linear-gradient(to bottom, rgba(43,36,29,0.35), rgba(43,36,29,0.65))"
        />
      ))}
    </div>
  );
}
