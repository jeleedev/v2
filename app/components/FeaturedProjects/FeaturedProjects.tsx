import { projects } from "@/app/data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="featured">
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
            .map((project) => (
              <FeaturedProjectCard key={project.slug} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}
