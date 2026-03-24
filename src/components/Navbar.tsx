interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Besuch', href: '#besuch' },
  { label: 'Ausstellung', href: '#ausstellung' },
  { label: 'Schule & Bildung', href: '#schule' },
  { label: 'Entdecken', href: '#entdecken' },
  { label: 'Museum', href: '#museum' },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <a href="#" className="text-white font-bold text-xl tracking-wide">
        MoneyVerse
      </a>

      <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-white text-sm hover:opacity-70 transition-opacity"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button
          className="text-white text-sm hover:opacity-70 transition-opacity"
          aria-label="Sprache wechseln"
        >
          de
        </button>
        <button
          className="bg-white text-blue-600 text-sm font-semibold px-4 py-2 rounded-full hover:bg-opacity-90 transition-all"
          aria-label="Tickets kaufen"
        >
          Tickets
        </button>
      </div>
    </header>
  );
}
