import Link from "next/link";
import { siteConfig } from "@/data/config";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-deep-navy/80">
      <div className="section-padding grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg">{siteConfig.name}</h3>
          <p className="mt-2 text-sm text-white/70">{siteConfig.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Visit</h4>
          <p className="mt-3 text-sm text-white/70">{siteConfig.address}</p>
          <p className="mt-2 text-sm text-white/70">{siteConfig.hours.days} · {siteConfig.hours.time}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact</h4>
          <p className="mt-3 text-sm text-white/70">{siteConfig.phone}</p>
          <div className="mt-3 flex gap-4 text-sm text-white/70">
            <a href={siteConfig.social.instagram} className="hover:text-neon-cyan">Instagram</a>
            <a href={siteConfig.social.facebook} className="hover:text-neon-cyan">Facebook</a>
            <a href={siteConfig.social.tiktok} className="hover:text-neon-cyan">TikTok</a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/booking">Booking</Link></li>
            <li><Link href="/packages">Packages</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-4 text-xs text-white/50 md:px-12">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
