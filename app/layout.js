import "./globals.css";

export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent browser forced dark mode */}
        <meta name="color-scheme" content="light only" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
