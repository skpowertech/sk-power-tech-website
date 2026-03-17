import { servicesDetails } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface ServiceTabsProps {
  activeIndex: number
  onTabClick: (index: number) => void
}

const ServiceTabs = ({activeIndex, onTabClick}: ServiceTabsProps ) => {
  return (
    <div className='relative flex justify-center ' >
      <div className='pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent md:hidden' />
      <div className='pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r  from-white to-transparent md:hidden' />
      <div className='pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l  from-white to-transparent md:hidden' />
      <div className='
        flex gap-2 overflow-x-auto whitespace-nowrap
        bg-gray-100 rounded-full p-1 scroll-smooth snap-x max-w-full 
        '
      >
        {servicesDetails.map((service, index) => {
          const isActive = activeIndex === index
          return (
            <button 
              key={service.tabTitle}
              onClick={() => onTabClick(index)} 
              className={cn('relative px-5 py-2 snap-start shrink-0 rounded-full font-medium cursor-pointer') }
            >
            {isActive && (
              <motion.div
                layoutId='active-tab'
                className='absolute inset-0 rounded-full bg-zodiac-600'
                transition={{type: 'spring', stiffness: 400, damping: 30}}
              />
            )}
            <span
              className={cn('relative z-10 transiton-colors duration-300', isActive ? 'text-gray-100' : 'text-slate-500')} 
            >
              {service.tabTitle}
            </span>
            </button>
          )})}
      </div>
    </div>
  )
}

export default ServiceTabs