"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const roomTypes = ["Single Occupancy", "Twin Sharing", "Triple Sharing", "Not Sure Yet"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    // Wire this up to your backend or a form service (e.g. Formspree) to receive real enquiries.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-gold-500/15 bg-cream-soft p-10 text-center card-shadow"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon-800 text-gold-400">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-serif-display mt-5 text-xl font-semibold text-maroon-900">
          Enquiry Received!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Thank you for reaching out. Our team will get back to you shortly with room
          availability and next steps.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold uppercase tracking-wide text-maroon-800 underline underline-offset-4"
        >
          Send Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gold-500/15 bg-cream-soft p-8 card-shadow md:p-10"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-maroon-800">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-lg border border-gold-500/25 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-maroon-800">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              required
              type="tel"
              placeholder="+91 00000 00000"
              className="mt-2 w-full rounded-lg border border-gold-500/25 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500"
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-maroon-800">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg border border-gold-500/25 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500"
          />
        </div>

        <div className="mt-5">
          <label htmlFor="roomType" className="block text-xs font-semibold uppercase tracking-wide text-maroon-800">
            Preferred Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            defaultValue={roomTypes[0]}
            className="mt-2 w-full rounded-lg border border-gold-500/25 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500"
          >
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-maroon-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a bit about what you're looking for..."
            className="mt-2 w-full resize-none rounded-lg border border-gold-500/25 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-maroon-800 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream shadow-md transition-all hover:bg-maroon-700 disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Enquiry"}
          {!submitting && <Send className="h-4 w-4" />}
        </button>
      </motion.form>
    </AnimatePresence>
  );
}
