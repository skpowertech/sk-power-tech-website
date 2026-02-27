import CTAButton from "../ui/cta-button"

const CTASection = () => {
  return (
    <section className="max-container padding flex flex-col gap-8 items-center text-center">
      <h2 className="" >Ready to Power and Protect <span className="text-zodiac-900 block" >Your Business?</span></h2>  
      <p className="text-zinc-500">Speak directly with our engineers today — call or WhatsApp for expert guidance.</p>
      <div className="flex flex-col gap-4 justify-center sm:flex-row sm:gap-8 ">
        <CTAButton variant={'outline_dark'} size={'lg'} ></CTAButton>
        <CTAButton variant={'filled'} size={'lg'} ></CTAButton>
      </div>
    </section>
  )
}

export default CTASection