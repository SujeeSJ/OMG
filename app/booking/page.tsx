import SectionReveal from "@/components/SectionReveal";
import BookingWizard from "@/components/BookingWizard";
import { siteConfig } from "@/data/config";

const BookingPage = () => {
  return (
    <div className="section-padding">
      <SectionReveal>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Booking</p>
          <h1 className="mt-3 text-4xl font-display">Reserve your next session.</h1>
          <p className="mt-4 text-sm text-white/70">
            Open {siteConfig.hours.days} · {siteConfig.hours.time}. Secure your seat and receive a confirmation
            reference instantly.
          </p>
        </div>
      </SectionReveal>
      <div className="mt-10">
        <BookingWizard />
      </div>
    </div>
  );
};

export default BookingPage;
