import { useState, type FormEvent } from 'react';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="py-20 px-8 md:px-16"
      style={{ backgroundColor: '#0A0A1A' }}
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="newsletter-heading"
          className="text-white font-bold text-4xl mb-4"
        >
          Newsletter abonnieren
        </h2>
        <p className="text-white opacity-70 mb-10 max-w-lg leading-relaxed">
          Bleiben Sie auf dem Laufenden über aktuelle Ausstellungen, Events und
          Angebote des MoneyVerse Museums.
        </p>

        {submitted ? (
          <p className="text-white font-semibold text-lg" role="status">
            Vielen Dank! Sie erhalten in Kürze eine Bestätigung.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="newsletter-firstname" className="text-white text-sm opacity-80">
                  Vorname
                </label>
                <input
                  id="newsletter-firstname"
                  type="text"
                  name="firstname"
                  placeholder="Vorname"
                  required
                  className="bg-white bg-opacity-10 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-50 px-4 py-3 rounded-lg min-w-48 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="newsletter-lastname" className="text-white text-sm opacity-80">
                  Nachname
                </label>
                <input
                  id="newsletter-lastname"
                  type="text"
                  name="lastname"
                  placeholder="Nachname"
                  required
                  className="bg-white bg-opacity-10 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-50 px-4 py-3 rounded-lg min-w-48 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="newsletter-email" className="text-white text-sm opacity-80">
                  E-Mail
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder="ihre@email.ch"
                  required
                  aria-label="E-Mail"
                  className="bg-white bg-opacity-10 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-50 px-4 py-3 rounded-lg min-w-64 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ color: '#0055FF' }}
            >
              Abonnieren
              <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
