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
      {/* overflow-hidden clips arrows when they slide outside the circle */}
      <span
        className="relative flex items-center justify-center rounded-full shrink-0 size-[38px] overflow-hidden"
        style={{ backgroundColor: '#0031ff' }}
        aria-hidden="true"
      >
        {/* Arrow 1: at centre at rest, slides out to the right on hover */}
        <svg
          className="absolute transition-transform duration-500 ease-in-out translate-x-0 group-hover:translate-x-[150%]"
          width="15" height="11" viewBox="0 0 15 11" fill="none"
        >
          <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {/* Arrow 2: starts off-screen to the left, slides into centre on hover */}
        <svg
          className="absolute transition-transform duration-500 ease-in-out -translate-x-[150%] group-hover:translate-x-0"
          width="15" height="11" viewBox="0 0 15 11" fill="none"
        >
          <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  );
}
