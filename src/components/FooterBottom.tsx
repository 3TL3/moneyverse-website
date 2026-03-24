// Figma node: Section/Footer Bottom (0:683)
// The MONEYVERSE logotype is rendered as large text matching the visual design.
// The original uses custom SVG path vectors from the "TT Hoves Pro Trial" font.
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

export default function FooterBottom() {
  return (
    <div
      className="flex flex-col gap-12 items-center pb-12 pt-20 px-20"
      style={{ backgroundColor: '#00008d' }}
    >
      {/* Big logotype */}
      <div
        className="w-full overflow-hidden text-white font-black text-center select-none"
        style={{
          fontFamily: font,
          fontSize: 'clamp(5rem, 15vw, 13rem)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
        aria-label="MONEYVERSE"
      >
        MONEYVERSE
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between w-full text-[16px] font-semibold text-white"
        style={{ fontFamily: font }}
      >
        <p>©Moneyverse 2024</p>
        <nav className="flex gap-8" aria-label="Rechtliche Links">
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Datenschutz">Datenschutz</a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Impressum">Impressum</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Cookie Einstellungen</a>
        </nav>
      </div>
    </div>
  );
}
