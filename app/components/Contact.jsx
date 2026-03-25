"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaUser,
  FaCommentAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ EmailJS INIT (UNCHANGED)
  useEffect(() => {
    emailjs.init("GjB9PWWj0U5PrVEly");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMsg("");

    try {
      await emailjs.send(
        "service_04fw6qu",
        "template_2xyv3bh",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        }
      );

      setSuccess(true);
      e.target.reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      setErrorMsg("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out — I’m always open to discussing projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">

          {/* FORM */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <FaCommentAlt className="text-blue-600" /> Send a Message
            </h3>

            <form onSubmit={sendEmail} className="space-y-5">

              {/* NAME */}
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 pl-10 pr-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 pl-10 pr-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject (e.g. Collaboration, Job Opportunity)"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your message..."
                rows="5"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-sky-600 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane className="text-sm" />
              </button>

              {/* FEEDBACK */}
              {success && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                  ✅ Message sent successfully!
                </p>
              )}

              {errorMsg && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                  {errorMsg}
                </p>
              )}
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
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
      <div className="text-2xl text-blue-600 dark:text-blue-400 mt-1">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {label}
        </p>
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