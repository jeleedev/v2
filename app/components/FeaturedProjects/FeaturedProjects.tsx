"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProjects() {
  return (
    <motion.section
      id="featured"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full px-5 py-20 lg:px-20 2xl:px-40">
        <div className="mb-10 space-y-4">
          <p className="text-3xl font-semibold tracking-tighter 2xl:text-4xl">
            Featured projects
          </p>
          <p className="text-zinc-700">
            Frontend 기반의 개인 프로젝트와 웹 퍼블리싱 작업을 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .reverse()
            .map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: i * 0.1, // 순차 등장 포인트
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <FeaturedProjectCard {...project} />
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}
