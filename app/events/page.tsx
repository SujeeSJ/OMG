import SectionReveal from "@/components/SectionReveal";
import { eventConfig } from "@/data/config";

const EventsPage = () => {
  return (
    <div className="section-padding">
      <SectionReveal>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Events</p>
          <h1 className="mt-3 text-4xl font-display">Tournaments with energy.</h1>
          <p className="mt-4 text-sm text-white/70">
            Weekly ranking nights, weekend brackets, and prize pools built for competitive crews.
          </p>
        </div>
      </SectionReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {eventConfig.map((event) => (
          <SectionReveal key={event.title}>
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-neon-cyan">{event.date}</span>
              </div>
              <div className="mt-4 text-sm text-white/70">
                <p>Entry Fee: {event.fee}</p>
                <p>Prize: {event.prize}</p>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-white/60">
                {event.rules.map((rule) => (
                  <li key={rule}>• {rule}</li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <div className="mt-12 glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-display">Register interest</h2>
          <p className="mt-3 text-sm text-white/70">
            Want to join the next bracket? Drop your details and we’ll reach out.
          </p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm md:col-span-2"
            />
            <button
              type="submit"
              className="rounded-full bg-arcade-blue px-6 py-3 text-sm font-semibold text-white shadow-glow md:col-span-2"
            >
              Register Interest
            </button>
          </form>
        </div>
      </SectionReveal>
    </div>
  );
};

export default EventsPage;
