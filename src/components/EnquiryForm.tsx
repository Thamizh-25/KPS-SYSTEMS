"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { createEnquiry } from "@/lib/enquiries";
import { isSupabaseConfigured } from "@/lib/supabase";
import type { EnquiryFormData } from "@/types/enquiry";

interface EnquiryFormProps {
  defaultProductId?: string;
  defaultProductName?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm({
  defaultProductId = "",
  defaultProductName = "",
}: EnquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<EnquiryFormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    product_id: defaultProductId,
    product_name: defaultProductName,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    const result = await createEnquiry(form);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Failed to send enquiry.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-[#B87333]/30 bg-[#101010] p-8 text-center"
      >
        <CheckCircle size={40} className="text-[#B87333] mx-auto mb-4" />
        <h3 className="font-heading text-xl font-semibold text-[#F5F5F0] mb-2">
          ENQUIRY RECEIVED
        </h3>
        <p className="text-sm text-[#9A9A9A] max-w-xs mx-auto">
          Our team will review your requirements and get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isSupabaseConfigured && (
        <div className="p-3 bg-[#101010] border border-[#303030] flex items-center gap-2">
          <AlertCircle size={14} className="text-[#9A9A9A] shrink-0" />
          <p className="text-xs text-[#9A9A9A]">
            Database not configured. Contact us directly at {"{email}"}.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-label block mb-1.5">NAME *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="input-industrial"
          />
        </div>
        <div>
          <label className="text-label block mb-1.5">COMPANY</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name (optional)"
            className="input-industrial"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-label block mb-1.5">PHONE *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
            className="input-industrial"
          />
        </div>
        <div>
          <label className="text-label block mb-1.5">EMAIL *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="input-industrial"
          />
        </div>
      </div>

      {defaultProductName && (
        <div>
          <label className="text-label block mb-1.5">PRODUCT</label>
          <input
            type="text"
            name="product_name"
            value={form.product_name}
            onChange={handleChange}
            className="input-industrial"
          />
        </div>
      )}

      <div>
        <label className="text-label block mb-1.5">YOUR REQUIREMENT *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Describe your application, required quantity, technical requirements, or any questions."
          className="textarea-industrial"
          rows={5}
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 p-3 bg-[#c94040]/10 border border-[#c94040]/30"
          >
            <AlertCircle size={14} className="text-[#c94040] shrink-0" />
            <p className="text-xs text-[#c94040]">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={13} className="animate-spin" />
            SENDING...
          </>
        ) : (
          <>
            <Send size={13} />
            SEND ENQUIRY
          </>
        )}
      </button>
    </form>
  );
}
