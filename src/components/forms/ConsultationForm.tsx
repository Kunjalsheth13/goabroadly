"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { consultationSchema, type ConsultationFormData } from "@/lib/validations";
import { timeSlots } from "@/constants/content";
import { useToast } from "@/components/common/Toast";
import Button from "@/components/common/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export default function ConsultationForm() {
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      const res = await fetch("/api/consultation", {
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
      showToast("Consultation booked successfully!", "success");
    } catch {
      showToast("Network error. Please try again.", "error");
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <strong>Booking confirmed!</strong> We will send you a confirmation email shortly.
      </div>
    );
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fullName">Full Name *</label>
          <input id="fullName" className={styles.input} {...register("fullName")} />
          {errors.fullName && <span className={styles.error} role="alert">{errors.fullName.message}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email *</label>
          <input id="email" type="email" className={styles.input} {...register("email")} />
          {errors.email && <span className={styles.error} role="alert">{errors.email.message}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone *</label>
          <input id="phone" type="tel" className={styles.input} {...register("phone")} />
          {errors.phone && <span className={styles.error} role="alert">{errors.phone.message}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="preferredDate">Preferred Date *</label>
          <input id="preferredDate" type="date" min={minDate} className={styles.input} {...register("preferredDate")} />
          {errors.preferredDate && <span className={styles.error} role="alert">{errors.preferredDate.message}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="preferredTime">Preferred Time *</label>
        <select id="preferredTime" className={styles.select} {...register("preferredTime")}>
          <option value="">Select time</option>
          {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.preferredTime && <span className={styles.error} role="alert">{errors.preferredTime.message}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="notes">Notes (optional)</label>
        <textarea id="notes" rows={4} className={styles.textarea} {...register("notes")} />
      </div>

      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? "Booking..." : "Book Free Consultation"}
      </Button>
    </form>
  );
}
