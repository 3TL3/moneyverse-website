// Figma node: Text / Pattern -> Template 2 (0:676)
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

export default function CtaTextSection() {
  return (
    <section className="flex flex-col items-start p-20 bg-white">
      <div className="flex w-full">
        <h2
          className="font-medium text-black shrink-0"
          style={{ fontSize: '55px', lineHeight: '64px', fontFamily: font, width: '585px' }}
        >
          Tauch ein ins Universum des Geldes
        </h2>
        <div className="flex flex-col justify-center flex-1 pl-20">
          <p className="text-[19px] text-[#333] leading-[1.45]" style={{ fontFamily: font }}>
            Die Ausstellung vermittelt das facettenreiche Thema Geld mit interaktiven und multimedialen Formaten
          </p>
        </div>
      </div>
    </section>
  );
}
