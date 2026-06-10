import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Dna,
  HeartPulse,
  Leaf,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import { about, projects, type Project } from "@/lib/content";
import Reveal from "./Reveal";
import Sci from "./Sci";
import { PetriDish, Coccus, Molecule } from "./Science";

const iconMap: Record<Project["icon"], LucideIcon> = {
  leaf: Leaf,
  microscope: Microscope,
  dna: Dna,
  flask: HeartPulse,
  heart: HeartPulse,
};

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

        {/* Selected projects preview */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
                  Selected Projects
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                  A snapshot of my research.
                </h3>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate transition-colors hover:text-navy"
              >
                View all projects
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <Reveal key={p.title} delay={i * 70}>
                  <Link
                    href="/projects"
                    className="group flex h-full gap-4 rounded-2xl border border-slate/12 bg-cream p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate/25 hover:shadow-soft"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky/60 text-slate transition-colors group-hover:bg-sky">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-base font-semibold leading-snug text-navy">
                        <Sci text={p.shortTitle} />
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink/70">
                        <Sci text={p.short} />
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {p.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-sand-soft px-2.5 py-0.5 text-xs font-medium text-navy"
                          >
                            {t}
                          </span>
                        ))}
                        {p.badge && (
                          <span className="rounded-full bg-navy px-2.5 py-0.5 text-xs font-semibold text-cream">
                            {p.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
