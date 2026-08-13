"use client";

import { FormEvent, useId, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import styles from "./rolesmith.module.css";

type FormState = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const emailId = useId();
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setState("success");
      setMessage(result.message || "You’re on the list.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Join the Rolesmith waitlist">
      <div className={styles.formRow}>
        <label className="sr-only" htmlFor={emailId}>
          Work email
        </label>
        <input
          id={emailId}
          className={styles.emailInput}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
          disabled={state === "submitting" || state === "success"}
        />
        <input className={styles.honeypot} name="companyWebsite" tabIndex={-1} autoComplete="off" />
        <button className={styles.submitButton} type="submit" disabled={state === "submitting" || state === "success"}>
          {state === "success" ? (
            <>
              Registered <Check size={17} aria-hidden="true" />
            </>
          ) : state === "submitting" ? (
            "Registering…"
          ) : (
            <>
              Register interest <ArrowRight size={17} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      <p className={styles.formNote} aria-live="polite">
        {message || "Early access updates only. No noise, ever."}
      </p>
    </form>
  );
}
