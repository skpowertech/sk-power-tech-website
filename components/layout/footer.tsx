import { contactUs, quickLinks } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='relative border-t-4 border-zodiac-500 text-[#D4D4D4]/90 bg-footer-gradient mt-16 sm:mt-8' >
      <div className='max-container padding-x padding-b pt-24 flex flex-col gap-16  lg:flex-row lg:justify-around lg:gap-0' >
        <div className='flex flex-col gap-6' >
          <FooterHeader>Head Office</FooterHeader>
          <address className='not-italic hover:text-zodiac-300 cursor-pointer text-zodiac-100' >
            <span className='block'>#2, Sambasivam Nagar, Vembakkam </span>
            <span className='block'>Ponneri, Chennai - 601204</span>
          </address>
        </div>

        <div className='flex flex-col gap-6'>
          <FooterHeader>Contact Us</FooterHeader>
          <ul className='flex flex-col gap-4' >
            {contactUs.map((contact) => (
              <li key={contact.label} className='flex gap-4 items-center text-zodiac-100 hover:text-zodiac-300' >
                <Image src={contact.iconSrc} alt={contact.iconAlt} width={24} height={24} className='w-6 h-6 justify-self-start' ></Image>
                <p>{contact.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-6' >
          <FooterHeader>Quick Links</FooterHeader>
          <ul className='flex flex-col gap-4'>
            {quickLinks.map((link) => (
              <li key={link.label} className='text-zodiac-100 hover:text-zodiac-300' >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-4 items-center lg:flex-row lg:justify-between padding-x py-8 border-t  text-sm border-t-zodiac-600/30 text-zodiac-100'>
        <div>Copyright © {new Date().getFullYear()} <span className='text-zodiac-500 font-semibold'>SK POWER TECH.</span> All rights reserved.</div>
        <div>Website Designed and Developed by: <a className='text-zodiac-500 font-semibold'>ASWIN</a></div>
      </div>

      <div className='absolute left-1/2 -translate-x-1/2 -top-13 w-24 h-24 rounded-full border-4 bg-white border-zodiac-500 flex justify-center items-center p-2' >
        <Image src={'/logos/sk-logo.svg'} alt='SK logo' width={80} height={80} className='w-full' ></Image>
      </div>
    </footer>
  )
}

const FooterHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex gap-2 items-center' >
      <div className='w-10 h-1 rounded-full bg-linear-to-r from-0% from-[#99CCF7] via-50% via-[#2F75E1] to-100% to-zodiac-900' ></div>
      <h3 className='text-white' >{children}</h3>
    </div>
  )
}

export default Footer