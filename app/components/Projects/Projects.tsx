import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="w-full px-5 py-20 lg:px-20 2xl:px-40">
        <div className="mb-10 space-y-4">
          <p className="text-3xl font-semibold tracking-tighter 2xl:text-4xl">
            All projects
          </p>
          <p className="text-zinc-700">
            Frontend 기반의 개인 프로젝트와 웹 퍼블리싱 작업들입니다.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {[...projects].reverse().map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
