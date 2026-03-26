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

/** Clock icon — exact paths from moneyverse.ch (white, 20×20). */
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7.03141 2.82381C10.9946 1.18189 15.5379 3.06466 17.1799 7.02787C18.8218 10.9911 16.939 15.5344 12.9758 17.1763C9.01259 18.8182 4.46927 16.9355 2.82735 12.9723C1.1863 9.00904 3.0682 4.46572 7.03141 2.82381" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.75781 6.53418V10.5492L12.9139 12.4734" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Accessibility / person icon — exact paths from moneyverse.ch (white, 20×20). */
function BarrierIcon() {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" aria-hidden="true">
      <path d="M8.25 12.5387H11.75" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.3658 6.94503C12.8475 8.01003 7.14333 8.01003 3.625 6.94503" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.24552 7.69141C8.24552 11.1281 8.24552 15.2647 7.44719 17.3264" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7519 7.69141C11.7519 13.0114 11.7519 14.1347 12.5502 17.3264" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.0286 3.14393C11.5981 3.71345 11.5981 4.63682 11.0286 5.20632C10.4591 5.77584 9.53571 5.77584 8.9662 5.20632C8.39668 4.63681 8.39668 3.71344 8.9662 3.14393C9.53571 2.57442 10.4591 2.57442 11.0286 3.14393" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Ticket icon — exact paths from moneyverse.ch (white, 20×20). */
function TicketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.3385 5.64714C18.3385 4.72666 17.5923 3.98047 16.6719 3.98047H15.0052C14.7878 3.98964 14.6011 4.13815 14.5433 4.34797C14.3735 5.05082 13.7444 5.54594 13.0213 5.54593C12.2983 5.54592 11.6692 5.05076 11.4994 4.34791C11.4416 4.13812 11.255 3.98964 11.0375 3.98047H3.33854C2.41807 3.98047 1.67188 4.72666 1.67188 5.64714V14.8138C1.67188 15.7343 2.41807 16.4805 3.33854 16.4805H11.0375C11.255 16.4713 11.4416 16.3228 11.4994 16.113C11.6692 15.4102 12.2983 14.915 13.0213 14.915C13.7444 14.915 14.3735 15.4101 14.5433 16.113C14.6011 16.3228 14.7878 16.4713 15.0052 16.4805H16.6719C17.5923 16.4805 18.3385 15.7343 18.3385 14.8138V5.64714Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9245 12.9385V12.5218" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9245 10.4385V10.0218" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9245 7.93848V7.52181" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
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
