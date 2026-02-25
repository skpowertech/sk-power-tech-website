
interface StatCardProps {
    value: string,
    label: string, 
    description: string,
}

const StatCard = ({value, label, description}: StatCardProps) => {
  return (
    <div className='w-full h-full p-8 rounded-xl bg-zodiac-50 max-w-md shadow-md'>
      <h2 className='mb-1'>{value}</h2>
      <p className='uppercase font-medium tracking-wider mb-4 text-sm md:text-base'>{label}</p>
      <p className='text-zinc-500' >{description}</p>
    </div>
  )
}

export default StatCard