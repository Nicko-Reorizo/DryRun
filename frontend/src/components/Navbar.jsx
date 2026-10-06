import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Records", href: "#records" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a className="text-lg font-bold text-blue-700 hover:text-blue-900" href="#home">
            MiniMS
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className={`${menuOpen ? "grid" : "hidden"} mt-4 gap-2 sm:mt-0 sm:flex sm:items-center sm:justify-end`}>
          {navLinks.map((link) => (
            <a
              className="rounded-md px-3 py-2 text-center text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 sm:text-left"
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
