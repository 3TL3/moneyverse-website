interface InfoItem {
  label: string;
  detail: string;
}

const infoItems: InfoItem[] = [
  { label: 'Öffnungszeiten', detail: 'Di–So 10:00–17:00 Uhr' },
  { label: 'Anfahrt', detail: 'Museumstrasse 14/16, 3011 Bern' },
  { label: 'Anreise per Bus/Bahn', detail: 'Tram 9, Haltestelle Museumstrasse' },
  { label: 'Eintrittspreise', detail: 'Ab CHF 12.– / Kinder frei' },
];

export default function PracticalInfoSection() {
  return (
    <section
      className="grid md:grid-cols-2 min-h-[500px]"
      aria-labelledby="info-heading"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-80 md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
          alt="Museum Innenraum"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center gap-6 py-12 px-8 md:px-16">
        <h2
          id="info-heading"
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Praktische Infos
        </h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {infoItems.map((item) => (
            <div key={item.label}>
              <dt className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-1">
                {item.label}
              </dt>
              <dd className="text-gray-600 text-sm leading-relaxed">{item.detail}</dd>
            </div>
          ))}
        </dl>

        <a
          href="#infos"
          className="inline-flex items-center gap-2 text-white font-semibold px-5 py-3 rounded-full w-fit transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#0055FF' }}
        >
          Zu den Infos
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
