import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Projects — ${site.fullName}`,
  description:
    "Research projects and presentations in microbiology, molecular biology, bioremediation, and food safety.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
