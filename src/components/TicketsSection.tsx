// Figma node: Section/Ticket (0:677)
// Pill button: white bg, dark text, blue arrow circle — matches Figma Button component

export default function TicketsSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #0097ff, #0031ff 52%)',
        height: '388px',
      }}
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
      <div className="relative z-10 flex flex-col items-center gap-8 text-center text-white" style={{ width: '520px' }}>
        <h2
          id="tickets-heading"
          className="font-medium whitespace-nowrap"
          style={{ fontSize: '55px', lineHeight: '64px' }}
        >
          Tickets
        </h2>
        <p className="text-[19px] leading-[1.45]">
          Ob als Einzelbesucher:in, Gruppe oder Schulklasse – die Angebote des Moneyverse sind für alle kostenlos. Wir freuen uns auf deinen Besuch!
        </p>
        {/* Figma Button: white pill, dark text, blue arrow circle */}
        <a
          href="#tickets-reservieren"
          className="inline-flex items-center gap-3 bg-white rounded-[120px] pl-6 pr-2 py-2 hover:opacity-90 transition-opacity"
        >
          <span className="text-[16px] font-medium text-[#1e1e1e] whitespace-nowrap leading-[0.9]">
            Jetzt Tickets reservieren
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
      </div>
    </section>
  );
}
