import CTAButton from "../ui/cta-button";

const CTASection = () => {
  return (
    <section className="max-container padding flex flex-col items-center gap-8 text-center">
      <h2 className="">
        Ready to Power and Protect{" "}
        <span className="text-zodiac-900 block">Your Business?</span>
      </h2>
      <p className="text-zinc-500">
        Speak directly with our engineers today — call or WhatsApp for expert
        guidance.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-8">
        <CTAButton
          variant={"filled"}
          label={"Whatsapp"}
          size={"lg"}
        ></CTAButton>
        <CTAButton
          variant={"outline_dark"}
          label="Call Now"
          desktopLabel="+91 82204 99784"
          size={"lg"}
        ></CTAButton>
      </div>
    </section>
  );
};

export default CTASection;
