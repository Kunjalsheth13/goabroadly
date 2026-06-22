"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/lib/validations/login";
import { useState } from "react";
import styles from "./login.module.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Go<span className={styles.accent}>Abroadly</span> Admin
        </h1>
        <p className={styles.subtitle}>Sign in to manage your dashboard</p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className={styles.error} role="alert">{error}</div>
          )}
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email")} autoComplete="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password")} autoComplete="current-password" />
          </div>
          <button type="submit" className={styles.submit} disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
