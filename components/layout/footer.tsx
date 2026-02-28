import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { contactUs, quickLinks } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="border-zodiac-500 bg-footer-gradient relative mt-16 border-t-4 text-[#D4D4D4]/90 sm:mt-8">
      <div className="max-container padding-x padding-b flex flex-col gap-16 pt-24 lg:flex-row lg:justify-around lg:gap-0">
        <div className="flex flex-col gap-6">
          <FooterHeader>Head Office</FooterHeader>
          <address className="hover:text-zodiac-300 text-zodiac-100 cursor-pointer not-italic">
            <span className="block">#2, Sambasivam Nagar, Vembakkam </span>
            <span className="block">Ponneri, Chennai - 601204</span>
          </address>
        </div>

        <div className="flex flex-col gap-6">
          <FooterHeader>Contact Us</FooterHeader>
          <ul className="flex flex-col gap-4">
            {contactUs.map((contact) => (
              <li
                key={contact.label}
                className="text-zodiac-100 hover:text-zodiac-300 flex items-center gap-4"
              >
                <Image
                  src={contact.iconSrc}
                  alt={contact.iconAlt}
                  width={24}
                  height={24}
                  className="h-6 w-6 justify-self-start"
                ></Image>
                <p>{contact.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <FooterHeader>Quick Links</FooterHeader>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <li
                key={link.label}
                className="text-zodiac-100 hover:text-zodiac-300"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="padding-x border-t-zodiac-600/30 text-zodiac-100 flex flex-col items-center gap-4 border-t py-8 text-sm lg:flex-row lg:justify-between">
        <div>
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-zodiac-500 font-semibold">SK POWER TECH.</span>{" "}
          All rights reserved.
        </div>
        <div>
          Website Designed and Developed by:{" "}
          <a
            href="https://www.linkedin.com/in/aswin04/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zodiac-500 font-semibold"
          >
            ASWIN
          </a>
        </div>
      </div>

      <div className="border-zodiac-500 absolute -top-13 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full border-4 bg-white p-2">
        <Image
          src={"/logos/sk-logo.svg"}
          alt="SK logo"
          width={80}
          height={80}
          className="w-full"
        ></Image>
      </div>
    </footer>
  );
};

const FooterHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="to-zodiac-900 h-1 w-10 rounded-full bg-linear-to-r from-[#99CCF7] from-0% via-[#2F75E1] via-50% to-100%"></div>
      <h3 className="text-white">{children}</h3>
    </div>
  );
};

export default Footer;
