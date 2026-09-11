import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  About,
  CallToAction,
  Certifications,
  Contact,
  Education,
  Experience,
  Expertise,
  Footer,
  Hero,
  Languages,
  Projects,
  Services,
  Skills,
} from "@/components/portfolio/Sections";


const title = "Monmon Ghosh | CSE Student Portfolio";
const description =
  "Portfolio of Monmon Ghosh, B.Tech Computer Science & Engineering student at Adamas University (2023–2027) — internships, AI projects and technical skills.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
