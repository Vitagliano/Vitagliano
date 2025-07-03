"use client"

import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Card } from "./Card";

export function Photo() {
  const images = [
    { src: "/img/me.jpeg", filename: "me.jpeg" },
    { src: "/img/me-pixel.png", filename: "me.png" },
  ];
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Card className="relative rounded-2xl shadow-lg max-w-md mx-auto !p-0">
      {/* Photo */}
      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={images[current].src}
          alt="Me"
          width={600}
          height={600}
          className="object-cover w-full rounded-lg h-auto border-inherit border-2 border-[#151515]"
          priority
        />
      </div>
      {/* Filename Label with Arrows */}
      <div className="p-4">
        <div className="flex items-center gap-2 rounded-lg text-white text-sm justify-between">
          <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4" />
          <span className="text-md font-light">{images[current].filename}</span>
          </div>
          <div className="flex items-center gap-2">
          <button onClick={handlePrev} aria-label="Previous photo" className="hover:text-neutral-400 transition">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={handleNext} aria-label="Next photo" className="hover:text-neutral-400 transition">
            <ChevronRight className="w-4 h-4" />
          </button>
          </div>
        </div>
      </div>
    </Card>
  );
} 