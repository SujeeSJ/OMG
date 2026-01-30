import Hero from "@/components/Hero";
import SectionReveal from "@/components/SectionReveal";
import Link from "next/link";
import { offersConfig } from "@/data/config";

const highlightCards = [
  { title: "PS5 Zone", description: "DualSense haptics, 4K displays, and curated titles." },
  { title: "Racing Wheel Simulator", description: "Immersive rigs with premium pedals and surround audio." },
  { title: "Pool", description: "Tournament-grade tables with lounge lighting." },
  { title: "Carrom", description: "Classic board games for quick breaks." },
  { title: "Chill Lounge", description: "Recharge with ambient music and refreshments." }
];

const HomePage = () => {
  return (
    <div>
      <Hero />
      <section className="section-padding grid gap-10 bg-deep-navy">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">What’s Inside</p>
            <h2 className="mt-3 text-3xl font-display">Play zones built for elite sessions.</h2>
          </div>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlightCards.map((card) => (
            <SectionReveal key={card.title}>
              <div className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-white/70">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
      <section className="section-padding grid gap-8 bg-gradient-to-b from-deep-navy to-[#0B122F]">
        <SectionReveal>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Today’s Offers</p>
              <h2 className="mt-3 text-3xl font-display">Play more with curated deals.</h2>
            </div>
            <Link
              href="/packages"
              className="rounded-full border border-neon-cyan/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-neon-cyan"
            >
              View All Packages
            </Link>
          </div>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {offersConfig.map((offer) => (
            <SectionReveal key={offer.title}>
              <div className="glass-panel rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{offer.tag}</p>
                <h3 className="mt-3 text-xl font-semibold">{offer.title}</h3>
                <p className="mt-3 text-sm text-white/70">{offer.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
      <section className="section-padding grid gap-10 bg-deep-navy">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Weekly Rankings</p>
            <h2 className="mt-3 text-3xl font-display">Climb the OMG leaderboard.</h2>
            <p className="mt-3 text-sm text-white/70">
              Track your squad’s performance, earn weekly badges, and receive priority slots for tournaments.
            </p>
          </div>
        </SectionReveal>
        <div className="glass-panel rounded-2xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Top Crews of the Week</h3>
              <p className="mt-2 text-sm text-white/70">Updated every Friday at 7 PM.</p>
            </div>
            <Link
              href="/events"
              className="rounded-full bg-neon-cyan/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-neon-cyan"
            >
              View Tournaments
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { team: "Blue Nova", score: "2,340 pts" },
              { team: "Pulse Shift", score: "2,110 pts" },
              { team: "Trinco Titans", score: "1,980 pts" }
            ].map((entry) => (
              <div key={entry.team} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">{entry.team}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{entry.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding grid gap-10 bg-gradient-to-b from-[#0B122F] to-deep-navy">
        <SectionReveal>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Gallery</p>
            <h2 className="mt-3 text-3xl font-display">A cinematic look inside OMG.</h2>
          </div>
        </SectionReveal>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hidden">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="min-w-[260px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420')] bg-cover bg-center" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Zone {index}</p>
                <p className="mt-2 text-sm text-white/70">Immersive lighting + ergonomic seating.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding grid gap-10 bg-deep-navy">
        <SectionReveal>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Reviews</p>
            <h2 className="mt-3 text-3xl font-display">Players love the vibe.</h2>
          </div>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: "A. Perera",
              quote: "The PS5 setup is unreal. Lighting and audio are premium."
            },
            {
              name: "M. Kareem",
              quote: "Best place in Trinco for weekend tournaments. Smooth booking too."
            },
            {
              name: "S. Fernando",
              quote: "Staff is super helpful, and the lounge feels cinematic."
            }
          ].map((review) => (
            <SectionReveal key={review.name}>
              <div className="glass-panel rounded-2xl p-6">
                <p className="text-sm text-white/70">“{review.quote}”</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neon-cyan">{review.name}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
