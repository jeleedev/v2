import { motion } from "framer-motion";
import { SiTistory } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { useEffect } from "react";

export default function Header({
  visitorName,
  setVisitorName,
}: {
  visitorName: string;
  setVisitorName: (name: string) => void;
}) {
  useEffect(() => {
    const savedName = localStorage.getItem("visitorName");
    if (savedName) setVisitorName(savedName);
  }, [setVisitorName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVisitorName(value);
    localStorage.setItem("visitorName", value);
  };

  return (
    <header className="absolute top-0 w-full">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mx-auto flex items-center justify-between px-5 py-8 lg:px-20 2xl:px-40"
      >
        <Link href={"/"}>
          <h1 className="text-xl font-semibold tracking-tighter text-zinc-800 2xl:text-2xl">
            J.Portfolio
          </h1>
        </Link>

        <input
          type="text"
          id="visitor-name"
          placeholder="What's your name?"
          value={visitorName}
          onChange={handleChange}
          className="hidden min-w-96 rounded-md border border-black/10 bg-black/5 px-4 py-2 text-[13px] transition-all outline-none focus:border-black/30 focus:bg-black/[0.07] focus:ring-2 focus:ring-black/10 focus:ring-offset-0 md:block"
        />
        <nav aria-label="소셜 미디어">
          <ul className="flex items-center space-x-6 text-xl text-zinc-600 sm:space-x-7 2xl:text-2xl">
            <li className="cursor-pointer transition-all duration-200 active:scale-90">
              <Link
                href={"https://github.com/jeleedev"}
                target="_blank"
                aria-label="GitHub 프로필 (새 창에서 열림)"
              >
                <LuGithub aria-hidden="true" />
              </Link>
            </li>
            <li className="cursor-pointer transition-all duration-200 active:scale-90">
              <Link
                href={"https://mnije.tistory.com/"}
                target="_blank"
                aria-label="Tistory 블로그 (새 창에서 열림)"
              >
                <SiTistory aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* 모바일 input */}
      <div className="px-5 md:hidden">
        <input
          type="text"
          id="visitor-name-mobile"
          placeholder="What's your name?"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
          className="w-full rounded-md border border-black/10 bg-black/5 px-4 py-2 text-[13px] transition-all outline-none focus:border-black/30 focus:bg-black/[0.07] focus:ring-2 focus:ring-black/10 focus:ring-offset-0"
        />
      </div>
    </header>
  );
}
