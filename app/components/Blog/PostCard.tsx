"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

export default function PostCard({
  id,
  title,
  description,
  tags,
  link,
}: {
  id: number;
  title: string;
  description: string;
  tags: { name: string; color: string }[];
  link: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 18,
        mass: 0.3,
      }}
      className="group relative h-full border border-zinc-200 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50"
    >
      <Link href={link} target="_blank" className="block h-full p-8">
        <span className="absolute top-10 right-10 translate-x-0 translate-y-0 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100">
          <LuArrowUpRight />
        </span>
        <div className="relative mb-6 aspect-square w-8 2xl:w-10">
          <Image
            src={`/blog/post-0${id}.svg`}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        <p className="mb-5 text-lg font-semibold">{title}</p>

        <p className="mb-6 text-sm text-zinc-500 2xl:text-base">
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          {tags.map((e) => (
            <span
              key={e.name}
              className={`text-sm font-medium text-zinc-500 transition-colors`}
            >
              #{e.name}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
