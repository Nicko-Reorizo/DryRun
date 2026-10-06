const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Records", href: "#records" }
];

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <a className="text-lg font-bold text-blue-700 hover:text-blue-900" href="#home">
          MiniMS
        </a>

        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
          {navLinks.map((link) => (
            <a
              className="rounded-md px-3 py-2 text-center text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              href={link.href}
              key={link.label}
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
