import SectionHeader from '../ui/section-header'
import TimelineCard from '../ui/timeline-card'
import { processes } from '@/lib/constants'

const Process = () => {
  return (
    <section className='max-container padding space-y-12'>
      <SectionHeader
        label='Process'
        title='How We Work'
        description='Three simple steps from consultation to complete protection'
      ></SectionHeader>
      <ul className='w-fit mx-0 sm:mx-auto'>
        {processes.map((process) => (
          <li key={process.step}>
            <TimelineCard {...process}></TimelineCard>
          </li>
        ))}
      </ul>
    </section>
  ) 
}

export default Process