import {
  Activity,
  Code2,
  Database,
  Download,
  GitBranch,
  Link2,
  Mail,
  MapPin,
  Radio,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";
import {
  certifications,
  heroBadges,
  mediaEdgeCards,
  mediaEdgeIntro,
  profile,
  recruiterSnapshot,
} from "@/data/profile";
import { projects } from "@/data/projects";
import { stackGroups, strengths } from "@/data/skills";

export default function Home() {
  const snapshotIcons = [Server, Activity, Sparkles, Radio] as const;
  const stackIcons = [Code2, Server, ShieldCheck, Terminal, Database, Sparkles];

  return (
    <main className="overflow-hidden text-white">
      <section
        id="home"
        className="site-hero relative border-b border-white/10"
        aria-labelledby="hero-title"
      >
        <div className="animated-grid absolute inset-0" aria-hidden="true" />
        <div className="section-shell relative flex items-center py-7 sm:min-h-[76svh] sm:py-12 lg:py-14">
          <Reveal className="max-w-5xl">
            <div className="hidden max-w-xl flex-col gap-4 sm:flex sm:flex-row sm:items-center">
              <Image
                src="/brand/jp-logo.svg"
                alt=""
                width={84}
                height={84}
                className="size-14 shrink-0 sm:size-20"
                loading="eager"
              />
              <Image
                src="/brand/jp-wordmark.svg"
                alt="Joshua Previlon Software Engineer wordmark"
                width={520}
                height={137}
                className="hidden h-auto w-full max-w-sm rounded-lg border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.32)] sm:block sm:max-w-md"
                loading="eager"
              />
            </div>
            <p className="inline-flex max-w-full items-center gap-2 rounded-md border border-[#f2c879]/35 bg-[#f2c879]/10 px-3 py-2 text-left text-sm font-semibold leading-5 text-[#f2c879] sm:mt-5">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </p>
            <p className="mt-5 text-lg font-semibold text-[#37d5ff] sm:mt-6">
              {profile.name}
            </p>
            <p className="mt-2 text-lg text-zinc-300 sm:text-xl">
              {profile.title}
            </p>
            <p className="mt-1 break-words text-sm font-medium text-zinc-500 sm:text-base">
              {profile.secondaryTitle}
            </p>
            <h1
              id="hero-title"
              className="mt-4 max-w-5xl text-3xl font-semibold leading-[1.06] text-white sm:mt-5 sm:text-5xl lg:text-6xl"
            >
              {profile.headline}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 sm:mt-5 sm:text-lg sm:leading-8">
              {profile.supportingCopy}
            </p>

            <div className="mt-5 grid max-w-md grid-cols-1 gap-2 min-[360px]:grid-cols-2 sm:mt-6 sm:flex sm:max-w-none sm:flex-wrap sm:gap-3">
              <ButtonLink href="/#projects" variant="primary" className="w-full sm:w-auto">
                View Projects
              </ButtonLink>
              <ButtonLink
                href={profile.github}
                external
                icon={<GitBranch size={18} aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                View GitHub
              </ButtonLink>
              <ButtonLink
                href={`mailto:${profile.email}`}
                external
                icon={<Mail size={18} aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Contact Me
              </ButtonLink>
              <ButtonLink
                href={profile.resumePath}
                download
                icon={<Download size={18} aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </ButtonLink>
            </div>

            <div
              className="mt-6 flex max-w-4xl flex-wrap gap-2 sm:mt-8"
              aria-label="Credibility badges"
            >
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="premium-chip px-2.5 py-1.5 text-xs font-medium sm:px-3 sm:py-2 sm:text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-surface border-b border-white/10" aria-labelledby="snapshot-title">
        <div className="section-shell py-14 md:py-20">
          <Reveal>
            <SectionHeading
              id="snapshot-title"
              eyebrow="Recruiter Snapshot"
              title="Frontend systems work for products with operational depth."
            >
              {profile.positioning}
            </SectionHeading>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {recruiterSnapshot.map((item, index) => {
              const Icon = snapshotIcons[index];
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="glass-card h-full p-4 sm:p-5 md:p-6">
                    <div className="flex size-10 items-center justify-center rounded-lg border border-[#37d5ff]/25 bg-[#37d5ff]/10 text-[#37d5ff] sm:size-11">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold leading-6 text-white sm:mt-5 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-zinc-300 sm:text-sm sm:leading-7">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10" aria-labelledby="projects-title">
        <div className="section-shell py-14 md:py-24">
          <Reveal>
            <SectionHeading
              id="projects-title"
              eyebrow="Featured Projects"
              title="Live websites and case studies across interactive frontend experiences, dashboards, and real-time systems."
            >
              Selected work showing product ownership, structured data flow,
              dashboard UX, API integration, and operational thinking.
            </SectionHeading>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section-surface border-b border-white/10" aria-labelledby="stack-title">
        <div className="section-shell py-14 md:py-24">
          <Reveal>
            <SectionHeading
              id="stack-title"
              eyebrow="Technical Stack"
              title="A practical stack for infrastructure-facing product work."
            >
              Organized around how Joshua ships: clean interfaces, API
              contracts, testable workflows, and system behavior that is easier
              to inspect.
            </SectionHeading>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group, index) => {
              const Icon = stackIcons[index] ?? Terminal;
              return (
                <Reveal key={group.title} delay={(index % 3) * 0.05}>
                  <article className="glass-card h-full p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-lg border border-[#f2c879]/30 bg-[#f2c879]/10 text-[#f2c879]">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                        {group.title}
                      </h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="premium-chip px-2.5 py-1 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-white/10" aria-labelledby="experience-title">
        <div className="section-shell py-14 md:py-24">
          <Reveal>
            <SectionHeading
              id="experience-title"
              eyebrow="Experience"
              title="Product engineering with a production reliability streak."
            >
              A timeline spanning full-stack product ownership, data-heavy
              interfaces, testing, workflow reliability, and technical media
              operations.
            </SectionHeading>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.title}`} delay={index * 0.05}>
                <article className="glass-card p-4 sm:p-5 md:p-7">
                  <div className="grid gap-4 md:grid-cols-[0.7fr_1fr] md:gap-5">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="flex size-8 items-center justify-center rounded-lg border border-[#f2c879]/30 bg-[#f2c879]/10 text-xs font-bold text-[#f2c879]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-xs font-semibold text-[#f2c879] sm:text-sm">
                          {item.dates}
                        </p>
                      </div>
                      <h3 className="mt-2 break-words text-xl font-semibold leading-tight text-white sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-300 sm:text-base">
                        {item.company} · {item.employmentType}
                      </p>
                      {item.location ? (
                        <p className="mt-1 text-sm text-zinc-500">
                          {item.location}
                        </p>
                      ) : null}
                    </div>
                    <ul className="space-y-2.5 text-[13px] leading-6 text-zinc-300 sm:text-sm sm:leading-7">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 sm:gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-md bg-[#37d5ff]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface border-b border-white/10" aria-labelledby="strengths-title">
        <div className="section-shell py-14 md:py-24">
          <Reveal>
            <SectionHeading
              id="strengths-title"
              eyebrow="Engineering Strengths"
              title="The habits behind the interfaces."
            >
              Strengths tuned for teams building complex workflows,
              infrastructure-facing dashboards, internal tools, AI-enabled
              products, and operational product surfaces.
            </SectionHeading>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {strengths.map((strength, index) => (
              <Reveal key={strength} delay={(index % 4) * 0.04}>
                <article className="glass-card h-full p-4 md:p-5">
                  <ShieldCheck
                    className="text-[#c85a52]"
                    size={20}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-sm font-semibold leading-6 text-white sm:text-base">
                    {strength}
                  </h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10" aria-labelledby="media-title">
        <div className="section-shell grid gap-8 py-14 md:gap-10 md:py-24 lg:grid-cols-[0.85fr_1fr]">
          <Reveal>
            <SectionHeading
              id="media-title"
              eyebrow="Media / Production Edge"
              title="A media background that strengthens software delivery."
            >
              {mediaEdgeIntro}
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {mediaEdgeCards.map((item) => (
                <article key={item.title} className="glass-card p-4 sm:p-5">
                  <div className="flex gap-3 sm:gap-4">
                    <Radio
                      className="mt-1 shrink-0 text-[#37d5ff]"
                      size={20}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-surface border-b border-white/10" aria-labelledby="certifications-title">
        <div className="section-shell py-14 md:py-24">
          <Reveal>
            <SectionHeading
              id="certifications-title"
              eyebrow="Education & Learning"
              title="Computer science education and continued learning."
            >
              Computer science degrees, security
              fundamentals, and modern AI workflow learning.
            </SectionHeading>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification, index) => (
              <Reveal key={certification.title} delay={index * 0.05}>
                <article className="glass-card h-full p-4 sm:p-5">
                  <p className="text-sm font-semibold text-[#37d5ff]">
                    {certification.issuer}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-tight text-white sm:text-xl">
                    {certification.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-zinc-300 sm:text-sm sm:leading-7">
                    {certification.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-band" aria-labelledby="contact-title">
        <div className="section-shell grid gap-8 py-14 md:py-24 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold text-[#f2c879]">Contact CTA</p>
            <h2
              id="contact-title"
              className="mt-3 text-2xl font-semibold leading-tight text-white min-[375px]:text-3xl sm:text-5xl"
            >
              {profile.contactCta}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-card grid gap-4 p-4 sm:p-5 md:p-6">
              <div className="grid gap-2 text-sm sm:grid-cols-[9rem_1fr]">
                <span className="font-semibold text-white">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-zinc-300 transition hover:text-[#37d5ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
                >
                  {profile.email}
                </a>
              </div>
              <div className="grid gap-2 text-sm sm:grid-cols-[9rem_1fr]">
                <span className="font-semibold text-white">Location</span>
                <span className="text-zinc-300">{profile.location}</span>
              </div>
              <div className="grid gap-2 text-sm sm:grid-cols-[9rem_1fr]">
                <span className="font-semibold text-white">Focus</span>
                <span className="text-zinc-300">
                  Frontend infrastructure, React/TypeScript interfaces,
                  observability UI, APIs, dashboards, developer tools, and
                  media-aware systems.
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-3">
                <ButtonLink
                  href={`mailto:${profile.email}`}
                  external
                  variant="primary"
                  icon={<Mail size={18} aria-hidden="true" />}
                  className="w-full sm:w-auto"
                >
                  Email Joshua
                </ButtonLink>
                <ButtonLink
                  href={profile.github}
                  external
                  icon={<GitBranch size={18} aria-hidden="true" />}
                  className="w-full sm:w-auto"
                >
                  GitHub
                </ButtonLink>
                <ButtonLink
                  href={profile.linkedin}
                  external
                  icon={<Link2 size={18} aria-hidden="true" />}
                  className="w-full sm:w-auto"
                >
                  LinkedIn
                </ButtonLink>
                <ButtonLink
                  href={profile.resumePath}
                  download
                  icon={<Download size={18} aria-hidden="true" />}
                  className="w-full sm:w-auto"
                >
                  Download Resume
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
