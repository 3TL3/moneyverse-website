// Figma node: Section/Image Table (0:680)

const museumImg = "https://www.figma.com/api/mcp/asset/82c3d6b1-61f9-46af-974f-a62c29cd6163";

interface InfoRow {
  label: string;
  value: string;
  linkLabel?: string;
  linkHref?: string;
}

const infoRows: InfoRow[] = [
  { label: 'Eintritt', value: 'Kostenlos' },
  {
    label: 'Standort',
    value: 'Kaiserhaus, direkt am Bundesplatz',
    linkLabel: 'Zum Kaiserhaus',
    linkHref: '#kaiserhaus',
  },
];

export default function PracticalInfoSection() {
  return (
    <section className="flex items-center gap-24 p-20 bg-white" aria-labelledby="info-heading">
      {/* Photo with stripe decorations */}
      <div className="relative shrink-0 overflow-hidden" style={{ width: '585px', height: '585px' }}>
        <img
          src={museumImg}
          alt="Museum Kaiserhaus"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 w-[292px] h-[80px]"
          style={{ background: 'linear-gradient(to right, rgba(232,143,110,0), #e88f6e)' }}
          aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[292px] h-[80px]"
          style={{ background: 'linear-gradient(to left, rgba(0,151,255,0), #0097ff)' }}
          aria-hidden="true" />
      </div>

      {/* Info content */}
      <div className="flex flex-col gap-12 flex-1">
        <h2
          id="info-heading"
          className="font-medium text-[#1e1e1e]"
          style={{ fontSize: '55px', lineHeight: '64px' }}
        >
          Praktische Infos
        </h2>

        {/* Table — matches Figma divider-row pattern */}
        <div className="flex flex-col" style={{ width: '599px' }}>
          <div className="h-px bg-[#e4e2df]" />
          {infoRows.map((row, i) => (
            <div key={row.label}>
              <div className="flex items-center justify-between py-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] text-[#333] leading-[1.4]">
                    {row.label}
                  </span>
                  <span className="text-[20px] font-medium text-[#1e1e1e] leading-[1.4]">
                    {row.value}
                  </span>
                </div>
                {row.linkLabel && (
                  <a
                    href={row.linkHref}
                    className="text-[16px] font-medium text-[#1e1e1e] border-b border-[#1e1e1e] hover:opacity-70 transition-opacity"
                  >
                    {row.linkLabel}
                  </a>
                )}
              </div>
              {i < infoRows.length - 1 && <div className="h-px bg-[#e4e2df]" />}
            </div>
          ))}
          <div className="h-px bg-[#e4e2df]" />
        </div>

        {/* Blue pill button — Figma: bg-[#0031ff] rounded-[120px] */}
        <a
          href="#infos"
          className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-[120px] w-fit hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#0031ff' }}
        >
          <span className="text-[16px] font-medium text-white whitespace-nowrap leading-[0.9]">
            Zu den Infos
          </span>
          <span
            className="flex items-center justify-center rounded-full shrink-0 size-[38px] bg-white"
            aria-hidden="true"
          >
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="#0031ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
