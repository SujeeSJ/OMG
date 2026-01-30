"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/config";

const categories = ["All", "PS5", "Wheel", "Pool", "Carrom", "Interior"];

const GalleryGrid = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryImages)[number] | null>(null);

  const images = useMemo(() => {
    if (active === "All") return galleryImages;
    return galleryImages.filter((img) => img.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              active === category
                ? "border-neon-cyan text-neon-cyan"
                : "border-white/20 text-white/60 hover:border-neon-cyan/60 hover:text-neon-cyan"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 columns-1 gap-6 md:columns-2 lg:columns-3">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelected(image)}
            className="mb-6 block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-deep transition hover:-translate-y-1"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
            <div className="px-4 py-3 text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-neon-cyan">{image.category}</p>
              <p className="mt-1 text-sm text-white/80">{image.alt}</p>
            </div>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-deep-navy"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
              <div className="px-6 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-neon-cyan">{selected.category}</p>
                <p className="mt-2 text-base text-white/80">{selected.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
