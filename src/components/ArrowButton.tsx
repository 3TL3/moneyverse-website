/**
 * Reusable arrow button matching the Figma "Textbutton" pattern.
 * Renders as an anchor link with a text label and a blue circle (38px)
 * containing a white SVG arrow — used in teaser cards and info sections.
 */

/** Props for the ArrowButton component. */
interface ArrowButtonProps {
  /** Visible button label text. */
  label: string;
  /** The URL the button links to (anchor or page). */
  href: string;
  /**
   * Text colour for the label.
   * @default '#1e1e1e' (dark grey, matches Figma body text)
   */
  textColor?: string;
}

export default function ArrowButton({ label, href, textColor = '#1e1e1e' }: ArrowButtonProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-4 transition-opacity"
    >
      <span className="text-[16px] font-medium leading-[0.9] whitespace-nowrap" style={{ color: textColor }}>
        {label}
      </span>
      {/* Circle with crossfade arrow animation (matches moneyverse.ch) */}
      <span
        className="relative flex items-center justify-center rounded-full shrink-0 size-[38px]"
        style={{ backgroundColor: '#0031ff' }}
        aria-hidden="true"
      >
        {/* Arrow 1: visible at rest, fades out + moves right on hover */}
        <svg
          className="absolute transition-[opacity,transform] duration-300 ease-in-out opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-2"
          width="15" height="11" viewBox="0 0 15 11" fill="none"
        >
          <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Arrow 2: hidden at rest (shifted left), fades in + slides to centre on hover */}
        <svg
          className="absolute transition-[opacity,transform] duration-300 ease-in-out opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          width="15" height="11" viewBox="0 0 15 11" fill="none"
        >
          <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  );
}
