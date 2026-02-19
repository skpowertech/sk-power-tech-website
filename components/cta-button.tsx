import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex items-center gap-2 text-base font-inter font-medium tracking-wide transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        outline:
          "border-[1.5px] border-zodiac-950 text-zodiac-950 bg-transparent hover:bg-zodiac-950/5",
        filled:
          "bg-zodiac-950 text-white border border-zodiac-950 hover:bg-zodiac-900",
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
};

const CTAButton = ({ variant, size, className }: CTAButtonProps) => {
  const encodedMessage = encodeURIComponent(
    "Hi, I would like to know more about your services.",
  );
  const whatsappLink = `https://wa.me/918220499784?text=${encodedMessage}`;
  const config = {
    outline: {
      icon: "/whatsapp.png",
      alt: "whatsapp-icon",
      label: "WhatsApp",
      href: `${whatsappLink}`,
    },
    filled: {
      icon: "/phone-icon.png",
      alt: "phone-icon",
      label: "Call Now",
      href: "tel:+918220499784",
    },
  } as const;

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  } as const;

  const current = config[variant ?? "outline"];
  const resolvedSize = size ?? "md";

  return (
    <a
      href={current.href}
      target={`${variant === "outline" ? "_blank" : undefined}`}
      rel={`${variant === "outline" ? "noopener noreferrer" : undefined}`}
      className={cn(ctaVariants({ variant, size }), className)}
    >
      <Image
        className=""
        src={current.icon}
        alt={current.alt}
        width={iconSizes[resolvedSize]}
        height={iconSizes[resolvedSize]}
      ></Image>
      <span>{current.label}</span>
    </a>
  );
};

export default CTAButton;
