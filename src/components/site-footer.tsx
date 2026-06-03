import { GitBranch, Link2, Mail } from "lucide-react";

import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-zinc-400 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          Built for {profile.name} - full-stack products, dashboards, AI, APIs,
          and media-aware workflows.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
          >
            <Mail size={16} aria-hidden="true" />
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
          >
            <GitBranch size={16} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
          >
            <Link2 size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
