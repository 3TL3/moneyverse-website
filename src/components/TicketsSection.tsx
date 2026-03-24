interface TicketCategory {
  id: number;
  label: string;
  imageUrl: string;
}

const ticketCategories: TicketCategory[] = [
  {
    id: 1,
    label: 'Erwachsene',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
  },
  {
    id: 2,
    label: 'Kinder & Jugendliche',
    imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80',
  },
  {
    id: 3,
    label: 'Gruppen & Schulen',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
  },
];

export default function TicketsSection() {
  return (
    <section
      className="py-20 px-8 md:px-16"
      style={{ backgroundColor: '#0055FF' }}
      aria-labelledby="tickets-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="tickets-heading"
          className="text-white font-bold text-4xl mb-4"
        >
          Tickets
        </h2>
        <p className="text-white opacity-80 mb-10 max-w-lg leading-relaxed">
          Sichern Sie sich Ihr Ticket und erleben Sie das Universum des Geldes
          hautnah mit der ganzen Familie.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {ticketCategories.map((cat) => (
            <div key={cat.id} className="overflow-hidden rounded-lg">
              <img
                src={cat.imageUrl}
                alt={cat.label}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <p className="text-white font-semibold mt-2">{cat.label}</p>
            </div>
          ))}
        </div>

        <a
          href="#tickets-kaufen"
          className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90"
          style={{ color: '#0055FF' }}
        >
          Jetzt Tickets kaufen
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
