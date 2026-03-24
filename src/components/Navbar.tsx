// Figma node: Navigationbar (0:112)
// Assets expire in 7 days — replace with permanent assets for production
const logoSrc = "https://www.figma.com/api/mcp/asset/342ba7cc-8aae-43d8-a010-769f9a51fd38";

export default function Navbar() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ backdropFilter: 'blur(7px)', backgroundColor: 'rgba(30,30,30,0.19)' }}
    >
      {/* Left: opening hours */}
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" />
          <path d="M10 6v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-white text-base font-semibold whitespace-nowrap">
          Heute offen 10 - 17 Uhr
        </span>
      </div>

      {/* Center: logo */}
      <a href="#" aria-label="MoneyVerse – Startseite">
        <img src={logoSrc} alt="MoneyVerse" className="h-[43px] w-auto" />
      </a>

      {/* Right: nav + menu */}
      <nav className="flex items-center gap-10" aria-label="Hauptnavigation">
        <a href="#barrierefreiheit" className="flex items-center gap-2 text-white text-base font-semibold hover:opacity-70 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="5" r="2" fill="white" />
            <path d="M10 8v5M7 10l3 3 3-3M7 17h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Barrierefreiheit
        </a>
        <a href="#tickets" className="flex items-center gap-2 text-white text-base font-semibold hover:opacity-70 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2" y="5" width="16" height="10" rx="2" stroke="white" strokeWidth="1.5" />
            <path d="M7 9h6M7 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Tickets
        </a>
        <button
          aria-label="Menü öffnen"
          className="flex items-center justify-center rounded-full size-[46px] bg-white"
        >
          <div className="flex flex-col gap-[5px]">
            <span className="block w-[21px] h-[1.5px] bg-[#0031ff]" />
            <span className="block w-[21px] h-[1.5px] bg-[#0031ff]" />
          </div>
        </button>
      </nav>
    </header>
  );
}
