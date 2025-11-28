import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Footer from "./components/common/Footer";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}
