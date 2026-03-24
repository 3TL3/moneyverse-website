// Figma node: Section/Newsletter (0:681)
import { useState, type FormEvent } from 'react';
const arrowIcon = "https://www.figma.com/api/mcp/asset/2902c15c-1534-4b96-8019-6a284da3bd10";
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="pt-20"
      aria-labelledby="newsletter-heading"
    >
      <div
        className="flex flex-col gap-12 px-20 py-20"
        style={{ background: 'linear-gradient(to right, #0097ff, #0031ff 52%)' }}
      >
        <h2
          id="newsletter-heading"
          className="font-medium text-white whitespace-nowrap"
          style={{ fontSize: '55px', lineHeight: '64px', fontFamily: font, width: '640px' }}
        >
          Newsletter abonnieren
        </h2>

        <div className="flex items-start justify-between">
          <p className="text-[19px] text-white leading-[1.45]" style={{ fontFamily: font, width: '427px' }}>
            Unsere Geschichten in dein E-Mail Postfach. Wir schicken dir monatlich alle Geldnews und Updates
            von Moneyverse bequem in dein Postfach.
          </p>

          {submitted ? (
            <p className="text-white font-semibold text-lg" role="status" style={{ fontFamily: font }}>
              Danke! Du erhältst bald eine Bestätigung.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12" style={{ width: '426px' }}>
              <div className="flex flex-col gap-7">
                {/* Email input */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="newsletter-email"
                    className="text-[14px] text-white leading-[1.4]"
                    style={{ fontFamily: font }}
                  >
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
                    style={{ fontFamily: font }}
                  />
                </div>

                {/* Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={e => setAccepted(e.target.checked)}
                    required
                    className="w-[18px] h-[18px] rounded-sm border border-white/60 bg-white"
                  />
                  <span className="text-[14px] text-white leading-[1.4]" style={{ fontFamily: font }}>
                    Ich akzeptiere die{' '}
                    <a href="#agb" className="underline hover:opacity-70">AGB's</a>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-4 text-white text-[16px] font-medium hover:opacity-70 transition-opacity w-fit"
                style={{ fontFamily: font }}
              >
                Abonnieren
                <span
                  className="flex items-center justify-center rounded-full shrink-0 size-[38px] bg-white"
                  aria-hidden="true"
                >
                  <img src={arrowIcon} alt="" className="w-[15px]" style={{ filter: 'invert(1) brightness(0)' }} />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
