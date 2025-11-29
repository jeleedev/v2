"use client";

import { motion } from "framer-motion";
import { posts } from "@/app/data/posts";
import Link from "next/link";
import PostCard from "./PostCard";
import { LuArrowUpToLine } from "react-icons/lu";

export default function Blog() {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full px-5 py-20 lg:px-20 2xl:px-40">
        <div className="mb-10 space-y-4">
          <p className="text-3xl font-semibold tracking-tighter 2xl:text-4xl">
            From the blog
          </p>
          <p className="text-zinc-700">
            코드와 디자인 사이에서 찾은 인사이트와 개발 과정에서 학습한 내용들을
            기록하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: i * 0.06,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <PostCard {...post} />
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center pt-20">
          <Link
            href={"#hero"}
            className="flex items-center gap-2 text-sm opacity-50 transition-all duration-200 hover:opacity-100 2xl:text-base"
          >
            <LuArrowUpToLine />
            <span>Back to Top</span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
