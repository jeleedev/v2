import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}
