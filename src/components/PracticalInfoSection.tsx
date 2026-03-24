// Figma node: Section/Image Table (0:680)
// Assets expire in 7 days — replace with permanent assets for production
const museumImg = "https://www.figma.com/api/mcp/asset/82c3d6b1-61f9-46af-974f-a62c29cd6163";
const arrowIcon = "https://www.figma.com/api/mcp/asset/bac2a151-7e70-44e3-bf40-f425aafa7eb7";
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

interface InfoRow {
  label: string;
  value: string;
  linkLabel?: string;
  linkHref?: string;
}

const infoRows: InfoRow[] = [
  { label: 'Eintritt', value: 'Kostenlos' },
  { label: 'Standort', value: 'Kaiserhaus, direkt am Bundesplatz', linkLabel: 'Zum Kaiserhaus', linkHref: '#kaiserhaus' },
];

export default function PracticalInfoSection() {
  return (
    <section className="flex items-center gap-24 p-20 bg-white" aria-labelledby="info-heading">
      {/* Image */}
      <div className="relative shrink-0 overflow-hidden" style={{ width: '585px', height: '585px' }}>
        <img src={museumImg} alt="Museum Kaiserhaus" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-0 left-0 w-[292px] h-[80px]"
          style={{ background: 'linear-gradient(to right, rgba(232,143,110,0), #e88f6e)' }} aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[292px] h-[80px]"
          style={{ background: 'linear-gradient(to left, rgba(0,151,255,0), #0097ff)' }} aria-hidden="true" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-12 flex-1">
        <h2
          id="info-heading"
          className="font-medium text-[#1e1e1e]"
          style={{ fontSize: '55px', lineHeight: '64px', fontFamily: font }}
        >
          Praktische Infos
        </h2>

        <div className="flex flex-col gap-6" style={{ width: '599px' }}>
          <div className="h-px bg-[#e4e2df]" />
          {infoRows.map((row, i) => (
            <div key={row.label}>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-[#333] leading-[1.4]" style={{ fontFamily: font }}>
                    {row.label}
                  </span>
                  <span className="text-[20px] font-medium text-[#1e1e1e] leading-[1.4]" style={{ fontFamily: font }}>
                    {row.value}
                  </span>
                </div>
                {row.linkLabel && (
                  <a
                    href={row.linkHref}
                    className="text-[16px] font-medium text-[#1e1e1e] border-b border-[#1e1e1e] hover:opacity-70 transition-opacity"
                    style={{ fontFamily: font }}
                  >
                    {row.linkLabel}
                  </a>
                )}
              </div>
              {i < infoRows.length - 1 && <div className="h-px bg-[#e4e2df] mt-6" />}
            </div>
          ))}
          <div className="h-px bg-[#e4e2df]" />
        </div>

        <a
          href="#tickets-reservieren"
          className="inline-flex items-center gap-3 rounded-[120px] pl-6 pr-2 py-2 hover:opacity-90 transition-opacity w-fit"
          style={{ backgroundColor: '#0031ff' }}
        >
          <span className="text-[16px] font-medium text-white whitespace-nowrap" style={{ fontFamily: font }}>
            Zu den Infos
          </span>
          <span
            className="flex items-center justify-center rounded-full shrink-0 size-[38px] bg-white"
            aria-hidden="true"
          >
            <img src={arrowIcon} alt="" className="w-[15px]" />
          </span>
        </a>
      </div>
    </section>
  );
}
