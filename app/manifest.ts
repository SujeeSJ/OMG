import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OMG Arcade",
    short_name: "OMG",
    description: "Premium gaming arcade in Trincomalee, Sri Lanka.",
    start_url: "/",
    display: "standalone",
    background_color: "#060B1D",
    theme_color: "#2A6CFF",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "64x64",
        type: "image/svg+xml"
      }
    ]
  };
}
