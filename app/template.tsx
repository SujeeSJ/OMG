"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.main>
);

export default Template;
