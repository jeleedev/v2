import Image from "next/image";
import { useState } from "react";

export default function GalleryModal({
  images,
  open,
  setOpen,
}: {
  images: string[];
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const [current, setCurrent] = useState(0);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl p-5 2xl:max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="fixed top-5 right-5 cursor-pointer text-2xl text-white transition hover:text-zinc-200 lg:top-10 lg:right-10 lg:text-3xl 2xl:top-12 2xl:right-12 2xl:text-4xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="relative mb-5 aspect-1920/1080 w-full overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm">
          <Image src={images[current]} alt="" fill className="object-cover" />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative aspect-1920/1080 w-28 shrink-0 cursor-pointer overflow-hidden border transition-all duration-200 sm:w-36 ${
                current === i
                  ? "border-[#F67373]/80 shadow-lg"
                  : "border-white/20 opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="thumb" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
