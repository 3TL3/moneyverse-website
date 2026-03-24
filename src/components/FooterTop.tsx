interface FooterNavColumn {
  heading: string;
  links: string[];
}

const footerNav: FooterNavColumn[] = [
  {
    heading: 'Besuch',
    links: ['Öffnungszeiten', 'Anfahrt', 'Barrierefreiheit', 'Shop'],
  },
  {
    heading: 'Schule & Bildung',
    links: ['Schulklassen', 'Führungen', 'Materialien', 'Anmeldung'],
  },
  {
    heading: 'Entdecken',
    links: ['Ausstellungen', 'Thementouren', 'Events', 'Blog'],
  },
  {
    heading: 'Museum',
    links: ['Über uns', 'Team', 'Presse', 'Karriere'],
  },
];

export default function FooterTop() {
  return (
    <footer
      className="py-16 px-8 md:px-16"
      style={{ backgroundColor: '#0A0A1A' }}
      aria-label="Footer Navigation"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Address */}
        <address className="not-italic text-white opacity-70 text-sm leading-relaxed md:col-span-1">
          <p className="font-semibold text-white opacity-100 mb-2">MoneyVerse</p>
          <p>Museumstrasse 14/16</p>
          <p>3011 Bern</p>
          <p className="mt-3">+41 31 555 00 00</p>
          <p>info@moneyverse.ch</p>
        </address>

        {/* Nav columns */}
        {footerNav.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="text-white font-semibold text-sm mb-4">{col.heading}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white opacity-60 text-sm hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}
