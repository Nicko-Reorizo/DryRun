import { useState } from "react";

const navLinks = [
  { label: "Home", page: "home" },
  { label: "Dashboard", page: "dashboard" },
  { label: "Records", page: "records" }
];

function Navbar({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(page) {
    onNavigate(page);
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <button className="text-lg font-bold text-blue-700 hover:text-blue-900" onClick={() => handleNavigate("home")} type="button">
            MiniMS
          </button>

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
            <button
              className={`rounded-md px-3 py-2 text-center text-sm font-medium sm:text-left ${
                activePage === link.page ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
              key={link.label}
              onClick={() => handleNavigate(link.page)}
              type="button"
            >
              {link.label}
            </button>
          ))}

          <button
            className="rounded-md border border-blue-600 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            onClick={() => handleNavigate("login")}
            type="button"
          >
            Login
          </button>
          <button
            className="rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-900"
            onClick={() => handleNavigate("register")}
            type="button"
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
