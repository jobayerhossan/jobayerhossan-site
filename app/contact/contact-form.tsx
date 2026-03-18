"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form action={formAction} className="contact-form">
      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label className="contact-form__field">
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
      </div>

      <label className="contact-form__field">
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Tell me a little about your project"
          required
        />
      </label>

      <button type="submit" className="button button--primary" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.status !== "idle" ? (
        <p
          className={`contact-form__status ${
            state.status === "success"
              ? "contact-form__status--success"
              : "contact-form__status--error"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
