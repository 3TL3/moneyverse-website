/**
 * Newsletter sign-up section.
 * Figma node: Section/Newsletter (0:681)
 *
 * Blue gradient background matching the ticket and footer sections.
 * Contains a simple email + checkbox form with three local state values:
 * - `email` — controlled input for the user's e-mail address
 * - `accepted` — controlled checkbox for AGB acceptance (required)
 * - `submitted` — switches the form to a confirmation message on success
 *
 * The submit button follows the Figma "Textbutton" style (text + blue arrow circle).
 * Form submission is client-side only; wire up to a real API endpoint for production.
 */
import { useState, type FormEvent } from 'react';

export default function NewsletterSection() {
  /** User-entered e-mail address. */
  const [email, setEmail] = useState('');
  /** Whether the user has accepted the AGBs (required to submit). */
  const [accepted, setAccepted] = useState(false);
  /** True after a successful submit — shows a confirmation message instead of the form. */
  const [submitted, setSubmitted] = useState(false);

  /** Handles form submission: prevents default browser navigation and marks as submitted. */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-10 lg:pt-20" aria-labelledby="newsletter-heading">
      <div
        className="flex flex-col gap-8 lg:gap-12 px-5 py-10 md:px-10 md:py-14 lg:px-20 lg:py-20"
        style={{ background: 'linear-gradient(to right, #0097ff, #0031ff 52%)' }}
      >
        <h2
          id="newsletter-heading"
          className="font-medium text-white text-[28px] md:text-[40px] lg:text-[55px]"
          style={{ lineHeight: '1.15' }}
        >
          Newsletter abonnieren
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0 justify-between">
          <p className="text-[15px] md:text-[17px] lg:text-[19px] text-white leading-[1.45] w-full lg:w-[427px]">
            Unsere Geschichten in dein E-Mail Postfach. Wir schicken dir monatlich alle Geldnews
            und Updates von Moneyverse bequem in dein Postfach.
          </p>

          {submitted ? (
            <p className="text-white font-semibold text-lg" role="status">
              Danke! Du erhältst bald eine Bestätigung.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 lg:gap-12 w-full lg:w-[426px]">
              <div className="flex flex-col gap-7">
                {/* Email input with underline — matches Figma Input Field */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="newsletter-email" className="text-[14px] text-white leading-[1.4]">
                    E-Mail eingeben
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="ihre@email.ch"
                    required
                    aria-label="E-Mail"
                    className="bg-transparent text-white text-[17px] leading-[1.45] border-0 border-b border-[#ddd] pb-1 focus:outline-none placeholder-white/50"
                  />
                </div>

                {/* Checkbox — custom visual with accessible hidden native input */}
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <span
                    className={`relative flex-shrink-0 flex items-center justify-center w-[18px] h-[18px] rounded-sm border transition-colors duration-150 ${
                      accepted ? 'bg-white border-white' : 'bg-transparent border-white/60'
                    }`}
                  >
                    {/* Native input hidden but still focusable and accessible */}
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={e => setAccepted(e.target.checked)}
                      required
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />
                    {accepted && (
                      <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
                        <path d="M1 4l3 3 6-6" stroke="#0031ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  <span className="text-[14px] text-white leading-[1.4]">
                    Ich akzeptiere die{' '}
                    <a href="#agb" className="underline hover:opacity-70">AGB's</a>.
                  </span>
                </label>
              </div>

              {/* Submit — Figma Textbutton: text + blue arrow circle with grow + gradient hover */}
              <button
                type="submit"
                className="group inline-flex items-center gap-4 text-white text-[16px] font-medium leading-[0.9] w-fit"
              >
                Abonnieren
                {/* Fixed wrapper prevents layout shift during circle growth */}
                <span className="relative shrink-0 size-[42px]" aria-hidden="true">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full overflow-hidden size-[38px] group-hover:size-[42px] transition-[width,height] duration-300 ease-in-out">
                    <span className="absolute inset-0" style={{ backgroundColor: '#0031ff' }} />
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-[100ms]" style={{ background: 'linear-gradient(90deg, #0097ff, #0031ff 52%)' }} />
                    <svg className="relative z-10" width="15" height="11" viewBox="0 0 15 11" fill="none">
                      <path d="M0 5.5h13M9 1l5 4.5L9 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
