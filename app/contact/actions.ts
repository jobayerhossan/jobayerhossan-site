"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP environment variables are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: true,
    auth: {
      user,
      pass,
    },
  });
}

export async function submitContactForm(
  prevState: ContactFormState = initialState,
  formData: FormData,
): Promise<ContactFormState> {
  void prevState;
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please complete your name, email, and message.",
    };
  }

  const recipient = process.env.CONTACT_TO_EMAIL ?? "jobayer.bc001@gmail.com";
  const sender = process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER;

  if (!sender) {
    return {
      status: "error",
      message: "The contact form email sender is not configured yet.",
    };
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `Jobayer Hossan Website <${sender}>`,
      to: recipient,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #191714;">
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return {
      status: "success",
      message: "Thanks. Your message has been sent successfully.",
    };
  } catch {
    return {
      status: "error",
      message: "Sorry, the message could not be sent right now. Please email me directly.",
    };
  }
}
