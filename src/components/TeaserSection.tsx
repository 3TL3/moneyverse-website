/**
 * Teaser section — alternating image-and-text blocks for Ausstellung,
 * Thementouren, and Schulklassen.
 * Figma node: Section/Teaser/Off Grid (0:675)
 *
 * The image is a fixed 585×585px square with decorative gradient stripes
 * (orange top-left, light-blue #0097ff bottom-right). The `imageLeft` flag
 * controls whether the photo appears on the left or right side of the text.
 */
import ArrowButton from './ArrowButton';

/** Props for a single TeaserSection block. */
interface TeaserSectionProps {
  /** Section heading (e.g. "Ausstellung"). */
  title: string;
  /** Body copy describing the offering. */
  body: string;
  /** Label shown on the ArrowButton link. */
  linkLabel: string;
  /** Destination URL for the ArrowButton link. */
  linkHref: string;
  /** Photo URL — sourced from Figma MCP (expires in 7 days). */
  imageUrl: string;
  /** Accessible alt text for the photo. */
  imageAlt: string;
  /**
   * When `true` the photo is placed to the left of the text block.
   * @default false — photo is on the right.
   */
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
  /**
   * Mobile layout (< md):  Titel → Bild → Fliesstext → Button  (Einzelspalte)
   * Tablet / Desktop (md+): Zweispaltig — imageLeft steuert welche Seite das Bild hat.
   *
   * Umsetzung via CSS order:
   *   order-1 → Titel-Heading (nur mobile sichtbar, md:hidden)
   *   order-2 → Bild
   *   order-3 → Text + Button (Heading auf md+ sichtbar, auf mobile versteckt)
   */
  return (
    <section className="flex flex-col md:flex-row items-start px-5 md:px-10 lg:px-20">

      {/* Titel — mobile only (aria-hidden da das semantische h2 im Textblock steht) */}
      <h2
        className="md:hidden order-1 text-[22px] font-medium text-[#1e1e1e] leading-[1.24] pb-4"
        aria-hidden="true"
      >
        {title}
      </h2>

      {/* Bild */}
      <div
        className={[
          'relative overflow-hidden',
          'order-2',
          'w-full aspect-square',
          'md:w-1/2',
          'lg:w-[585px] lg:h-[585px] lg:shrink-0 lg:self-auto',
          imageLeft ? 'md:order-1' : 'md:order-2',
        ].join(' ')}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Decorative stripe top-left — orange fade */}
        <div
          className="absolute top-0 left-0 w-1/2 h-[80px]"
          style={{ background: 'linear-gradient(to right, rgba(232,143,110,0), #e88f6e)' }}
          aria-hidden="true"
        />
        {/* Decorative stripe bottom-right — blue fade */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-[80px]"
          style={{ background: 'linear-gradient(to left, rgba(0,151,255,0), #0097ff)' }}
          aria-hidden="true"
        />
      </div>

      {/* Text + Button */}
      <div
        className={[
          'flex flex-col gap-4 lg:gap-8 justify-center',
          'order-3 pt-5 md:pt-0',
          'md:flex-1',
          imageLeft ? 'md:order-2 md:pl-8 lg:pl-16' : 'md:order-1 md:pr-8 lg:pr-16',
        ].join(' ')}
      >
        {/* Heading — tablet/desktop only (mobile version rendered above) */}
        <h2 className="hidden md:block text-[22px] md:text-[26px] lg:text-[30px] font-medium text-[#1e1e1e] leading-[1.24]">
          {title}
        </h2>
        <p className="text-[15px] md:text-[17px] text-[#333] leading-[1.45]">
          {body}
        </p>
        <ArrowButton label={linkLabel} href={linkHref} />
      </div>

    </section>
  );
}
