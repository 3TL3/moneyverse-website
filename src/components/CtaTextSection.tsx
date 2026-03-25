/**
 * CTA text section — two-column layout between the teasers and the tickets block.
 * Figma node: Text / Pattern → Template 2 (0:676)
 *
 * Left column: 55px heading at 585px width (matching the teaser image column).
 * Right column: 19px body text, vertically centred.
 */

/** Shared font stack — TT Hoves Pro Trial with system fallbacks. */
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

export default function CtaTextSection() {
  return (
    <section className="flex flex-col items-start px-5 py-10 md:px-10 md:py-16 lg:p-20 bg-white">
      <div className="flex flex-col w-full gap-6 lg:gap-8">
        <h2
          className="font-medium text-black text-[28px] md:text-[40px] lg:text-[55px]"
          style={{ lineHeight: '1.15', fontFamily: font }}
        >
          Tauch ein ins Universum des Geldes
        </h2>
        <p className="text-[16px] md:text-[19px] text-[#333] leading-[1.45] max-w-[600px]" style={{ fontFamily: font }}>
          Die Ausstellung vermittelt das facettenreiche Thema Geld mit interaktiven und multimedialen Formaten
        </p>
      </div>
    </section>
  );
}
