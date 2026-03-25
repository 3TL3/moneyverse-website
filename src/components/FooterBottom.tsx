/**
 * Lower footer block — dark navy background with the large MONEYVERSE logotype
 * and legal navigation links.
 * Figma node: Section/Footer Bottom (0:683)
 *
 * The logotype is assembled from 10 SVG vector pieces sourced from Figma, each
 * absolutely positioned inside a container with a fixed 1440:426.667 aspect ratio
 * so the wordmark scales proportionally with the viewport.
 *
 * Background colour: #00008d (dark navy / Moneyverse brand dark-blue).
 *
 * NOTE: Vector asset URLs are served by Figma MCP and expire after 7 days.
 * Replace with permanent CDN URLs before production.
 */

/** Shared font stack — TT Hoves Pro Trial with system fallbacks. */
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

/** Individual vector piece of the MONEYVERSE logotype. */
interface LogoPiece {
  /** CSS inset shorthand ("top right bottom left") as percentage strings. */
  inset: string;
  /** Figma MCP asset URL. */
  src: string;
}

const logoPieces: LogoPiece[] = [
  { inset: '0.52% 14.83% 54.35% 72.71%',  src: 'https://www.figma.com/api/mcp/asset/19b82e3b-e396-4553-b6db-d14c6d25e324' },
  { inset: '54.52% 83.08% 0.14% 0.1%',    src: 'https://www.figma.com/api/mcp/asset/09d32da0-20b1-45ce-903a-e3261274748f' },
  { inset: '54.52% 69.11% 0.14% 18.37%',  src: 'https://www.figma.com/api/mcp/asset/86b0218b-637f-4021-a98f-f104acfb5a02' },
  { inset: '54.52% 4.12% 0.14% 83.36%',   src: 'https://www.figma.com/api/mcp/asset/281a6408-3422-4b5e-9556-edf0ef0634cb' },
  { inset: '0.31% 47.28% 54.5% 21.23%',   src: 'https://www.figma.com/api/mcp/asset/2c390489-3884-40cc-ba74-f272c89b0968' },
  { inset: '0.52% 0.18% 54.35% 86.78%',   src: 'https://www.figma.com/api/mcp/asset/01733d77-d4af-4456-b448-911c8d2069f1' },
  { inset: '0.52% 80.9% 54.53% 0.13%',    src: 'https://www.figma.com/api/mcp/asset/e9a6685a-c763-49a5-82a1-80f332fcf26b' },
  { inset: '0.52% 30.01% 54.35% 54.84%',  src: 'https://www.figma.com/api/mcp/asset/619e91c5-a67b-46ab-a2f5-0e77d2022466' },
  { inset: '54.52% 33.85% 0.14% 33.55%',  src: 'https://www.figma.com/api/mcp/asset/e49a39b5-a543-483a-819c-b121ebdebd35' },
  { inset: '54.52% 18.69% 0.14% 67.47%',  src: 'https://www.figma.com/api/mcp/asset/cb4890a3-3309-43e8-97a7-70cef4de178e' },
];

export default function FooterBottom() {
  return (
    <div
      className="flex flex-col gap-8 lg:gap-12 items-center pb-8 pt-10 px-5 md:px-10 md:pb-10 md:pt-14 lg:pb-12 lg:pt-20 lg:px-20"
      style={{ backgroundColor: '#00008d' }}
    >
      {/* MONEYVERSE logotype — 10 vector pieces, proportionally scaled */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '1440 / 426.667' }}
        aria-label="MONEYVERSE"
        role="img"
      >
        {logoPieces.map((piece, i) => (
          <img
            key={i}
            src={piece.src}
            alt=""
            aria-hidden="true"
            className="absolute"
            style={{ inset: piece.inset, width: 'auto', height: 'auto' }}
          />
        ))}
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
