import "./globals.css";

export const metadata = {
  title: "Menuo Tech Solutions | Cloud & AI Backend Developer",
  description:
    "Menuo Tech Solutions builds scalable backend systems, AI-powered applications, and modern cloud solutions for startups and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent browser forced dark mode */}
        <meta name="color-scheme" content="light only" />

        {/* SEO Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}