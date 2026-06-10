import Link from "next/link";
import { ArrowRight, Download, MapPin, Microscope } from "lucide-react";
import { site } from "@/lib/content";
import Reveal from "./Reveal";
import { DnaHelix, Microbe, Coccus, PetriDish, Virus } from "./Science";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-sand/40 blur-3xl"
      />

      {/* Floating microbiology motifs */}
      <Coccus
        aria-hidden="true"
        className="anim-floaty pointer-events-none absolute left-[6%] top-[24%] hidden h-16 w-16 text-slate/30 lg:block"
      />
      <Virus
        aria-hidden="true"
        className="anim-sway pointer-events-none absolute bottom-[14%] left-[10%] hidden h-20 w-20 text-sand/60 lg:block"
      />
      <Microbe
        aria-hidden="true"
        className="anim-floaty-soft pointer-events-none absolute right-[44%] top-[12%] hidden h-12 w-20 text-slate/25 xl:block"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Text column */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate/20 bg-paper/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate">
              <Microscope size={14} aria-hidden="true" />
              {site.role}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-[4.25rem]">
              Hi, I’m <span className="italic text-slate">Kyla Marie</span>
              <br className="hidden sm:block" /> Casimero.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate"
              >
                View my research
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href={site.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate/30 bg-paper px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-slate hover:bg-sky/50"
              >
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted">
              <MapPin size={16} aria-hidden="true" className="text-slate" />
              {site.location}
            </p>
          </Reveal>
        </div>

        {/* Visual column — illustrated specimen card */}
        <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-slate/15 bg-gradient-to-br from-sky-soft via-paper to-sand-soft shadow-card">
              {site.heroPhoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={site.heroPhoto}
                  alt="Kyla Marie M. Casimero"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 p-8 text-center">
                  <div
                    aria-hidden="true"
                    className="bg-dot-grid absolute inset-0 opacity-50"
                  />
                  <DnaHelix className="anim-sway relative h-52 text-navy" />
                  <div className="relative">
                    <p className="font-display text-xl text-navy">
                      Kyla Marie M. Casimero
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate">
                      BS Biology · ISAT&nbsp;U
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Petri dish accent */}
            <PetriDish
              aria-hidden="true"
              className="anim-floaty-slow absolute -right-6 top-10 hidden h-24 w-24 text-slate drop-shadow-lg sm:block"
            />

            {/* Floating stat chips */}
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-slate/10 bg-paper px-5 py-4 shadow-card sm:-left-6">
              <p className="font-display text-2xl font-semibold text-navy">500+</p>
              <p className="text-xs font-medium text-muted">lab hours</p>
            </div>
            <div className="absolute -top-5 -left-2 rounded-2xl border border-slate/10 bg-navy px-5 py-4 text-cream shadow-card">
              <p className="font-display text-2xl font-semibold">1st</p>
              <p className="text-xs font-medium text-sky">best thesis poster</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
