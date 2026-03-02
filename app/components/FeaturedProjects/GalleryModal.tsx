import Image from "next/image";
import { useEffect, useState } from "react";

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

  // ESC 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-4xl p-5 2xl:max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="갤러리 닫기"
          className="absolute -top-8 right-5 cursor-pointer text-3xl text-white transition hover:text-zinc-200 focus-visible:outline-2"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="relative mb-5 aspect-1920/1080 w-full overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm">
          <Image
            src={images[current]}
            alt={`프로젝트 이미지 ${current + 1}`}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative aspect-1920/1080 w-28 shrink-0 cursor-pointer overflow-hidden border transition-all duration-200 focus-visible:outline-2 sm:w-36 ${
                current === i
                  ? "border-[#F67373]/80 shadow-lg"
                  : "border-white/20 opacity-50 hover:opacity-100 focus-visible:opacity-100"
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
