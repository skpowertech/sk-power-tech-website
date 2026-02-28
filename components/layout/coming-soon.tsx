"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ComingSoonPageProps = {
  pageTitle: string;
  description: string;
  backHref?: string;
  className?: string;
};

export default function ComingSoonPage({
  pageTitle,
  description,
  backHref = "/",
  className,
}: ComingSoonPageProps) {
  return (
    <main
      className={cn(
        "bg-zodiac-25 flex min-h-[70vh] items-center justify-center px-6 py-20",
        className,
      )}
    >
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-zodiac-900 text-3xl font-semibold tracking-tight md:text-4xl">
          {pageTitle}
        </h1>

        <div className="bg-zodiac-600 mx-auto my-6 h-0.5 w-16 rounded-full" />

        <p className="text-zodiac-700 text-base leading-relaxed md:text-lg">
          {description}
        </p>

        <div className="mt-10">
          <Link
            href={backHref}
            className="border-zodiac-600 text-zodiac-600 hover:bg-zodiac-600 inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium transition-colors duration-200 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
