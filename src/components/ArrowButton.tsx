// Reusable arrow button matching Figma "Textbutton" pattern:
// label text + blue circle (38px) with white SVG arrow

interface ArrowButtonProps {
  label: string;
  href: string;
  textColor?: string;
}

export default function ArrowButton({ label, href, textColor = '#1e1e1e' }: ArrowButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-4 hover:opacity-70 transition-opacity"
    >
      <span className="text-[16px] font-medium leading-[0.9] whitespace-nowrap" style={{ color: textColor }}>
        {label}
      </span>
      <span
        className="flex items-center justify-center rounded-full shrink-0 size-[38px]"
        style={{ backgroundColor: '#0031ff' }}
        aria-hidden="true"
      >
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  );
}
