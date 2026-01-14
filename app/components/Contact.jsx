"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_g0575e7",        // 🔴 MY SERVICE ID
        "template_f6rv9ja",       // 🔴 MY TEMPLATE ID
        {
          name: e.target.name.value,
          email: e.target.email.value,
          title: e.target.subject.value,
          message: e.target.message.value,
        },
        "GjB9PWWj0U5PrVEly"         // 🔴 My PUBLIC KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">

      {/* Title */}
      <h2 className="text-center text-3xl font-extrabold mb-16">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full rounded border px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        {/* Get in Touch */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Get in Touch</h3>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl" />
            <a
              href="mailto:elijahmflomo@gmail.com"
              className="text-sm text-gray-700 hover:underline"
            >
              elijahmflomo@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl" />
            <a
              href="tel:+919814745828"
              className="text-sm text-gray-700 hover:underline"
            >
              +91 98147 45828
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-xl" />
            <a
              href="https://www.linkedin.com/in/elijah-m-flomo-a7a253267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:underline"
            >
              linkedin.com/in/elijah-m-flomo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
