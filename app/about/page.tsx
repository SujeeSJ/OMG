import SectionReveal from "@/components/SectionReveal";

const values = [
  {
    title: "Safe Environment",
    description: "Supervised play zones with clear rules to keep every guest comfortable."
  },
  {
    title: "Fair Play",
    description: "Transparent pricing and structured tournaments that reward skill."
  },
  {
    title: "Quality Hardware",
    description: "Next-gen consoles, premium rigs, and cinematic AV systems."
  }
];

const team = [
  { name: "N. Azeem", role: "Founder & Experience Lead" },
  { name: "S. Ravindu", role: "Tournament Coordinator" },
  { name: "M. Farah", role: "Guest Experience" }
];

const AboutPage = () => {
  return (
    <div className="section-padding">
      <SectionReveal>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">About</p>
          <h1 className="mt-3 text-4xl font-display">Gaming as a safe community space.</h1>
          <p className="mt-4 text-sm text-white/70">
            OMG Arcade was created to give Trincomalee’s youth a premium, supervised place to compete, unwind,
            and build positive friendships. We combine cinematic design with structured play, ensuring every
            session feels high-end and inclusive.
          </p>
        </div>
      </SectionReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <SectionReveal key={value.title}>
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm text-white/70">{value.description}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal>
        <div className="mt-12">
          <h2 className="text-2xl font-display">Meet the team</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neon-cyan">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default AboutPage;
