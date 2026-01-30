import SectionReveal from "@/components/SectionReveal";
import { siteConfig } from "@/data/config";

const ContactPage = () => {
  return (
    <div className="section-padding">
      <SectionReveal>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Contact</p>
          <h1 className="mt-3 text-4xl font-display">Let’s plan your next session.</h1>
          <p className="mt-4 text-sm text-white/70">
            Call, WhatsApp, or send a message. We respond quickly for booking and event requests.
          </p>
        </div>
      </SectionReveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <div className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-display">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
              />
              <input
                type="email"
                placeholder="Email address"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
              />
              <textarea
                placeholder="Tell us about your booking or event"
                rows={4}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
              />
              <button
                type="submit"
                className="rounded-full bg-arcade-blue px-6 py-3 text-sm font-semibold text-white shadow-glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="glass-panel rounded-3xl p-8">
            <h2 className="text-2xl font-display">Visit OMG Arcade</h2>
            <p className="mt-3 text-sm text-white/70">{siteConfig.address}</p>
            <p className="mt-2 text-sm text-white/70">{siteConfig.phone}</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="OMG Arcade Map"
                src="https://www.google.com/maps?q=Trincomalee%20Sri%20Lanka&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
};

export default ContactPage;
