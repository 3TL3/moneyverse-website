/**
 * Hero section — the full-width opening banner of the page.
 * Figma node: Hero/Template 1 (0:674)
 *
 * Layout: 860px tall, photo background with a blue (#0031ff) gradient overlay
 * and decorative colour stripes (orange #e88f6e, dark-blue #00008d) layered on top.
 * The large headline sits at the bottom-left; the teaser text is bottom-right.
 *
 * NOTE: The heroBg asset URL is served by the Figma MCP server and expires after
 * 7 days. Replace it with a permanent CDN URL before going to production.
 */

/** Background photo URL from Figma MCP asset endpoint. */
const heroBg = "https://www.figma.com/api/mcp/asset/c66b30c5-18e7-4f73-871f-6e2b3ff6c456";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden min-h-[500px] md:min-h-[640px] lg:h-[860px]"
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <img
        src={heroBg}
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue gradient overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(191deg, rgba(0,49,255,0) 38%, rgb(0,49,255) 76%)',
        }}
      />

      {/* Decorative color stripes — vertical position and row height are fixed (px) so stripes
          stay in place on the image. Widths use vw so they scale with the viewport width. */}
      <div className="absolute top-[86px] left-0 right-0 h-[470px] pointer-events-none" aria-hidden="true">
        {/* Row 1 — orange fade left (624px → 43vw) */}
        <div className="absolute top-0 left-0 h-[94px]"
          style={{ width: '43vw', background: 'linear-gradient(to right, #e88f6e, rgba(232,143,110,0))' }} />
        {/* Row 2 left — two blue gradients side by side (201px each → 14vw each) */}
        <div className="absolute top-[94px] left-0 flex h-[94px]" style={{ width: '28vw' }}>
          <div className="flex-1 h-full" style={{ background: 'linear-gradient(to right, rgba(0,49,255,0), #0031ff)' }} />
          <div className="flex-1 h-full" style={{ background: 'linear-gradient(to right, rgba(0,49,255,0), #0031ff)' }} />
        </div>
        {/* Row 3 — solid orange left (252px → 17.5vw) */}
        <div className="absolute top-[188px] left-0 h-[94px] bg-[#e88f6e]"
          style={{ width: '17.5vw' }} />
        {/* Row 2 right — orange fade from right (432px → 30vw) */}
        <div className="absolute top-[94px] right-0 h-[94px]"
          style={{ width: '30vw', background: 'linear-gradient(to left, #e88f6e, rgba(232,143,110,0))' }} />
        {/* Row 4 right — dark blue fade (344px → 24vw) */}
        <div className="absolute top-[282px] right-0 h-[94px]"
          style={{ width: '24vw', background: 'linear-gradient(to right, rgba(0,0,141,0), #00008d)' }} />
        {/* Row 5 — blue fade full width */}
        <div className="absolute top-[376px] left-0 right-0 h-[94px]"
          style={{ background: 'linear-gradient(to right, #0031ff, rgba(0,49,255,0))' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-5 pb-8 md:px-10 md:pb-14 lg:px-20 lg:pb-20 flex flex-col gap-6 lg:gap-10 w-full">
        <h1
          id="hero-heading"
          className="text-white font-medium text-[52px] md:text-[60px] lg:text-[120px]"
          style={{ fontFamily: "'TT Hoves Pro Trial', Arial, sans-serif", lineHeight: 0.9 }}
        >
          {/* Mobile: 3 Zeilen — "Erleben" / "und" / "entdecken" */}
          <span className="block md:hidden">Erleben</span>
          <span className="block md:hidden">und</span>
          <span className="block md:hidden">entdecken</span>
          {/* Tablet / Desktop: 2 Zeilen */}
          <span className="hidden md:block">Erleben und</span>
          <span className="hidden md:block">entdecken</span>
        </h1>
        <div className="flex md:justify-end">
          <p
            className="text-white text-[16px] md:text-[18px] leading-relaxed w-full md:w-[434px]"
            style={{ fontFamily: "'TT Hoves Pro Trial', Arial, sans-serif" }}
          >
            Das Moneyverse ist ein neuer Erlebnisort im Kaiserhaus in Bern, direkt neben dem Bundesplatz,
            in dem das facettenreiche Thema Geld mit interaktiven und multimedialen Formaten erlebbar wird.
          </p>
        </div>
      </div>
    </section>
  );
}
