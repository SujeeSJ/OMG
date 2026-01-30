"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import { siteConfig } from "@/data/config";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="section-padding relative z-10 min-h-[70vh] flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-neon-cyan"
        >
          {siteConfig.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-display font-semibold leading-tight text-white md:text-6xl"
        >
          <span className="text-glow">OMG Arcade</span>
          <span className="block text-2xl font-light text-white/70 md:text-3xl">
            {siteConfig.tagline}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Premium play zones, cinematic lighting, and curated tournaments designed for next-gen gamers and
          community nights. Step into Trincomalee’s most elevated indoor recreation hub.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/booking"
            className="rounded-full bg-arcade-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-neon-cyan/90"
          >
            Book a Session
          </Link>
          <Link
            href="/packages"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-neon-cyan hover:text-neon-cyan"
          >
            View Packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
