interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

const StatCard = ({ value, label, description }: StatCardProps) => {
  return (
    <div className="bg-zodiac-50 h-full w-full max-w-md rounded-xl p-8 shadow-md">
      <h2 className="mb-1">{value}</h2>
      <p className="mb-4 text-sm font-medium tracking-wider uppercase md:text-base">
        {label}
      </p>
      <p className="text-zinc-500">{description}</p>
    </div>
  );
};

export default StatCard;
