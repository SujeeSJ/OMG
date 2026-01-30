# OMG Arcade Website

A premium, cinematic gaming arcade website built with Next.js (App Router), TailwindCSS, Framer Motion, and Three.js.

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Editing Business Info & Pricing

All editable business information lives in `data/config.ts`:

- `siteConfig`: name, address, phone, hours, socials.
- `pricingConfig`: per-zone pricing.
- `offersConfig`: homepage offers.
- `seatConfig`: bookable seats.
- `galleryImages`: gallery entries.
- `eventConfig`: tournament info.

## Booking Logic

The booking wizard stores data locally (`localStorage`) via `lib/booking.ts`. This is mock mode for now, but the logic is separated so you can swap in Supabase/Firebase later.

## Project Structure

```
app/            Next.js App Router pages
components/     UI components + animations
data/           Config and placeholder content
lib/            Booking helpers
```

## Deployment

Use `npm run build` to generate a production build. Then deploy on Vercel or any Node-compatible host.
