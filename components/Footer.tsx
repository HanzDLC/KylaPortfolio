import { Mail, Facebook, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import Reveal from "./Reveal";
import { DnaHelix } from "./Science";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-navy text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-slate/40 blur-3xl"
      />
      <DnaHelix
        aria-hidden="true"
        className="anim-sway pointer-events-none absolute right-[8%] top-10 hidden h-56 text-cream/10 lg:block"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* CTA */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Let’s collaborate on research, internships, or opportunities in
              the life sciences.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-navy transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Mail size={18} aria-hidden="true" />
              {site.email}
            </a>
          </Reveal>

          {/* Links */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-3 text-cream/85 transition-colors hover:text-cream"
              >
                <Mail size={18} aria-hidden="true" className="text-sky" />
                Email
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-cream/85 transition-colors hover:text-cream"
              >
                <Facebook size={18} aria-hidden="true" className="text-sky" />
                Facebook
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
              <p className="inline-flex items-center gap-3 text-cream/85">
                <MapPin size={18} aria-hidden="true" className="text-sky" />
                {site.location}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-8 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-base text-cream">
            {site.fullName}
          </p>
          <p>
            © {new Date().getFullYear()} · Designed &amp; built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
