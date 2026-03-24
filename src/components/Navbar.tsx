// Figma node: Navigationbar (0:112) — exact dimensions from Figma
// Logo: 127.892 × 42.559px (from Figma node I0:674;4:4202;4:4190)
// Assets expire in 7 days — replace with permanent assets for production
import { useState } from 'react';
const logoSrc = "https://www.figma.com/api/mcp/asset/82357f36-f713-4341-ab5f-64d156983578";
const clockIconPath = "https://www.figma.com/api/mcp/asset/7145b8f4-988d-4e21-b408-5beeeb579ac6";
const barrierIconPath = "https://www.figma.com/api/mcp/asset/5961d56f-e28d-470e-8659-38958b7d50cf";
const ticketIconPath = "https://www.figma.com/api/mcp/asset/4902903b-b064-46a0-be9c-7cca5f4cab5c";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ backdropFilter: 'blur(7px)', backgroundColor: 'rgba(30,30,30,0.19)' }}
    >
      {/* Left: opening hours */}
      <div className="flex items-center gap-2 w-[352px]">
        <div className="relative shrink-0 size-[20px] overflow-clip">
          <img src={clockIconPath} alt="" className="absolute inset-0 w-full h-full" />
        </div>
        <span className="text-white text-[16px] font-semibold leading-[1.5] whitespace-nowrap">
          Heute offen 10 - 17 Uhr
        </span>
      </div>

      {/* Center: logo — exact Figma dimensions 127.892 × 42.559px */}
      <a href="#" aria-label="MoneyVerse – Startseite" className="relative shrink-0" style={{ width: '127.892px', height: '42.559px' }}>
        <img
          src={logoSrc}
          alt="MoneyVerse"
          className="absolute block w-full h-full"
          style={{ objectFit: 'contain', maxWidth: 'none' }}
        />
      </a>

      {/* Right: Barrierefreiheit, Tickets, Menu */}
      <div className="flex items-center gap-10">
        <a href="#barrierefreiheit" className="flex items-center gap-2 text-white text-[16px] font-semibold leading-[1.5] hover:opacity-70 transition-opacity">
          <div className="relative shrink-0 size-[20px] overflow-clip">
            <img src={barrierIconPath} alt="" className="absolute inset-0 w-full h-full" />
          </div>
          Barrierefreiheit
        </a>
        <a href="#tickets" className="flex items-center gap-2 text-white text-[16px] font-semibold leading-[1.5] hover:opacity-70 transition-opacity">
          <div className="relative shrink-0 size-[20px]">
            <img src={ticketIconPath} alt="" className="absolute inset-0 w-full h-full" />
          </div>
          Tickets
        </a>
        {/* Menu button: white circle, blue lines — from Figma Button component */}
        <button
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(o => !o)}
          className="flex items-center justify-center rounded-full shrink-0 size-[46px] bg-white"
        >
          <div className="flex flex-col gap-[4px]">
            <span className="block w-[21px] bg-[#0031ff]" style={{ height: '1.5px' }} />
            <span className="block w-[21px] bg-[#0031ff]" style={{ height: '1.5px' }} />
          </div>
        </button>
      </div>
    </header>
  );
}
