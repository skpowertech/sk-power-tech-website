"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Toast from "./toast";

const ctaVariants = cva(
  "inline-flex justify-center items-center gap-2 text-base font-inter font-medium tracking-wide transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        filled:
          "border-[1.5px] bg-zodiac-600 text-white  border-zodiac-500 hover:bg-zodiac-900",
        outline:
          "border border-white/50 backdrop-blur  text-zodiac-25 bg-transparent",
        outline_dark:
          "border-[1.5px] border-zodiac-950 text-zodiac-950 bg-transparent hover:bg-zodiac-950/5",
      },

      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },

    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

type CTAButtonProps = VariantProps<typeof ctaVariants> & {
  className?: string;
  label: string;
  desktopLabel?: string;
};

const CTAButton = ({
  variant,
  size,
  label,
  desktopLabel,
  className,
}: CTAButtonProps) => {
  const encodedMessage = encodeURIComponent(
    "Hi, I would like to know more about your services.",
  );
  const whatsappLink = `https://wa.me/918220499784?text=${encodedMessage}`;
  const config = {
    outline: {
      icon: "/icons/contact/phone-icon-light.png",
      alt: "phone-icon",
      href: "tel:+918220499784",
    },
    outline_dark: {
      icon: "/icons/contact/phone-icon-dark.png",
      alt: "phone-icon",
      href: "tel:+918220499784",
    },
    filled: {
      icon: "/icons/contact/whatsapp-icon-white.png",
      alt: "whatsapp-icon",
      href: `${whatsappLink}`,
    },
  } as const;

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  } as const;

  const current = config[variant ?? "outline"];
  const resolvedSize = size ?? "md";

  const [showToast, setShowToast] = useState(false);

  const handleMouseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (variant === "outline" || variant === "outline_dark") {
      const isDesktop = window.matchMedia("(min-width:768px)").matches;
      console.log(isDesktop);

      if (isDesktop) {
        e.preventDefault();
        navigator.clipboard.writeText("+91 82204 99784");
        setShowToast(true);
      }
    }
  };

  return (
    <a
      href={current.href}
      onClick={handleMouseClick}
      target={variant === "outline" ? "_blank" : undefined}
      rel={variant === "outline" ? "noopener noreferrer" : undefined}
      className={cn(ctaVariants({ variant, size }), className)}
    >
      <Image
        className=""
        src={current.icon}
        alt={current.alt}
        width={iconSizes[resolvedSize]}
        height={iconSizes[resolvedSize]}
      ></Image>
      <span className={desktopLabel ? "md:hidden" : ""}>{label}</span>
      {desktopLabel && <span className="hidden md:inline">{desktopLabel}</span>}

      <Toast
        message="Phone number copied to clipboard"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </a>
  );
};

export default CTAButton;
