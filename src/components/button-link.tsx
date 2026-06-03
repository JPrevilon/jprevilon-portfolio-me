import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[#f2c879]/80 bg-[#f2c879] text-[#11100c] shadow-[0_18px_45px_rgba(242,200,121,0.18)] hover:border-[#ffe1a1] hover:bg-[#ffe1a1] hover:shadow-[0_20px_55px_rgba(242,200,121,0.22)]",
  secondary:
    "border-white/15 bg-white/[0.055] text-zinc-50 hover:border-[#37d5ff]/60 hover:bg-[#37d5ff]/10",
  ghost:
    "border-transparent bg-transparent text-zinc-300 hover:border-white/15 hover:bg-white/[0.05] hover:text-white",
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "secondary",
  className,
  external,
  download,
  ariaLabel,
}: ButtonLinkProps) {
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("mailto:"));
  const isInternalRoute =
    href.startsWith("/") && !download && !href.endsWith(".pdf");
  const classes = clsx(
    "inline-flex min-h-11 max-w-full min-w-0 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-center text-sm font-semibold leading-tight transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37d5ff]",
    variants[variant],
    className,
  );

  if (isInternalRoute) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {icon}
        <span className="min-w-0">{children}</span>
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      download={download ? true : undefined}
      aria-label={ariaLabel}
    >
      {icon}
      <span className="min-w-0">{children}</span>
    </a>
  );
}
