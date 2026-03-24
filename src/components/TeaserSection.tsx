// Figma node: Section/Teaser/Off Grid (0:675)
// Assets expire in 7 days — replace with permanent assets for production
const arrowIcon = "https://www.figma.com/api/mcp/asset/43c3604e-6f1a-4baf-8b19-dd420cc017cf";

interface TeaserSectionProps {
  title: string;
  body: string;
  linkLabel: string;
  linkHref: string;
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
}

export default function TeaserSection({
  title,
  body,
  linkLabel,
  linkHref,
  imageUrl,
  imageAlt,
  imageLeft = false,
}: TeaserSectionProps) {
  const font = "'TT Hoves Pro Trial', Arial, sans-serif";

  const imageBlock = (
    <div className="relative shrink-0 overflow-hidden" style={{ width: '585px', height: '585px' }}>
      <img src={imageUrl} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      {/* Decorative stripes */}
      <div className="absolute top-0 left-0 w-[292px] h-[80px]"
        style={{ background: 'linear-gradient(to right, rgba(232,143,110,0), #e88f6e)' }} aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[292px] h-[80px]"
        style={{ background: 'linear-gradient(to left, rgba(0,151,255,0), #0097ff)' }} aria-hidden="true" />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col gap-8 flex-1 py-12" style={{ paddingRight: '64px' }}>
      <div className="flex flex-col gap-6">
        <h2 className="text-[30px] font-medium text-[#1e1e1e] leading-[1.24]" style={{ fontFamily: font }}>
          {title}
        </h2>
        <p className="text-[17px] text-[#333] leading-[1.45]" style={{ fontFamily: font }}>
          {body}
        </p>
      </div>
      <a
        href={linkHref}
        className="inline-flex items-center gap-4 text-[16px] font-medium text-[#1e1e1e] hover:opacity-70 transition-opacity"
        style={{ fontFamily: font }}
      >
        {linkLabel}
        <span
          className="flex items-center justify-center rounded-full shrink-0 size-[38px]"
          style={{ backgroundColor: '#0031ff' }}
          aria-hidden="true"
        >
          <img src={arrowIcon} alt="" className="w-[15px]" />
        </span>
      </a>
    </div>
  );

  return (
    <section className="flex items-start gap-0 px-20 py-0">
      {imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </section>
  );
}
