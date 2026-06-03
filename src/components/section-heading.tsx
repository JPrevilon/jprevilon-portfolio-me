import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow-pill">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 text-2xl font-semibold leading-[1.12] text-white min-[375px]:text-3xl sm:text-4xl"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
          {children}
        </p>
      ) : null}
    </div>
  );
}
