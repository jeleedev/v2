"use client";

import { motion } from "framer-motion";
import { tools } from "@/app/data/tools";
import Image from "next/image";
import ToolItem from "./ToolItem";
import { LuMail, LuPhone, LuCalendar, LuMapPin } from "react-icons/lu";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full px-5 py-20 lg:px-20 2xl:px-40">
        <p className="mb-10 text-3xl font-semibold tracking-tighter 2xl:text-4xl">
          About
        </p>

        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-20 2xl:gap-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="flex w-full shrink-0 flex-col gap-8 sm:flex-row lg:w-fit lg:flex-col"
          >
            <div className="relative aspect-square w-full shrink-0 sm:w-40 lg:w-80">
              <Image
                src={"/common/profile.png"}
                alt=""
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="w-full min-w-0 border-t border-b border-zinc-200 px-1 py-6">
              <p className="mb-4 text-lg font-medium">이정은 LEE JEONGEUN</p>
              <div className="space-y-1 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <LuCalendar />
                  <span>1998.03.07</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuMapPin />
                  <span>Busan, South Korea</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuPhone />
                  <span>010-7259-0307</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuMail />
                  <span>jeunlee.dev@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true }}
            className="min-w-0 flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-6 border-b border-zinc-200 pr-5 pb-10 lg:pb-14 2xl:flex-row 2xl:gap-14"
            >
              <p className="min-w-28 font-medium uppercase">about me</p>
              <div className="leading-loose">
                <p className="mb-6">
                  웹 퍼블리셔는 코드와 디자인 사이에서 경험을 만드는 직업이라고
                  생각합니다. 의미 있는 사용자 경험을 위한 디테일한 고민과, 그
                  결과가 코드를 통해 화면에 구현되는 순간의 즐거움을 느끼며,
                  끊임없이 진화하는 웹 퍼블리싱의 세계에서 유연하게 적응하고
                  꾸준히 성장하는 퍼블리셔가 되겠습니다.
                </p>
                <ul className="list-disc pl-6">
                  <li className="py-0.5">
                    퍼블리싱 역량을 기반으로 프론트엔드 개발 흐름과 관련 기술
                    전반을 폭넓게 이해하고 있습니다.
                  </li>

                  <li className="py-0.5">
                    웹 표준과 접근성을 준수하는 퍼블리싱 역량을 키우기 위해
                    웹디자인개발기능사 자격을 취득을 준비 중입니다.
                  </li>

                  <li className="py-0.5">
                    비전공자로서 부족한 컴퓨터공학 기초를 보완하기 위해
                    정보처리기사를 취득했습니다.
                  </li>
                  <li className="py-0.5">
                    인공지능(AI)를 실무에 접목해 더 나은 결과를 만들어낼 수 있는
                    방법에 대해 고민하고 있습니다.
                  </li>
                  <li className="py-0.5">
                    코드와 디자인 사이에서 얻은 인사이트와 개발 과정에서 배운
                    내용을 블로그에 기록하고 공유하고 있습니다.
                  </li>
                  <li className="py-0.5">
                    다양한 직군과 원활하게 협업하기 위해 웹 디자인뿐 아니라
                    개발, 기획, 마케팅 등 여러 분야에도 관심을 넓혀가고
                    있습니다.
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.32 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-between gap-10 border-b border-zinc-200 py-10 pr-5 lg:gap-20 lg:py-14"
            >
              <div className="flex flex-col items-start gap-6 2xl:flex-row 2xl:gap-14">
                <p className="min-w-28 font-medium uppercase">education</p>
                <ul className="space-y-8">
                  <li>
                    <p className="mb-1 text-sm text-zinc-500">
                      2019.03 ~ 2025.02
                    </p>
                    <p className="mb-1 text-lg font-medium tracking-tight">
                      목포대학교 국어국문학과 졸업
                    </p>
                  </li>
                  <li>
                    <p className="mb-1 text-sm text-zinc-500">
                      2022.06 ~ 2022.11
                    </p>
                    <p className="mb-1 text-lg font-medium tracking-tight">
                      [디지털컨버전스] 리액트 활용 프론트엔드 개발자 양성과정
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex min-w-50 flex-1 flex-col items-start gap-6 2xl:flex-row 2xl:gap-14">
                <p className="min-w-28 font-medium uppercase">license</p>
                <ul className="space-y-8">
                  <li>
                    <p className="mb-1 text-sm text-zinc-500">2025.10 ~</p>
                    <p className="mb-1 text-lg font-medium tracking-tight">
                      웹디자인개발기능사 필기
                    </p>
                  </li>
                  <li>
                    <p className="mb-1 text-sm text-zinc-500">2024.12</p>
                    <p className="mb-1 text-lg font-medium tracking-tight">
                      정보처리기사
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.39 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-6 pt-10 pr-5 lg:pt-14 2xl:flex-row 2xl:gap-14"
            >
              <p className="min-w-28 font-medium uppercase">USED TOOLS</p>
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="mb-4">FRONTEND</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {tools.slice(0, 8).map((tool) => (
                      <ToolItem key={tool.id} {...tool} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-4">DESIGN & COMMUNICATION</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {tools.slice(-3).map((tool) => (
                      <ToolItem key={tool.id} {...tool} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
