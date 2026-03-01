import Image from "next/image";
import CTAButton from "../ui/cta-button";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-54.656px)] md:h-[calc(100vh-56px)] lg:h-[calc(100vh-66px)]">
      <Image
        src={"/images/hero/hero-img.jpg"}
        alt="Technician installing CCTV camera"
        sizes="100vw"
        fill
        preload={true}
        quality={80}
        className="hidden object-cover object-[70%_50%] md:block md:object-[100%_50%]"
      ></Image>
      <Image
        src={"/images/hero/hero-img-mobile.jpg"}
        alt="Technician installing CCTV camera"
        sizes="100vw"
        fill
        preload={true}
        quality={80}
        className="block object-cover object-[80%_10%] md:hidden"
      ></Image>
      <div className="absolute inset-0 bg-linear-to-r from-[#020817] via-[#020817]/85 to-transparent"></div>
      <div className="max-container relative z-10 flex h-full items-center">
        <div className="padding flex flex-col gap-8 md:gap-4">
          <h1 className="max-w-3xl text-white">
            Professional CCTV Installation{" "}
            <span className="text-zodiac-200">You Can Trust</span>
          </h1>
          <p className="max-w-md leading-7 text-zinc-300 lg:max-w-xl">
            We install, service, and maintain reliable surveillance systems for
            homes and businesses. Fast setup, expert technicians, and solutions
            you can trust.
          </p>
          <div className="xs:flex-row flex flex-col gap-4">
            <CTAButton variant={"filled"} label={"Whatsapp"}></CTAButton>
            <CTAButton
              variant={"outline"}
              label="Call Now"
              desktopLabel="+91 82204 99784"
            ></CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
