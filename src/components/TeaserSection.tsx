// Figma node: Section/Teaser/Off Grid (0:675)
import ArrowButton from './ArrowButton';

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
  const imageBlock = (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{ width: '585px', height: '585px' }}
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Decorative stripe top-left — orange fade */}
      <div
        className="absolute top-0 left-0 w-[292px] h-[80px]"
        style={{ background: 'linear-gradient(to right, rgba(232,143,110,0), #e88f6e)' }}
        aria-hidden="true"
      />
      {/* Decorative stripe bottom-right — blue fade */}
      <div
        className="absolute bottom-0 right-0 w-[292px] h-[80px]"
        style={{ background: 'linear-gradient(to left, rgba(0,151,255,0), #0097ff)' }}
        aria-hidden="true"
      />
    </div>
  );

  const textBlock = (
    <div
      className="flex flex-col gap-8 flex-1 justify-center"
      style={{ paddingRight: imageLeft ? '0' : '64px', paddingLeft: imageLeft ? '64px' : '0' }}
    >
      <div className="flex flex-col gap-6">
        <h2
          className="text-[30px] font-medium text-[#1e1e1e] leading-[1.24]"
        >
          {title}
        </h2>
        <p className="text-[17px] text-[#333] leading-[1.45]">
          {body}
        </p>
      </div>
      <ArrowButton label={linkLabel} href={linkHref} />
    </div>
  );

  return (
    <section className="flex items-start px-20">
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
