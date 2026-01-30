import { seatConfig, siteConfig } from "@/data/config";

export type BookingService = "PS5" | "PS4" | "Pool" | "Wheel" | "VR";

export type BookingRecord = {
  id: string;
  service: BookingService;
  package: string;
  seat: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email?: string;
};

export const BOOKING_STORAGE_KEY = "omg-arcade-bookings";

export const serviceSeats: Record<BookingService, string[]> = {
  PS5: seatConfig.ps5,
  PS4: seatConfig.ps5,
  Pool: seatConfig.pool,
  Wheel: seatConfig.wheel,
  VR: seatConfig.vr
};

export const bookingHours = {
  start: 10,
  end: 22,
  interval: 30
};

export const generateTimeSlots = () => {
  const slots: string[] = [];
  for (let hour = bookingHours.start; hour < bookingHours.end; hour += 1) {
    for (let minute = 0; minute < 60; minute += bookingHours.interval) {
      const label = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      slots.push(label);
    }
  }
  return slots;
};

export const getStoredBookings = (): BookingRecord[] => {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(BOOKING_STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as BookingRecord[];
  } catch {
    return [];
  }
};

export const saveBooking = (booking: BookingRecord) => {
  if (typeof window === "undefined") return;
  const existing = getStoredBookings();
  const next = [...existing, booking];
  window.localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(next));
};

export const isSlotAvailable = (
  bookings: BookingRecord[],
  service: BookingService,
  seat: string,
  date: string,
  time: string
) => {
  return !bookings.some(
    (booking) =>
      booking.service === service &&
      booking.seat === seat &&
      booking.date === date &&
      booking.time === time
  );
};

export const buildWhatsAppUrl = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
};
