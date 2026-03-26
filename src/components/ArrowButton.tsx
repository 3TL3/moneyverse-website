/**
 * Reusable arrow button matching the Figma "Textbutton" pattern.
 * Renders as an anchor link with a text label and a blue circle (38px)
 * containing a white SVG arrow — used in teaser cards and info sections.
 *
 * Hover effect (matches moneyverse.ch):
 *  - Circle grows from 38 → 42px via width/height transition
 *  - Brand gradient (#0097ff → #0031ff) fades in as an overlay after 200ms
 *  - Fixed 42×42px outer wrapper prevents layout shift during growth
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
    <a href={href} className="group inline-flex items-center gap-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0031ff] focus-visible:ring-offset-2">
      <span className="text-[16px] font-medium leading-[0.9] whitespace-nowrap" style={{ color: textColor }}>
        {label}
      </span>

      {/* Fixed 42×42 wrapper — holds layout space while inner circle grows */}
      <span className="relative shrink-0 size-[42px]" aria-hidden="true">
        {/* Inner circle: 38px at rest → 42px on hover/focus, centered via absolute */}
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full overflow-hidden size-[38px] group-hover:size-[42px] group-focus-visible:size-[42px] transition-[width,height] duration-300 ease-in-out"
        >
          {/* Layer 1: solid base colour */}
          <span className="absolute inset-0" style={{ backgroundColor: '#0031ff' }} />
          {/* Layer 2: gradient fades in on hover (200ms delay after circle starts growing) */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-[100ms]"
            style={{ background: 'linear-gradient(90deg, #0097ff, #0031ff 52%)' }}
          />
          {/* Arrow */}
          <svg className="relative z-10" width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </span>
    </a>
  );
}
