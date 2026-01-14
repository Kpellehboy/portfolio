export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Elijah M. Flomo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
