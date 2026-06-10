"use client";

import { useMemo, useState } from "react";
import {
  Dna,
  FlaskConical,
  HeartPulse,
  Leaf,
  Microscope,
  Award,
  type LucideIcon,
} from "lucide-react";
import { projects, projectFilters, type Project } from "@/lib/content";
import Reveal from "./Reveal";
import Sci from "./Sci";
import { Molecule, Virus, Coccus } from "./Science";

const iconMap: Record<Project["icon"], LucideIcon> = {
  leaf: Leaf,
  microscope: Microscope,
  dna: Dna,
  flask: FlaskConical,
  heart: HeartPulse,
};

const accentMap: Record<
  Project["accent"],
  { band: string; chip: string }
> = {
  slate: { band: "from-slate to-slate-deep", chip: "bg-sky/70 text-navy" },
  navy: { band: "from-navy to-navy-deep", chip: "bg-sky/70 text-navy" },
  sand: { band: "from-sand to-slate", chip: "bg-sand-soft text-navy" },
};

export default function Projects() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.filters.includes(active));
  }, [active]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-cream pb-20 pt-28 sm:pb-24 sm:pt-32"
    >
      <Virus
        aria-hidden="true"
        className="anim-sway pointer-events-none absolute right-[5%] top-24 hidden h-20 w-20 text-slate/15 lg:block"
      />
      <Coccus
        aria-hidden="true"
        className="anim-floaty pointer-events-none absolute left-[3%] bottom-24 hidden h-20 w-20 text-slate/12 lg:block"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate">
            Projects
          </p>
          <div className="mt-3 flex items-start justify-between gap-6">
            <h1 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
              Selected research &amp; presentations.
            </h1>
            <Molecule
              aria-hidden="true"
              className="hidden h-16 w-24 shrink-0 text-slate/40 sm:block"
            />
          </div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
            From bioremediation and food-safety microbiology to molecular
            genetics and clinical case studies.
          </p>
        </Reveal>

        {/* Filter */}
        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Filter projects by area"
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {projectFilters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-navy text-cream shadow-soft"
                      : "border border-slate/20 bg-paper text-ink/70 hover:border-slate hover:text-navy"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => {
            const Icon = iconMap[project.icon];
            const accent = accentMap[project.accent];
            return (
              <Reveal key={project.title} delay={i * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate/12 bg-paper shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  {/* Media: real photo if provided, else illustrated band */}
                  <div
                    className={`relative flex h-40 items-center justify-between overflow-hidden bg-gradient-to-br ${accent.band} px-6`}
                  >
                    {project.image ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      </>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="bg-dot-grid absolute inset-0 opacity-25"
                      />
                    )}
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-cream/95 text-navy shadow-sm">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    {project.badge && (
                      <span className="relative inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
                        <Award size={14} aria-hidden="true" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold leading-snug text-navy">
                      <Sci text={project.title} />
                    </h2>
                    {project.meta && (
                      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate">
                        {project.meta}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      <Sci text={project.blurb} />
                    </p>

                    {/* Methods */}
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        Methods
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {project.methods.map((m) => (
                          <li
                            key={m}
                            className="rounded-md bg-cream px-2.5 py-1 text-xs font-medium text-ink/75"
                          >
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${accent.chip}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
