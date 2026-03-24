export default function FooterBottom() {
  return (
    <div
      className="py-10 px-8 md:px-16"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Big logo */}
        <p
          className="text-white font-black tracking-widest mb-8"
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: 1 }}
          aria-label="MoneyVerse"
        >
          MONEYVERSE
        </p>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white border-opacity-10 pt-6">
          <nav className="flex gap-6" aria-label="Rechtliche Links">
            <a
              href="#"
              className="text-white opacity-50 text-xs hover:opacity-80 transition-opacity"
              aria-label="Datenschutz"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="text-white opacity-50 text-xs hover:opacity-80 transition-opacity"
              aria-label="Impressum"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-white opacity-50 text-xs hover:opacity-80 transition-opacity"
            >
              Cookies
            </a>
          </nav>
          <p className="text-white opacity-30 text-xs">
            © {new Date().getFullYear()} MoneyVerse — Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </div>
  );
}
