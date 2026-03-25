/**
 * Site navigation bar — fixed at the top of the page over the hero image.
 * Figma node: Navigationbar (0:112)
 *
 * Layout: three zones within a full-width translucent header (backdrop-blur):
 * - Left (352px): opening-hours badge with clock icon
 * - Centre: MoneyVerse logo at exact Figma dimensions (127.892 × 42.559px)
 * - Right: Barrierefreiheit link, Tickets link, hamburger menu button
 *
 * The hamburger button uses `aria-expanded` to expose open/closed state to
 * assistive technology. Menu drawer rendering is not yet implemented.
 *
 * NOTE: All icon/logo assets are served by the Figma MCP server and expire in
 * 7 days. Replace with permanent SVG files before production.
 */
import { useState } from 'react';

/** MoneyVerse logo — exact Figma dimensions: 127.892 × 42.559px. */
const logoSrc = "https://www.figma.com/api/mcp/asset/82357f36-f713-4341-ab5f-64d156983578";

/** Inline clock icon (white, 20×20). */
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/>
      <path d="M10 6v4l2.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Inline wheelchair / accessibility icon (white, 20×20). */
function BarrierIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="3" r="1.5" fill="white"/>
      <path d="M10 5v4.5H7L5.5 14h7L14 10h2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="7.5" cy="16" r="2" stroke="white" strokeWidth="1.4"/>
    </svg>
  );
}

/** Inline ticket icon (white, 20×20). */
function TicketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 8a1 1 0 011-1h14a1 1 0 011 1v1.5a2 2 0 010 3V14a1 1 0 01-1 1H3a1 1 0 01-1-1v-1.5a2 2 0 010-3V8z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 right-0 z-50 flex items-center max-lg:justify-end lg:justify-between px-5 py-4 md:px-8 md:py-5"
      style={{ backdropFilter: 'blur(7px)', backgroundColor: 'rgba(30,30,30,0.19)' }}
    >
      {/* Left: opening hours — desktop only (lg+) */}
      <div className="max-lg:hidden flex items-center gap-2 w-[352px]">
        <ClockIcon />
        <span className="text-white text-[16px] font-semibold leading-[1.5] whitespace-nowrap">
          Heute offen 10 - 17 Uhr
        </span>
      </div>

      {/* Center: logo — exact Figma dimensions 127.892 × 42.559px.
          Mobile: absolutely centred in the header bar.
          Desktop (lg+): sits in normal flow between the three zones. */}
      <a
        href="#"
        aria-label="MoneyVerse – Startseite"
        className="relative shrink-0 max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2"
        style={{ width: '127.892px', height: '42.559px' }}
      >
        <img
          src={logoSrc}
          alt="MoneyVerse"
          className="absolute block w-full h-full"
          style={{ objectFit: 'contain', maxWidth: 'none' }}
        />
      </a>

      {/* Right: nav links (desktop only) + hamburger (always visible) */}
      <div className="flex items-center gap-6 lg:gap-10">
        <a
          href="#barrierefreiheit"
          className="max-lg:hidden flex items-center gap-2 text-white text-[16px] font-semibold leading-[1.5] hover:opacity-70 transition-opacity"
        >
          <BarrierIcon />
          Barrierefreiheit
        </a>
        <a
          href="#tickets"
          className="max-lg:hidden flex items-center gap-2 text-white text-[16px] font-semibold leading-[1.5] hover:opacity-70 transition-opacity"
        >
          <TicketIcon />
          Tickets
        </a>
        {/* Menu button: white circle, blue lines — from Figma Button component */}
        <button
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen(o => !o)}
          className="flex items-center justify-center rounded-full shrink-0 size-[42px] md:size-[46px] bg-white"
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
