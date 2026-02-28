import { stats } from "@/lib/constants";
import SectionHeader from "../ui/section-header";
import StatCard from "../ui/stat-card";

const WhyChooseUs = () => {
  return (
    <section className="max-container padding space-y-12">
      <SectionHeader
        label="why choose us"
        title="Why Our Customers Choose Us"
        description="We deliver dependable CCTV solutions backed by expert installation, fast support, and proven reliability — protecting homes and businesses with confidence."
      ></SectionHeader>
      <ul className="mx-0 grid w-fit gap-6 sm:mx-auto md:grid-cols-2">
        {stats.map((stat) => (
          <li key={stat.label}>
            <StatCard
              value={stat.value}
              label={stat.label}
              description={stat.description}
            ></StatCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
