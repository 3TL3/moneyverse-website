/**
 * Tickets section — full-width blue gradient banner promoting free admission.
 * Figma node: Section/Ticket (0:677)
 *
 * Background: horizontal gradient from #0097ff (light-blue) to #0031ff (medium-blue).
 * Layered decorative stripes (orange #e88f6e, dark-blue #00008d) mirror the hero pattern.
 * The CTA is a white pill button with a dark label and a blue arrow circle,
 * matching the Figma "Button" component spec.
 */

export default function TicketsSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden min-h-[320px] md:min-h-[388px]"
      style={{ background: 'linear-gradient(to right, #0097ff, #0031ff 52%)' }}
      aria-labelledby="tickets-heading"
    >
      {/* Decorative background pattern (from Figma Background Pattern node) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[163px] h-[97px] bg-[#e88f6e]" />
        <div className="absolute top-[97px] left-0 w-[565px] h-[97px]"
          style={{ background: 'linear-gradient(to right, #00008d, rgba(0,0,141,0) 1.333%)' }} />
        <div className="absolute top-[194px] left-0 flex">
          <div className="w-[174px] h-[97px]"
            style={{ background: 'linear-gradient(to right, rgba(232,143,110,0), #e88f6e)' }} />
          <div className="w-[174px] h-[97px]"
            style={{ background: 'linear-gradient(to right, rgba(232,143,110,0), #e88f6e)' }} />
        </div>
        <div className="absolute top-[291px] left-0 right-0 h-[97px]"
          style={{ background: 'linear-gradient(to right, #0031ff, rgba(0,49,255,0))' }} />
        <div className="absolute top-0 right-0 w-[432px] h-[97px]"
          style={{ background: 'linear-gradient(to left, rgba(232,143,110,0), #e88f6e)' }} />
        <div className="absolute top-[194px] right-0 w-[344px] h-[97px]"
          style={{ background: 'linear-gradient(to right, rgba(0,0,141,0), #00008d)' }} />
        <div className="absolute top-[291px] right-0 w-[426px] h-[97px]"
          style={{ background: 'linear-gradient(to left, rgba(232,143,110,0), #e88f6e)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 lg:gap-8 text-center text-white w-full max-w-[520px] px-5 lg:px-0">
        <h2
          id="tickets-heading"
          className="font-medium text-[36px] md:text-[48px] lg:text-[55px]"
          style={{ lineHeight: '1.15' }}
        >
          Tickets
        </h2>
        <p className="text-[15px] md:text-[17px] lg:text-[19px] leading-[1.45]">
          Ob als Einzelbesucher:in, Gruppe oder Schulklasse – die Angebote des Moneyverse sind für alle kostenlos. Wir freuen uns auf deinen Besuch!
        </p>
        {/* Figma Button: white pill, dark text, blue arrow circle with grow + gradient hover */}
        <a
          href="#tickets-reservieren"
          className="group inline-flex items-center gap-3 bg-white rounded-[120px] pl-6 pr-2 py-2"
        >
          <span className="text-[16px] font-medium text-[#1e1e1e] whitespace-nowrap leading-[0.9]">
            Jetzt Tickets reservieren
          </span>
          {/* Fixed wrapper prevents layout shift during circle growth */}
          <span className="relative shrink-0 size-[42px]" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full overflow-hidden size-[38px] group-hover:size-[42px] transition-[width,height] duration-300 ease-in-out">
              <span className="absolute inset-0" style={{ backgroundColor: '#0031ff' }} />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-[200ms]" style={{ background: 'linear-gradient(90deg, #0097ff, #0031ff 52%)' }} />
              <svg className="relative z-10" width="15" height="11" viewBox="0 0 15 11" fill="none">
                <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
