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
        "min-h-[70vh] flex items-center justify-center px-6 py-20 bg-zodiac-25",
        className
      )}
    >
      <div className="text-center max-w-xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zodiac-900">
          {pageTitle}
        </h1>

        <div className="w-16 h-0.5 bg-zodiac-600 mx-auto my-6 rounded-full" />

        <p className="text-zodiac-700 text-base md:text-lg leading-relaxed">
          {description}
        </p>

        <div className="mt-10">
          <Link
            href={backHref}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-zodiac-600 text-zodiac-600 hover:bg-zodiac-600 hover:text-white transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}