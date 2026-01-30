"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/booking", label: "Booking" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-deep-navy/60 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="text-xl font-display font-semibold tracking-wide">
          <span className="text-neon-cyan">OMG</span> Arcade
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="relative">
              <span className={pathname === link.href ? "text-neon-cyan" : "text-white/80"}>
                {link.label}
              </span>
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-neon-cyan"
                />
              )}
            </Link>
          ))}
        </nav>
        <Link
          href="/booking"
          className="rounded-full bg-arcade-blue px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-neon-cyan/90"
        >
          Book a Session
        </Link>
      </div>
      <div className="px-6 pb-4 md:hidden">
        <div className="flex flex-wrap gap-3 text-xs text-white/80">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={pathname === link.href ? "text-neon-cyan" : ""}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
