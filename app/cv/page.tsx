import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CV from "@/components/CV";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `CV — ${site.fullName}`,
  description:
    "Curriculum vitae of Kyla Marie M. Casimero — education, research experience, skills, awards, and certifications.",
};

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main>
        <CV />
      </main>
      <Footer />
    </>
  );
}
