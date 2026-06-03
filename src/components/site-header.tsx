"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/86 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="section-shell py-2.5 md:flex md:items-center md:justify-between md:py-3">
        <div className="flex w-full items-center justify-between gap-3 md:w-auto">
          <Link
            href="/#home"
            onClick={closeMenu}
            className="group flex items-center gap-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#37d5ff]"
            aria-label="Joshua Previlon home"
          >
            <Image
              src="/brand/jp-logo.svg"
              alt=""
              width={44}
              height={44}
              className="size-10 shrink-0 rounded-lg border border-[#f2c879]/40 bg-black/40 shadow-[0_0_24px_rgba(242,200,121,0.08)]"
              loading="eager"
            />
            <span className="flex flex-col">
              <span className="text-sm font-semibold">{profile.name}</span>
              <span className="text-xs text-zinc-400">
                {profile.title}
              </span>
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.055] text-zinc-100 transition hover:border-[#37d5ff]/60 hover:bg-[#37d5ff]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff] md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-primary-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden w-full min-w-0 flex-col gap-2 md:flex md:w-auto md:flex-row md:items-center">
          <nav
            className="flex w-auto items-center rounded-lg border border-white/10 bg-white/[0.045] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-center text-sm font-medium text-zinc-300 transition hover:bg-white/[0.075] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={profile.resumePath}
            download
            className="hidden min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-[#f2c879]/60 bg-[#f2c879]/10 px-3 py-2 text-sm font-semibold text-[#f2c879] transition hover:-translate-y-0.5 hover:border-[#ffe1a1] hover:bg-[#f2c879]/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff] md:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-primary-navigation"
            className="pt-3 md:hidden"
          >
            <nav
              className="grid grid-cols-2 gap-1 rounded-lg border border-white/10 bg-white/[0.045] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2.5 text-center text-sm font-medium text-zinc-300 transition hover:bg-white/[0.075] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={profile.resumePath}
              download
              onClick={closeMenu}
              className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#f2c879]/60 bg-[#f2c879]/10 px-3 py-2 text-sm font-semibold text-[#f2c879] transition hover:border-[#ffe1a1] hover:bg-[#f2c879]/18 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]"
            >
              <Download size={16} aria-hidden="true" />
              Resume
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
