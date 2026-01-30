import { buildWhatsAppUrl } from "@/lib/booking";

const WhatsAppButton = () => {
  const message = "Hello OMG Arcade! I'd like to book a session.";
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
    >
      WhatsApp
      <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
    </a>
  );
};

export default WhatsAppButton;
