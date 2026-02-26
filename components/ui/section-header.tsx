interface SectionHeaderProps {
  label: string,
  title: string,
  description: string
}


const SectionHeader = ({label, title, description}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 items-start sm:items-center sm:text-center" >
      <span className='w-fit uppercase border border-zodiac-400 text-sm font-semibold bg-zodiac-50 text-zodiac-700 px-5 py-2 rounded-full' >
        {label}
      </span>
      <h2 >{title}</h2>
      <p className="text-zinc-600 max-w-2xl" >{description}</p>
    </div>
  )
}

export default SectionHeader