"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/content";

const links = [
  { label: "About Me", href: "/#about", match: "/" },
  { label: "Projects", href: "/projects", match: "/projects" },
  { label: "CV", href: "/cv", match: "/cv" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solid on non-home pages, or once the user scrolls on the home page.
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate/10 bg-cream/85 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${site.fullName} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-cream">
            KC
          </span>
          <span className="hidden font-display text-lg font-medium tracking-tight text-navy sm:block">
            Kyla Casimero
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.match !== "/" && pathname === l.match;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-sky/60 hover:text-navy ${
                  active ? "bg-sky/70 text-navy" : "text-ink/75"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-colors hover:bg-slate"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-sky/60 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="space-y-1 border-t border-slate/10 bg-cream/95 px-5 pb-6 pt-3 backdrop-blur-md">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-sky/60 hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-base font-semibold text-cream"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
