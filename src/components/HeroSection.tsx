// Figma node: Hero/Template 1 (0:674)
// Assets expire in 7 days — replace with permanent assets for production
const heroBg = "https://www.figma.com/api/mcp/asset/c66b30c5-18e7-4f73-871f-6e2b3ff6c456";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ height: '860px' }}
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

      {/* Decorative color stripes */}
      <div className="absolute top-[86px] left-0 right-0 h-[470px] pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[624px] h-[94px]"
          style={{ background: 'linear-gradient(to right, #e88f6e, rgba(232,143,110,0))' }} />
        <div className="absolute top-[94px] left-0 flex">
          <div className="w-[201px] h-[94px]"
            style={{ background: 'linear-gradient(to right, rgba(0,49,255,0), #0031ff)' }} />
          <div className="w-[201px] h-[94px]"
            style={{ background: 'linear-gradient(to right, rgba(0,49,255,0), #0031ff)' }} />
        </div>
        <div className="absolute top-[188px] left-0 w-[252px] h-[94px] bg-[#e88f6e]" />
        <div className="absolute top-[94px] right-0 w-[432px] h-[94px]"
          style={{ background: 'linear-gradient(to left, #e88f6e, rgba(232,143,110,0))' }} />
        <div className="absolute top-[282px] right-0 w-[344px] h-[94px]"
          style={{ background: 'linear-gradient(to right, rgba(0,0,141,0), #00008d)' }} />
        <div className="absolute top-[376px] left-0 right-0 h-[94px]"
          style={{ background: 'linear-gradient(to right, #0031ff, rgba(0,49,255,0))' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-20 pb-20 flex flex-col gap-10 w-full">
        <h1
          id="hero-heading"
          className="text-white font-medium leading-none"
          style={{ fontSize: '120px', fontFamily: "'TT Hoves Pro Trial', Arial, sans-serif", lineHeight: 0.9 }}
        >
          <span className="block">Erleben und</span>
          <span className="block">entdecken</span>
        </h1>
        <div className="flex justify-end">
          <p
            className="text-white text-[18px] leading-relaxed"
            style={{ width: '434px', fontFamily: "'TT Hoves Pro Trial', Arial, sans-serif" }}
          >
            Das Moneyverse ist ein neuer Erlebnisort im Kaiserhaus in Bern, direkt neben dem Bundesplatz,
            in dem das facettenreiche Thema Geld mit interaktiven und multimedialen Formaten erlebbar wird.
          </p>
        </div>
      </div>
    </section>
  );
}
