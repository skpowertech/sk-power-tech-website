import SectionHeader from '../ui/section-header'
import { ourWorks } from '@/lib/constants'
import Card from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'

const OurWork = () => {
  return (
    <section className="max-container padding flex flex-col gap-12">
      <SectionHeader
        label={'Our Work'}
        title={'Projects That Power and Protect Businesses'}
        description={'Recent projects across surveillance, power, and safety systems — delivered for secure and reliable operations.'}
      ></SectionHeader>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,320px))] sm:justify-center gap-8" >
        {ourWorks.map((work) => (
          <li key={work.title} className="h-full">
            <Card {...work}></Card>
          </li>
        ))}
      </ul>
      <Link href={'/our-work'} className='mx-auto inline-flex justify-center items-center gap-2 text-base font-inter font-medium tracking-wide transition-colors focus:outline-none  bg-zodiac-950 text-white hover:bg-zodiac-900 px-5 py-2.5 rounded-full'>
        <span>View All Projects</span>
        <Image src={'/icons/right-arrow-icon.png'} alt='right arrow icon' width={16} height={16} className='w-4 h-4' ></Image>
      </Link>
    </section>
  )
}

export default OurWork