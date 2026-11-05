import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
        aria-label={`Read the ${project.name} case study`}
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#0b0b0b]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            preload={priority}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-transparent to-black/18" />
          <span className="premium-chip-strong absolute right-4 top-4 px-2.5 py-1 text-xs font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
            {project.status}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-[#f2c879] sm:text-sm">
            {project.role}
          </p>
          <h3 className="mt-2 break-words text-xl font-semibold leading-tight text-white sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 break-words text-[13px] font-medium leading-6 text-[#37d5ff] sm:text-sm">
            {project.subtitle}
          </p>
          <p className="mt-4 text-sm leading-6 text-zinc-300 sm:leading-7">
            {project.description}
          </p>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4 sm:pt-5">
          <p className="text-xs font-semibold text-zinc-500">Top Signals</p>
          <ul className="mt-2 space-y-2 text-[13px] leading-6 text-zinc-300 sm:text-sm">
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li
                key={highlight}
                className={`${index > 1 ? "hidden sm:flex" : "flex"} gap-2.5 sm:gap-3`}
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-md bg-[#37d5ff]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="premium-chip px-2.5 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <dl className="mt-5 grid gap-4 border-t border-white/10 pt-5 text-sm">
          <div>
            <dt className="font-semibold text-white">Role-Fit Signals</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
              {project.roleFit.map((signal) => (
                <span
                  key={signal}
                  className="premium-chip-strong px-2.5 py-1 text-xs font-medium"
                >
                  {signal}
                </span>
              ))}
            </dd>
          </div>
          <div className="hidden sm:block">
            <dt className="font-semibold text-white">Case Study Focus</dt>
            <dd className="mt-1 leading-6 text-zinc-400">
              {project.caseStudyAngle}
            </dd>
          </div>
        </dl>

        <div className="mt-auto grid grid-cols-1 gap-2 pt-5 min-[360px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-3 sm:pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-[#f2c879]/60 bg-[#f2c879]/10 px-3 py-2 text-center text-sm font-semibold text-[#f2c879] transition hover:border-[#ffe1a1] hover:bg-[#f2c879]/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff] sm:w-auto"
          >
            {project.status === "Live Website" ? "Project Details" : "Case Study"}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          {project.links?.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-center text-sm font-semibold text-zinc-200 transition hover:border-[#37d5ff]/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff] sm:w-auto"
            >
              <GitBranch size={16} aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-center text-sm font-semibold text-zinc-200 transition hover:border-[#37d5ff]/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff] sm:w-auto"
            >
              <ExternalLink size={16} aria-hidden="true" />
              {project.status === "Live Website" ? "Live Website" : "Live Demo"}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
