"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const SectionReveal = ({ children }: PropsWithChildren) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export default SectionReveal;
