import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import {
  $button,
  $error,
  $input,
  $label,
  $largeInput,
  $root,
  $success,
} from "./contact.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitted(true);
    await fetch("https://formspree.io/xvowgzpl", {
      method: "POST",
      body: JSON.stringify({
        _replyTo: data.email,
        _subject: `Form submission from ${data.name}`,
        message: data.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={$root}>
      <p id="contact">
        I'm always open to new collaborations, commissions, and cool ideas!
        Let's talk
      </p>
      <label htmlFor="name" className={$label}>
        Name
      </label>
      <input
        className={$input}
        id="name"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <small className={$error}>Please let me know what to call you!</small>
      )}

      <label htmlFor="email" className={$label}>
        Email
      </label>
      <input
        className={$input}
        id="email"
        {...register("email", { required: true, pattern: /.+@.+/ })}
      />
      {errors.email && (
        <small className={$error}>Please let me know where to reach you!</small>
      )}

      <label htmlFor="message" className={$label}>
        Message
      </label>
      <textarea
        className={$largeInput}
        id="message"
        {...register("message", { required: true })}
      />
      {errors.message && <small className={$error}>How can I help you?</small>}

      <button type="submit" disabled={submitted} className={$button}>
        Submit
      </button>

      {submitted && (
        <small className={$success}>Thanks for getting in touch!</small>
      )}
    </form>
  );
}
