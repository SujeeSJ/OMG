import SectionReveal from "@/components/SectionReveal";
import GalleryGrid from "@/components/GalleryGrid";

const GalleryPage = () => {
  return (
    <div className="section-padding">
      <SectionReveal>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Gallery</p>
          <h1 className="mt-3 text-4xl font-display">A cinematic look inside OMG Arcade.</h1>
          <p className="mt-4 text-sm text-white/70">
            Filter by zone and explore the premium lighting, hardware, and lounge experience.
          </p>
        </div>
      </SectionReveal>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
};

export default GalleryPage;
