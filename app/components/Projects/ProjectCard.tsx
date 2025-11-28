"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

function seededDelayFromId(id: number) {
  const seed = id;
  const val = (seed * 9301 + 49297) % 233280;
  return (val / 233280) * 0.5;
}

export default function ProjectCard({
  id,
  title,
  description,
  demo,
  github,
}: {
  id: number;
  title: string;
  description: string;
  demo: string;
  github: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  let initialPos: Record<string, string> = {};

  switch (id) {
    case 1:
    case 7:
    case 11:
    case 14:
      initialPos = { x: "-100%" };
      break;
    case 2:
    case 6:
    case 10:
    case 15:
      initialPos = { x: "100%" };
      break;
    case 3:
    case 5:
    case 9:
      initialPos = { y: "-100%" };
      break;
    case 4:
    case 8:
    case 12:
    case 13:
      initialPos = { y: "100%" };
      break;
    default:
      initialPos = { opacity: "0" };
  }

  const idsWithDelay = [54, 12, 30, 1, 72, 31, 33, 52, 60, 97, 9, 5, 4, 99];
  const delay = idsWithDelay.includes(id) ? seededDelayFromId(id) : 0;

  return (
    <div
      ref={ref}
      className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden backface-hidden"
        initial={{ ...initialPos, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
        transition={{
          delay,
          type: "spring",
          stiffness: 150,
          damping: 18,
          mass: 0.6,
        }}
      >
        <Image
          src={`/projects/project-0${id}.png`}
          alt=""
          fill
          className="object-cover transition-all duration-300 group-hover:scale-110"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center text-white">
        <span className="translate-y-2 text-lg font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {title}
        </span>

        <span className="translate-y-2 text-xs whitespace-pre-line text-white/80 opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {description}
        </span>

        <div className="mt-2 flex translate-y-2 gap-4 opacity-0 transition-all delay-150 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link href={demo} target="_blank">
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs transition hover:bg-white/20">
              <span>Demo</span>
            </div>
          </Link>
          <Link href={github} target="_blank">
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs transition hover:bg-white/20">
              <span>Code</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
