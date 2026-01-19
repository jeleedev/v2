"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiSmugmug } from "react-icons/si";
import FolderCard from "./FolderCard";
import ScrollingText from "./ScrollingText";
import Header from "./Header";
import { useState } from "react";

const folders = [
  { slug: "about", link: "about", color: "bg-pink-500" },
  { slug: "featured", link: "featured", color: "bg-amber-500" },
  { slug: "project", link: "projects", color: "bg-stone-500" },
  { slug: "post", link: "blog", color: "bg-blue-500" },
];

export default function Hero() {
  const [visitorName, setVisitorName] = useState("");

  return (
    <section id="hero">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-full w-full">
          <Image
            src={"/hero/hero-bg.svg"}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <Header visitorName={visitorName} setVisitorName={setVisitorName} />

        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-5 lg:w-fit">
          <div className="mx-auto flex flex-col items-start justify-center">
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 space-x-1.5 text-lg md:text-xl"
              >
                <span className="text-[#878787]">HI</span>
                <span className="font-medium">
                  {visitorName ? visitorName : "STRANGER"}
                </span>
                <span className="inline-block">
                  <SiSmugmug />
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.27 }}
                className="mb-8 text-6xl font-medium tracking-tighter text-zinc-800 sm:text-7xl md:text-8xl"
              >
                <span className="mb-1.5 flex items-center gap-3 md:gap-8">
                  <span>I&apos;m</span>
                  <span>Jeongeun,</span>
                </span>
                <span className="flex flex-col sm:flex-row sm:gap-3 md:gap-8">
                  <span className="mb-1.5 flex items-center gap-3 md:gap-8">
                    <span>Building</span>
                    <span>Web</span>
                  </span>
                  <span>UI.</span>
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.34 }}
                className="text-base text-zinc-700 md:text-lg"
              >
                안녕하세요. 코드와 디자인 사이에서 경험을 설계하는 웹 퍼블리셔
                이정은입니다.
              </motion.p>
            </div>
            <nav
              aria-label="포트폴리오 카테고리"
              className="flex items-center gap-6 sm:gap-12 xl:hidden"
            >
              {folders.map((folder, i) => (
                <motion.ul
                  key={folder.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.45 + i * 0.08,
                  }}
                >
                  <li>
                    <FolderCard {...folder} />
                  </li>
                </motion.ul>
              ))}
            </nav>
          </div>
        </div>

        <nav
          aria-label="포트폴리오 카테고리"
          className="hidden items-center gap-8 xl:absolute xl:top-1/2 xl:left-20 xl:flex xl:-translate-y-1/2 xl:flex-col 2xl:left-40 2xl:gap-10"
        >
          {folders.map((folder, i) => (
            <motion.ul
              key={folder.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.45 + i * 0.08,
              }}
            >
              <li>
                <FolderCard {...folder} />
              </li>
            </motion.ul>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="absolute bottom-0 w-full"
        >
          <div className="flex flex-wrap items-center justify-between px-5 pb-10 text-[#878787] lg:px-20 2xl:px-40">
            <p>2026 Web Publisher Portfolio</p>
            <p>
              © 2026 <span className="text-[#F67373]">Jeongeun Lee</span>.
              Built with Next.js, deployed on Vercel.
            </p>
          </div>
        </motion.div>

        <ScrollingText />
      </div>
    </section>
  );
}
