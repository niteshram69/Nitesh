import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Tech } from "@/components/sections/Tech";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Tech />
      <Contact />
    </main>
  );
}
