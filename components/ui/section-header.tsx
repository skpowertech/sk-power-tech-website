interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-start gap-4 sm:items-center sm:text-center">
      <span className="border-zodiac-400 bg-zodiac-50 text-zodiac-700 w-fit rounded-full border px-5 py-2 text-sm font-semibold uppercase">
        {label}
      </span>
      <h2>{title}</h2>
      <p className="max-w-2xl text-zinc-600">{description}</p>
    </div>
  );
};

export default SectionHeader;
