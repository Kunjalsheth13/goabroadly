"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { countries, serviceTypes } from "@/constants/content";
import { useToast } from "@/components/common/Toast";
import Button from "@/components/common/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export default function ContactForm() {
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        showToast(result.error || "Something went wrong", "error");
        return;
      }

      setSubmitted(true);
      reset();
      showToast("Inquiry submitted successfully!", "success");
    } catch {
      showToast("Network error. Please try again.", "error");
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <strong>Thank you!</strong> We have received your inquiry and will contact you within 24 hours.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fullName">Full Name *</label>
          <input id="fullName" className={styles.input} {...register("fullName")} aria-invalid={!!errors.fullName} />
          {errors.fullName && <span className={styles.error} role="alert">{errors.fullName.message}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email *</label>
          <input id="email" type="email" className={styles.input} {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <span className={styles.error} role="alert">{errors.email.message}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone Number *</label>
          <input id="phone" type="tel" className={styles.input} {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <span className={styles.error} role="alert">{errors.phone.message}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="interestedCountry">Interested Country *</label>
          <select id="interestedCountry" className={styles.select} {...register("interestedCountry")} aria-invalid={!!errors.interestedCountry}>
            <option value="">Select country</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.interestedCountry && <span className={styles.error} role="alert">{errors.interestedCountry.message}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="serviceType">Service Type *</label>
        <select id="serviceType" className={styles.select} {...register("serviceType")} aria-invalid={!!errors.serviceType}>
          <option value="">Select service</option>
          {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.serviceType && <span className={styles.error} role="alert">{errors.serviceType.message}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Message *</label>
        <textarea id="message" rows={5} className={styles.textarea} {...register("message")} aria-invalid={!!errors.message} />
        {errors.message && <span className={styles.error} role="alert">{errors.message.message}</span>}
      </div>

      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
