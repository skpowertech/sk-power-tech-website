import Image from "next/image";
import Link from "next/link";
import { ourWorks } from "@/lib/constants";
import Card from "../ui/card";
import SectionHeader from "../ui/section-header";

const OurWork = () => {
  return (
    <section className="max-container padding flex flex-col gap-12">
      <SectionHeader
        label={"Our Work"}
        title={"Projects That Power and Protect Businesses"}
        description={
          "Recent projects across surveillance, power, and safety systems — delivered for secure and reliable operations."
        }
      ></SectionHeader>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,320px))] gap-8 sm:justify-center">
        {ourWorks.map((work) => (
          <li key={work.title} className="h-full">
            <Card {...work}></Card>
          </li>
        ))}
      </ul>
      <Link
        href={"/projects"}
        className="font-inter bg-zodiac-950 hover:bg-zodiac-900 mx-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-base font-medium tracking-wide text-white transition-colors focus:outline-none"
      >
        <span>View All Projects</span>
        <Image
          src={"/icons/ui/right-arrow-icon.png"}
          alt="right arrow icon"
          width={16}
          height={16}
          className="h-4 w-4"
        ></Image>
      </Link>
    </section>
  );
};

export default OurWork;
