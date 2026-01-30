import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { pricingConfig } from "@/data/config";

const PackagesPage = () => {
  return (
    <div className="section-padding">
      <SectionReveal>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Packages</p>
          <h1 className="mt-3 text-4xl font-display">Flexible pricing for every squad.</h1>
          <p className="mt-4 text-sm text-white/70">
            Mix solo sessions with group play. All packages include ambient lounge access and tournament updates.
          </p>
        </div>
      </SectionReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.values(pricingConfig).map((category) => (
          <SectionReveal key={category.label}>
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{category.label}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {category.pricing.map((item) => (
                  <li key={item.players} className="flex items-center justify-between">
                    <span>{item.players}</span>
                    <span className="text-neon-cyan">LKR {item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Group Deals</h3>
            <p className="mt-3 text-sm text-white/70">
              Bundle multiple zones for tournaments or birthday parties. Custom pricing available on request.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Student Hour</h3>
            <p className="mt-3 text-sm text-white/70">
              Dedicated discounts for students every weekday afternoon. Bring your ID to unlock the rate.
            </p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-white/60">
              <tr>
                <th className="px-6 py-4">Zone</th>
                <th className="px-6 py-4">Highlights</th>
                <th className="px-6 py-4">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/5">
                <td className="px-6 py-4">PS5</td>
                <td className="px-6 py-4">4K displays + premium audio</td>
                <td className="px-6 py-4">Competitive co-op</td>
              </tr>
              <tr className="border-t border-white/5">
                <td className="px-6 py-4">Wheel</td>
                <td className="px-6 py-4">Force feedback pedals</td>
                <td className="px-6 py-4">Time trials</td>
              </tr>
              <tr className="border-t border-white/5">
                <td className="px-6 py-4">Pool</td>
                <td className="px-6 py-4">Tournament-grade felt</td>
                <td className="px-6 py-4">Groups + parties</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="mt-10">
          <Link
            href="/booking"
            className="inline-flex items-center rounded-full bg-arcade-blue px-6 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Book Now
          </Link>
        </div>
      </SectionReveal>
    </div>
  );
};

export default PackagesPage;
