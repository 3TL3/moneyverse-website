// Figma node: Section/Footer Top (0:682)
const instagramIcon = "https://www.figma.com/api/mcp/asset/a37a9815-209a-4538-a2b0-a8d87df5806c";
const linkedinIcon = "https://www.figma.com/api/mcp/asset/2e798bf6-d5af-4f13-812f-caca73fbde83";
const tiktokIcon = "https://www.figma.com/api/mcp/asset/7b8530f7-861a-4c3e-a16f-856c3dab8d09";
const font = "'TT Hoves Pro Trial', Arial, sans-serif";

const linkColumns = [
  { links: ['Medien', 'Offene Stellen', 'News & Stories'] },
  { links: ['Schulen und Gruppen', 'Praktische Informationen', 'Barrierefreiheit'] },
];

const socialLinks = [
  { label: 'Instagram', icon: instagramIcon, href: '#' },
  { label: 'LinkedIn', icon: linkedinIcon, href: '#' },
  { label: 'TikTok', icon: tiktokIcon, href: '#' },
];

export default function FooterTop() {
  return (
<div
      className="flex flex-col"
      
      style={{ background: 'linear-gradient(to right, #0097ff, #0031ff 52%)' }}
    >
      <div className="h-px bg-[#e4e2df]" />
      <div className="flex items-center justify-between px-20 py-20">
        {/* Left: contact info */}
        <address className="not-italic flex flex-col gap-4 text-white" style={{ width: '427px' }}>
          <div className="flex flex-col gap-1 text-[19px] font-medium leading-[1.4]" style={{ fontFamily: font }}>
            <p>Kaiserhaus, Musterstrasse 12,  3007, Bern</p>
            <div className="flex gap-4">
              <a href="mailto:info@moneyverse.ch" className="hover:opacity-70 transition-opacity">info@moneyverse.ch</a>
              <a href="tel:+41787787848" className="hover:opacity-70 transition-opacity">+41 78 778 78 48</a>
            </div>
          </div>
          <p className="text-[17px] leading-[1.45]" style={{ fontFamily: font }}>
            Das Moneyverse ist eine Initiative der Schweizerischen Nationalbank (SNB) in Zusammenarbeit
            mit dem Bernischen Historischen Museum.
          </p>
        </address>

        {/* Right: link columns + social */}
        <nav className="flex gap-12" aria-label="Footer Navigation">
          {linkColumns.map((col, i) => (
            <ul key={i} className="flex flex-col gap-3">
              {col.links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[16px] font-semibold text-white leading-[1.5] whitespace-nowrap hover:opacity-70 transition-opacity"
                    style={{ fontFamily: font }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}

          <ul className="flex flex-col gap-3">
            {socialLinks.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-[16px] font-semibold text-white leading-[1.5] hover:opacity-70 transition-opacity"
                  style={{ fontFamily: font }}
                  aria-label={item.label}
                >
                  <img src={item.icon} alt="" className="w-5 h-5" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
</div>
  );
}
