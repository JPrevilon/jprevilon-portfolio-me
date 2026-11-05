import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  GitBranch,
  Link as LinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { profile, siteDescription, siteTitle } from "@/data/profile";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: siteTitle,
      description: siteDescription,
    };
  }

  const pageKind = project.status === "Featured" ? "Case Study" : project.status;
  const pageTitle = `${project.name} ${pageKind}`;
  const projectPath = `/projects/${project.slug}`;
  const previewImage = {
    url: project.caseStudyImage,
    width: project.caseStudyImageWidth,
    height: project.caseStudyImageHeight,
    alt: project.caseStudyImageAlt,
  };

  return {
    title: pageTitle,
    description: project.description,
    alternates: {
      canonical: projectPath,
    },
    openGraph: {
      title: `${pageTitle} | Joshua Previlon`,
      description: project.description,
      url: projectPath,
      siteName: "Joshua Previlon Portfolio",
      locale: "en_US",
      type: "website",
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Joshua Previlon`,
      description: project.description,
      images: [previewImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="text-white">
      <section className="site-hero relative border-b border-white/10">
        <div className="animated-grid absolute inset-0" aria-hidden="true" />
        <div className="section-shell relative py-8 sm:py-12 md:py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-zinc-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#37d5ff]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to projects
          </Link>

          <Reveal className="mt-8 grid gap-7 sm:mt-10 sm:gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold text-[#f2c879] sm:text-sm">
                  {project.role}
                </p>
                <span className="premium-chip-strong px-2.5 py-1 text-xs font-semibold">
                  {project.status}
                </span>
              </div>
              <h1 className="mt-4 break-words text-3xl font-semibold leading-[1.08] text-white min-[375px]:text-4xl sm:text-6xl">
                {project.name}
              </h1>
              <p className="mt-4 break-words text-base leading-7 text-[#37d5ff] sm:text-xl sm:leading-8">
                {project.subtitle}
              </p>
              <p className="mt-5 text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
                {project.description}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-2 min-[360px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
                {project.links?.github ? (
                  <ButtonLink
                    href={project.links.github}
                    external
                    icon={<GitBranch size={18} aria-hidden="true" />}
                    className="w-full sm:w-auto"
                  >
                    GitHub
                  </ButtonLink>
                ) : null}
                {project.links?.demo ? (
                  <ButtonLink
                    href={project.links.demo}
                    external
                    icon={<ExternalLink size={18} aria-hidden="true" />}
                    className="w-full sm:w-auto"
                  >
                    {project.status === "Live Website" ? "Live Website" : project.status === "Website Preview" ? "View Preview" : "Live Demo"}
                  </ButtonLink>
                ) : null}
                <ButtonLink
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    `${project.name} case study`,
                  )}`}
                  external
                  variant="primary"
                  icon={<LinkIcon size={18} aria-hidden="true" />}
                  className="w-full sm:w-auto"
                >
                  Discuss Project
                </ButtonLink>
              </div>
            </div>

            <figure className="glass-card overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1280}
                height={720}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      <article className="section-shell py-12 md:py-20">
        <div className="grid gap-9 sm:gap-12 lg:grid-cols-[0.7fr_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass-card p-4 sm:p-5 md:p-6">
              <h2 className="text-sm font-semibold text-[#f2c879]">
                Tech Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="premium-chip px-2.5 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <h2 className="text-sm font-semibold text-[#f2c879]">Role</h2>
                <p className="mt-3 break-words text-zinc-300">
                  {project.role}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <h2 className="text-sm font-semibold text-[#f2c879]">Links</h2>
                <div className="mt-4 flex flex-col items-start gap-3 text-sm">
                  {project.links?.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
                    >
                      <GitBranch size={16} aria-hidden="true" />
                      GitHub repository
                    </a>
                  ) : null}
                  {project.links?.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      {project.status === "Live Website" ? "Live website" : project.status === "Website Preview" ? "View preview" : "Live demo"}
                    </a>
                  ) : null}
                  {!project.links?.github && !project.links?.demo ? (
                    <p className="leading-7 text-zinc-400">
                      Additional implementation details available on request.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-10 sm:space-y-12">
            <CaseStudySection title="Overview">
              <p>{project.description}</p>
              <p className="mt-4 text-[#37d5ff]">{project.caseStudyAngle}</p>
            </CaseStudySection>

            <CaseStudySection title="Role-Fit Signals">
              <div className="flex flex-wrap gap-2">
                {project.roleFit.map((signal) => (
                  <span
                    key={signal}
                    className="premium-chip-strong px-2.5 py-1 text-xs font-medium sm:text-sm"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection title="Problem">
              <p>{project.problem}</p>
            </CaseStudySection>

            <CaseStudySection title="Architecture / Data Flow">
              <List items={project.architecture} />
            </CaseStudySection>

            <CaseStudySection title="Key Features">
              <List items={project.highlights} />
            </CaseStudySection>

            <CaseStudySection title="Engineering Decisions">
              <List items={project.decisions} />
            </CaseStudySection>

            <CaseStudySection title="Implementation Notes">
              <List items={project.quality} />
            </CaseStudySection>

            <CaseStudySection title={project.visualNote ? "Concept Visual" : project.imageCaption ? "Website Imagery" : "Screenshots"}>
              <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0b]">
                <Image
                  src={project.caseStudyImage}
                  alt={project.caseStudyImageAlt}
                  width={project.caseStudyImageWidth}
                  height={project.caseStudyImageHeight}
                  className="h-auto w-full object-cover"
                />
                <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-zinc-400">
                  {project.visualNote ?? project.imageCaption ?? `${project.name} visual reference.`}
                </figcaption>
              </figure>
            </CaseStudySection>

            <CaseStudySection title="What I Would Improve Next">
              <List items={project.improvements} />
            </CaseStudySection>
          </div>
        </div>
      </article>
    </main>
  );
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-white/10 pb-9 last:border-b-0 sm:pb-10">
      <h2 className="flex min-w-0 items-center gap-2.5 text-xl font-semibold leading-tight text-white sm:gap-3 sm:text-2xl">
        <span className="h-px w-6 shrink-0 bg-[#f2c879]/70 sm:w-8" />
        {title}
      </h2>
      <div className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 sm:space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 sm:gap-3">
          <span className="mt-2.5 size-1.5 shrink-0 rounded-md bg-[#37d5ff] sm:mt-3" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
