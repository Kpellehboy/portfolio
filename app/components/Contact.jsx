"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,   // 👈 key must match your EmailJS template
          message: e.target.message.value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
    <section id="contact" className="bg-slate-50 dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"} <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <ContactInfo
                icon={<FaEnvelope />}
                label="Email"
                value="elijahmflomo@gmail.com"
                href="mailto:elijahmflomo@gmail.com"
              />
              <ContactInfo
                icon={<FaPhoneAlt />}
                label="Phone"
                value="+91 98147 45828"
                href="tel:+919814745828"
              />
              <ContactInfo
                icon={<FaLinkedin />}
                label="LinkedIn"
                value="linkedin.com/in/elijah-m-flomo"
                href="https://www.linkedin.com/in/elijah-m-flomo-a7a253267"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl text-blue-600 dark:text-blue-400 mt-1">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-medium break-all"
        >
          {value}
        </a>
      </div>
    </div>
  );
}