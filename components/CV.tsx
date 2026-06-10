import { Download } from "lucide-react";
import {
  site,
  about,
  education,
  experience,
  research,
  skills,
  awards,
  activities,
} from "@/lib/content";
import Reveal from "./Reveal";
import Sci from "./Sci";
import { DnaHelix, Coccus } from "./Science";

export default function CV() {
  return (
    <section
      id="cv"
      className="cv-doc relative overflow-hidden bg-gradient-to-b from-slate-deep to-navy-deep py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20"
      />
      <DnaHelix
        aria-hidden="true"
        className="anim-sway pointer-events-none absolute -left-2 top-32 hidden h-72 text-cream/10 xl:block"
      />
      <Coccus
        aria-hidden="true"
        className="anim-floaty pointer-events-none absolute -right-2 bottom-40 hidden h-24 w-24 text-cream/10 xl:block"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-8">
        {/* Section chrome (not part of the printed document) */}
        <Reveal>
          <div className="no-print mb-10 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky">
                Curriculum Vitae
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                Education, experience &amp; achievements.
              </h2>
            </div>
            <a
              href={site.cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-navy shadow-card transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Download size={18} aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </Reveal>

        {/* ===================== PAGE 1 ===================== */}
        <Reveal delay={60}>
          <article className="cv-paper">
            {/* Centered personal information */}
            <header className="cv-head">
              <h3 className="cv-name">{site.fullName}</h3>
              <p className="cv-role">{site.role}</p>
              <div className="cv-contacts">
                <span>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
                <span className="sep" aria-hidden="true">
                  •
                </span>
                <span>
                  <strong>Facebook:</strong>{" "}
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                    facebook.com/kylamariemcasimero
                  </a>
                </span>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="cv-sec">
              <h4 className="cv-sec-title">Professional Summary</h4>
              <p className="cv-summary">
                {about.summary} {about.mission}
              </p>
            </section>

            {/* Education */}
            <section className="cv-sec">
              <h4 className="cv-sec-title">Education</h4>
              {education.map((e) => (
                <div className="cv-entry" key={e.degree}>
                  <div className="cv-entry-head">
                    <div>
                      <p className="cv-entry-title">{e.degree}</p>
                      <p className="cv-entry-sub">{e.detail}</p>
                    </div>
                    <div className="cv-entry-meta">
                      <span className="cv-entry-date">{e.period}</span>
                      <span className="cv-entry-org">{e.school}</span>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Experience & Organizational Involvements */}
            <section className="cv-sec">
              <h4 className="cv-sec-title">
                Experience &amp; Organizational Involvements
              </h4>
              {experience.map((job) => (
                <div className="cv-entry" key={job.role}>
                  <div className="cv-entry-head">
                    <div>
                      <p className="cv-entry-title">{job.role}</p>
                      <p className="cv-entry-sub">{job.org}</p>
                    </div>
                  </div>
                  <ul className="cv-bullets">
                    {job.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </article>
        </Reveal>

        {/* ===================== PAGE 2 ===================== */}
        <Reveal delay={80}>
          <article className="cv-paper">
            {/* Research and Presentations (verbatim) */}
            <section className="cv-sec">
              <h4 className="cv-sec-title">Research and Presentations</h4>
              <ul className="cv-bullets">
                {research.presentations.map((title) => (
                  <li key={title}>
                    <Sci text={title} />
                  </li>
                ))}
              </ul>
              <div className="cv-entry" style={{ marginTop: "0.6rem" }}>
                <div className="cv-entry-head">
                  <div>
                    <p className="cv-entry-title">
                      {research.specialProblem.label}
                    </p>
                  </div>
                  <div className="cv-entry-meta">
                    <span className="cv-entry-date">
                      {research.specialProblem.meta}
                    </span>
                  </div>
                </div>
                <ul className="cv-bullets">
                  {research.specialProblem.items.map((item) => (
                    <li key={item}>
                      <Sci text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Key Skills */}
            <section className="cv-sec">
              <h4 className="cv-sec-title">Key Skills</h4>
              {skills.map((s) => (
                <p className="cv-skill-line" key={s.group}>
                  <strong>{s.group}:</strong> {s.items.join(", ")}
                </p>
              ))}
            </section>

            {/* Awards & Achievements */}
            <section className="cv-sec">
              <h4 className="cv-sec-title">Awards &amp; Achievements</h4>
              <ul className="cv-bullets">
                {awards.map((a) => (
                  <li key={a.title}>
                    {a.title} — {a.org} ({a.year})
                  </li>
                ))}
              </ul>
            </section>

            {/* Leadership & Certifications (verbatim) */}
            <section className="cv-sec">
              <h4 className="cv-sec-title">Leadership &amp; Certifications</h4>
              <ul className="cv-bullets">
                {activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
