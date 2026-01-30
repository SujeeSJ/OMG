"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BookingRecord,
  BookingService,
  buildWhatsAppUrl,
  generateTimeSlots,
  getStoredBookings,
  isSlotAvailable,
  saveBooking,
  serviceSeats
} from "@/lib/booking";
import { pricingConfig } from "@/data/config";

const steps = [
  "Choose Service",
  "Choose Package",
  "Select Date & Time",
  "Your Details",
  "Confirmation"
];

const servicePackages: Record<BookingService, string[]> = {
  PS5: pricingConfig.ps5.pricing.map((item) => `${item.players} · LKR ${item.price}`),
  PS4: pricingConfig.ps4.pricing.map((item) => `${item.players} · LKR ${item.price}`),
  Pool: pricingConfig.pool.pricing.map((item) => `${item.players} · LKR ${item.price}`),
  Wheel: pricingConfig.wheel.pricing.map((item) => `${item.players} · LKR ${item.price}`),
  VR: pricingConfig.vr.pricing.map((item) => `${item.players} · LKR ${item.price}`)
};

const bookingSchema = z.object({
  service: z.enum(["PS5", "PS4", "Pool", "Wheel", "VR"]),
  package: z.string().min(1, "Please select a package."),
  seat: z.string().min(1, "Please select a seat."),
  date: z.string().min(1, "Please select a date."),
  time: z.string().min(1, "Please select a time."),
  name: z.string().min(2, "Please enter your name."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email.").optional().or(z.literal(""))
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingWizard = () => {
  const [step, setStep] = useState(0);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [availabilityError, setAvailabilityError] = useState<string | null>(null);
  const timeSlots = useMemo(() => generateTimeSlots(), []);
  const bookings = useMemo(() => getStoredBookings(), [bookingId]);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: "PS5",
      package: "",
      seat: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: ""
    }
  });

  const { watch, handleSubmit, setValue, formState } = form;
  const selectedService = watch("service");

  const goNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 0));

  const onSubmit = (values: BookingFormValues) => {
    const isAvailable = isSlotAvailable(
      bookings,
      values.service,
      values.seat,
      values.date,
      values.time
    );

    if (!isAvailable) {
      setAvailabilityError("That seat is already booked for this time. Choose another slot.");
      return;
    }

    setAvailabilityError(null);
    const id = `OMG-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const record: BookingRecord = {
      id,
      service: values.service,
      package: values.package,
      seat: values.seat,
      date: values.date,
      time: values.time,
      name: values.name,
      phone: values.phone,
      email: values.email || undefined
    };
    saveBooking(record);
    setBookingId(id);
    goNext();
  };

  const selectedPackageList = servicePackages[selectedService];
  const seatList = serviceSeats[selectedService];

  return (
    <div className="glass-panel rounded-3xl p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Step {step + 1} of {steps.length}</p>
          <h2 className="mt-2 text-2xl font-display">{steps[step]}</h2>
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-white/50">{steps.join(" · ")}</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">
        {step === 0 && (
          <div className="grid gap-4 md:grid-cols-3">
            {(["PS5", "PS4", "Pool", "Wheel", "VR"] as BookingService[]).map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => {
                  setValue("service", service);
                  setValue("package", "");
                  setValue("seat", "");
                }}
                className={`rounded-2xl border px-6 py-5 text-left transition ${
                  selectedService === service
                    ? "border-neon-cyan bg-neon-cyan/10"
                    : "border-white/10 hover:border-neon-cyan/60"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">{service}</p>
                <p className="mt-2 text-sm text-white/70">Premium {service} experience.</p>
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-4 md:grid-cols-2">
            {selectedPackageList.map((pkg) => (
              <button
                key={pkg}
                type="button"
                onClick={() => setValue("package", pkg)}
                className={`rounded-2xl border px-6 py-5 text-left transition ${
                  watch("package") === pkg
                    ? "border-neon-cyan bg-neon-cyan/10"
                    : "border-white/10 hover:border-neon-cyan/60"
                }`}
              >
                <p className="text-sm text-white">{pkg}</p>
                <p className="mt-2 text-xs text-white/60">Includes lounge access + soft ambient audio.</p>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-white/70">Select date</span>
              <input
                type="date"
                {...form.register("date")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />
              {formState.errors.date && (
                <span className="text-xs text-red-400">{formState.errors.date.message}</span>
              )}
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white/70">Select time</span>
              <select
                {...form.register("time")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <option value="">Choose a time slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {formState.errors.time && (
                <span className="text-xs text-red-400">{formState.errors.time.message}</span>
              )}
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white/70">Select seat</span>
              <select
                {...form.register("seat")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <option value="">Choose a seat</option>
                {seatList.map((seat) => (
                  <option key={seat} value={seat}>
                    {seat}
                  </option>
                ))}
              </select>
              {formState.errors.seat && (
                <span className="text-xs text-red-400">{formState.errors.seat.message}</span>
              )}
            </label>
            {availabilityError && <p className="text-sm text-red-400">{availabilityError}</p>}
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-white/70">Full name</span>
              <input
                type="text"
                {...form.register("name")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />
              {formState.errors.name && (
                <span className="text-xs text-red-400">{formState.errors.name.message}</span>
              )}
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-white/70">Phone number</span>
              <input
                type="tel"
                {...form.register("phone")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />
              {formState.errors.phone && (
                <span className="text-xs text-red-400">{formState.errors.phone.message}</span>
              )}
            </label>
            <label className="space-y-2 text-sm md:col-span-2">
              <span className="text-white/70">Email (optional)</span>
              <input
                type="email"
                {...form.register("email")}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              />
              {formState.errors.email && (
                <span className="text-xs text-red-400">{formState.errors.email.message}</span>
              )}
            </label>
          </div>
        )}

        {step === 4 && bookingId && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-neon-cyan/40 bg-neon-cyan/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan">Booking Confirmed</p>
              <h3 className="mt-3 text-2xl font-display">Reference: {bookingId}</h3>
              <p className="mt-3 text-sm text-white/70">
                We’ve reserved {watch("service")} seat {watch("seat")} on {watch("date")} at {watch("time")}.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(
                `OMG Arcade booking: ${bookingId} for ${watch("service")} (${watch("package")}), ${
                  watch("date")
                } at ${watch("time")} - ${watch("name")} (${watch("phone")})`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Share on WhatsApp
            </a>
          </div>
        )}

        <div className="flex flex-wrap justify-between gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/70 disabled:opacity-40"
          >
            Back
          </button>
          {step < 4 ? (
            <button
              type={step === 3 ? "submit" : "button"}
              onClick={step < 3 ? goNext : undefined}
              className="rounded-full bg-arcade-blue px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-neon-cyan"
            >
              {step === 3 ? "Confirm Booking" : "Continue"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setStep(0);
                setBookingId(null);
                form.reset();
              }}
              className="rounded-full border border-neon-cyan/60 px-6 py-3 text-xs uppercase tracking-[0.3em] text-neon-cyan"
            >
              New Booking
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingWizard;
