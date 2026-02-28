"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import CTAButton from "../ui/cta-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={menuRef}
      className="bg-zodiac-50 sticky top-0 z-50 w-full shadow-md backdrop-blur-md"
    >
      <nav className="max-container flex items-center justify-between px-6 py-4">
        <Link href={"/"}>
          <Image
            src="/logos/logo.svg"
            alt="main-logo"
            width={200}
            height={200}
          ></Image>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className={cn(
                  "hover:text-zodiac-700 text-base font-medium transition-colors",
                  pathname === item.href && "text-zodiac-700",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
            <CTAButton variant={'filled'} label={'Whatsapp'} size={'sm'} ></CTAButton>
            <CTAButton variant={'outline_dark'} label="Call Now" desktopLabel="+91 82204 99784" size={'sm'} ></CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={`${isMenuOpen ? "Close menu" : "Open menu"}`}
          className="cursor-pointer md:hidden"
        >
          <div className="space-y-1">
            <span
              className={cn(
                "bg-zodiac-950 block h-0.75 w-6 transition",
                isMenuOpen && "origin-center translate-y-1.75 rotate-45",
              )}
            ></span>
            <span
              className={cn(
                "bg-zodiac-950 block h-0.75 w-6 transition",
                isMenuOpen && "opacity-0",
              )}
            ></span>
            <span
              className={cn(
                "bg-zodiac-950 block h-0.75 w-6 transition",
                isMenuOpen && "origin-center -translate-y-1.75 -rotate-45",
              )}
            ></span>
          </div>
        </button>
      </nav>
      <div
        className={`bg-zodiac-50 duration-all absolute top-full left-0 z-40 flex h-fit w-full justify-center py-6 shadow-lg backdrop-blur-sm transition-opacity ease-in md:hidden ${isMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className={`font-inter text-base leading-6 font-medium text-black ${pathname === item.href ? "text-zodiac-700" : ""}`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
