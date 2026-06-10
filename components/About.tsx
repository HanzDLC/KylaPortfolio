import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { about } from "@/lib/content";
import Reveal from "./Reveal";
import { PetriDish, Coccus, Molecule } from "./Science";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-20 sm:py-24">
      {/* Decorative science motifs */}
      <Coccus
        aria-hidden="true"
        className="anim-floaty pointer-events-none absolute -left-6 top-12 hidden h-20 w-20 text-slate/15 lg:block"
      />
      <Molecule
        aria-hidden="true"
        className="anim-floaty-soft pointer-events-none absolute -right-4 bottom-10 hidden h-24 w-32 text-slate/15 lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Summary */}
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
                About Me
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Research-driven & sustainability-minded.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
                {about.shortBio}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {about.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-slate/20 bg-cream px-4 py-1.5 text-sm font-medium text-navy"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate"
                >
                  Explore my projects
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  href="/cv"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate/30 bg-paper px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-slate hover:bg-sky/50"
                >
                  <FileText size={18} aria-hidden="true" />
                  View full CV
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Petri-dish illustration */}
          <Reveal delay={160} className="mx-auto w-full max-w-xs">
            <div className="relative aspect-square rounded-3xl border border-slate/12 bg-gradient-to-br from-sky-soft to-cream p-8 shadow-soft">
              <PetriDish className="anim-spin-slow h-full w-full text-slate" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
