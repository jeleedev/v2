import { SiHashnode, SiNotion } from "react-icons/si";
import { LuGithub } from "react-icons/lu";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-100">
      <div className="mx-auto flex flex-col items-center justify-between px-5 py-12 pb-20 lg:px-20 2xl:px-40">
        <div className="flex w-full flex-col items-center justify-between pb-10 lg:flex-row">
          <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:gap-16 lg:mb-0">
            <p className="font-semibold text-zinc-800">J.Portfolio</p>
            <ul className="flex flex-col items-center gap-8 text-sm text-zinc-500 transition-all duration-300 sm:flex-row">
              <li className="hover:text-zinc-800">
                <Link href={"#hero"}>Hero</Link>
              </li>
              <li className="hover:text-zinc-800">
                <Link href={"#about"}>About</Link>
              </li>
              <li className="hover:text-zinc-800">
                <Link href={"#featured"}>Featured</Link>
              </li>
              <li className="hover:text-zinc-800">
                <Link href={"#projects"}>Projects</Link>
              </li>
              <li className="hover:text-zinc-800">
                <Link href={"#blog"}>Blog</Link>
              </li>
            </ul>
          </div>

          <ul className="flex items-center space-x-5 text-sm text-zinc-700">
            <li className="cursor-pointer rounded-full border border-zinc-300 p-3 transition-all duration-300 hover:bg-white/70 hover:text-zinc-900">
              <Link href="https://github.com/jeonqeun" target="_blank">
                <LuGithub />
              </Link>
            </li>
            <li className="cursor-pointer rounded-full border border-zinc-300 p-3 transition-all duration-300 hover:bg-white/70 hover:text-zinc-900">
              <Link href="https://jeongeun.hashnode.dev" target="_blank">
                <SiHashnode />
              </Link>
            </li>
            <li className="cursor-pointer rounded-full border border-zinc-300 p-3 transition-all duration-300 hover:bg-white/70 hover:text-zinc-900">
              <Link href="" target="_blank">
                <SiNotion />
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full border-t border-zinc-300 pt-10">
          <p className="text-center text-sm text-zinc-500">
            © 2025 Jeongeun Lee. Built with Next.js, deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
