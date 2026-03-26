/**
 * Practical information section — photo left, info table right.
 * Figma node: Section/Image Table (0:680)
 *
 * The table rows follow the Figma "divider-row" pattern: horizontal rules
 * separate each row, with a small grey label above a larger medium-weight value.
 * Optional `linkLabel` / `linkHref` fields render an underlined text link
 * aligned to the right of the row.
 *
 * NOTE: museumImg is served by the Figma MCP server and expires after 7 days.
 * Replace with a permanent CDN URL before production.
 */

/** Museum photo — Figma MCP asset (expires in 7 days). */
const museumImg = "https://www.figma.com/api/mcp/asset/82c3d6b1-61f9-46af-974f-a62c29cd6163";

/** A single row in the practical-info table. */
interface InfoRow {
  /** Short category label (e.g. "Eintritt"). */
  label: string;
  /** Main value text (e.g. "Kostenlos"). */
  value: string;
  /** Optional link label rendered right-aligned in the row. */
  linkLabel?: string;
  /** Destination URL for the optional row link. */
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
    <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24 p-5 md:p-10 lg:p-20 bg-white" aria-labelledby="info-heading">
      {/* Photo with stripe decorations */}
      <div className="relative w-full aspect-square lg:w-1/2 lg:aspect-square overflow-hidden">
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
      <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-1/2">
        <h2
          id="info-heading"
          className="font-medium text-[#1e1e1e] text-[28px] md:text-[40px] lg:text-[55px]"
          style={{ lineHeight: '1.15' }}
        >
          Praktische Infos
        </h2>

        {/* Table — matches Figma divider-row pattern */}
        <div className="flex flex-col w-full">
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
          className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-[120px] w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0031ff] focus-visible:ring-offset-2"
          style={{ backgroundColor: '#0031ff' }}
        >
          <span className="text-[16px] font-medium text-white whitespace-nowrap leading-[0.9]">
            Zu den Infos
          </span>
          {/* Fixed wrapper prevents layout shift during circle growth */}
          <span className="relative shrink-0 size-[42px]" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full overflow-hidden size-[38px] group-hover:size-[42px] group-focus-visible:size-[42px] transition-[width,height] duration-300 ease-in-out bg-white">
              <svg className="relative z-10" width="15" height="11" viewBox="0 0 15 11" fill="none">
                <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="#0031ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
