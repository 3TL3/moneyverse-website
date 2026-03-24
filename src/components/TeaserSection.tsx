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
  const textBlock = (
    <div className="flex flex-col justify-center gap-5 py-12 px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
      <p className="text-gray-600 leading-relaxed max-w-md">{body}</p>
      <a
        href={linkHref}
        className="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-full w-fit transition-all hover:opacity-90"
        style={{ backgroundColor: '#0055FF' }}
      >
        {linkLabel}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );

  const imageBlock = (
    <div className="relative overflow-hidden h-80 md:h-auto">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="grid md:grid-cols-2 min-h-[400px]">
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
