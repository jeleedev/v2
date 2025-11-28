"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuGlobe, LuFilePen, LuFigma } from "react-icons/lu";
import GalleryModal from "./GalleryModal";

export default function FeaturedProjectCard({
  slug,
  title,
  slides,
  description,
  features,
  tech,
  contribution,
  demo,
  github,
}: {
  title: string;
  description: string;
  demo: string;
  github: string;
  slug?: string;
  slides?: number[];
  features?: string[];
  tech?: { name: string; color: string }[];
  contribution?: string;
}) {
  const [open, setOpen] = useState(false);

  const images = slides?.map(
    (num: number) => `/featured/${slug}-slide-0${num}.png`,
  );

  return (
    <div className="mb-10">
      <div
        className="group relative mb-6 aspect-1920/1080 w-full cursor-pointer overflow-hidden border border-zinc-200"
        onClick={() => setOpen(true)}
      >
        {images && (
          <Image
            src={images[0]}
            alt="thumbnail"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="absolute right-4 bottom-4 flex translate-y-1 items-center gap-1 text-sm tracking-wide text-zinc-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 12V4h8M4 4l8 8" />
          </svg>
          이미지 더보기
        </span>
      </div>

      {images && <GalleryModal images={images} open={open} setOpen={setOpen} />}

      <div className="space-y-6 px-2.5">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">{title}</p>
          <div className="flex items-center gap-2 2xl:text-lg">
            <Link
              href={demo}
              target="_blank"
              className="rounded-lg bg-zinc-50 p-2 hover:bg-zinc-100"
            >
              <LuGlobe />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="rounded-lg bg-zinc-50 p-2 hover:bg-zinc-100"
            >
              <LuGithub />
            </Link>
            <Link
              href={""}
              target="_blank"
              className="rounded-lg bg-zinc-50 p-2 hover:bg-zinc-100"
            >
              <LuFilePen />
            </Link>
            <Link
              href={""}
              target="_blank"
              className="rounded-lg bg-zinc-50 p-2 hover:bg-zinc-100"
            >
              <LuFigma />
            </Link>
          </div>
        </div>

        <ul className="space-y-2 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <span className="relative pr-2.5 font-semibold text-nowrap after:absolute after:top-1/2 after:right-0 after:h-3/5 after:w-px after:-translate-y-1/2 after:bg-zinc-200">
              설명
            </span>
            <p>{description}</p>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="relative pr-2.5 font-semibold text-nowrap after:absolute after:top-1/2 after:right-0 after:h-3/5 after:w-px after:-translate-y-1/2 after:bg-zinc-200">
              특징
            </span>
            <ul className="list-decimal space-y-0.5 pl-5">
              {features?.map((list: string, i: number) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </li>

          <li className="flex items-start gap-2.5">
            <span className="relative pr-2.5 font-semibold text-nowrap after:absolute after:top-1/2 after:right-0 after:h-3/5 after:w-px after:-translate-y-1/2 after:bg-zinc-200">
              작업 기여도
            </span>
            <p>{contribution}</p>
          </li>
        </ul>

        <div className="flex flex-wrap items-center gap-1.5">
          {tech?.map((e) => (
            <span
              key={e.name}
              className={`tag-${e.color} rounded-full border px-2.5 py-1 text-xs font-medium`}
            >
              {e.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
