/**
 * Lower footer block — dark navy background with the large MONEYVERSE logotype
 * and legal navigation links.
 * Figma node: Section/Footer Bottom (0:683)
 *
 * The logotype uses `clamp(5rem, 15vw, 13rem)` so it scales with the viewport
 * while staying within readable bounds. The Figma original uses SVG vector paths
 * from TT Hoves Pro Trial Black — we replicate this with CSS text + the local font.
 *
 * Background colour: #00008d (dark navy / Moneyverse brand dark-blue).
 */

/** Shared font stack — TT Hoves Pro Trial with system fallbacks. */
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

export default function FooterBottom() {
  return (
    <div
      className="flex flex-col gap-8 lg:gap-12 items-center pb-8 pt-10 px-5 md:px-10 md:pb-10 md:pt-14 lg:pb-12 lg:pt-20 lg:px-20"
      style={{ backgroundColor: '#00008d' }}
    >
      {/* Big logotype — clamp keeps it within viewport on all screen sizes */}
      <div
        className="w-full overflow-hidden text-white font-black text-center select-none"
        style={{
          fontFamily: font,
          fontSize: 'clamp(1.8rem, 9vw, 13rem)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
        aria-label="MONEYVERSE"
      >
        MONEYVERSE
      </div>

      {/* Bottom bar — stacked on mobile, side-by-side on md+ */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 w-full text-[14px] md:text-[16px] font-semibold text-white"
        style={{ fontFamily: font }}
      >
        <p>©Moneyverse 2024</p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-8" aria-label="Rechtliche Links">
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Datenschutz">Datenschutz</a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Impressum">Impressum</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Cookie Einstellungen</a>
        </nav>
      </div>
    </div>
  );
}
