// Assets expire in 7 days — replace with permanent assets for production
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TeaserSection from './components/TeaserSection';
import CtaTextSection from './components/CtaTextSection';
import TicketsSection from './components/TicketsSection';
import PracticalInfoSection from './components/PracticalInfoSection';
import NewsletterSection from './components/NewsletterSection';
import FooterTop from './components/FooterTop';
import FooterBottom from './components/FooterBottom';

const teaserItems = [
  {
    title: 'Ausstellung',
    body: 'Das Moneyverse bietet Einblicke in eine der bedeutendsten Erfindungen der Menschheit. In vier Geldwelten wird das Phänomen aus verschiedenen Perspektiven betrachtet: historisch, wirtschaftlich, gesellschaftlich und persönlich.',
    linkLabel: 'Mehr zur Ausstellung',
    linkHref: '#ausstellung',
    imageUrl: 'https://www.figma.com/api/mcp/asset/16395c70-dafb-4f2b-8316-de1a321fe794',
    imageAlt: 'Besucher in der Ausstellung',
    imageLeft: false,
  },
  {
    title: 'Thementouren',
    body: 'Was macht die Nationalbank? Warum ist die Schweiz reich? Und macht Geld glücklich? Auf unseren Audio-Walks spazierst du mit Expert:innen aus Wissenschaft, Kultur und Wirtschaft durch das Moneyverse.',
    linkLabel: 'Mehr zur Thementouren',
    linkHref: '#thementouren',
    imageUrl: 'https://www.figma.com/api/mcp/asset/708aedea-db50-440e-8cf1-ca7fa5f285d0',
    imageAlt: 'Thementour im Museum',
    imageLeft: true,
  },
  {
    title: 'Schulklassen',
    body: 'Geld spielt in jeder Lebensphase eine Rolle. In interaktiven Rundgängen für Schulklassen der Sekundarstufen I und II greifen wir die Alltagsnähe auf und verknüpfen sie mit lehrplanrelevanten Inhalten.',
    linkLabel: 'Angebote für Schulklassen',
    linkHref: '#schulklassen',
    imageUrl: 'https://www.figma.com/api/mcp/asset/67130d99-4d74-47d9-8e59-3cc62da10923',
    imageAlt: 'Schulklasse im Museum',
    imageLeft: false,
  },
];

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <HeroSection />
        <div className="py-20 flex flex-col gap-20 bg-white">
          {teaserItems.map((item) => (
            <TeaserSection key={item.title} {...item} />
          ))}
        </div>
        <CtaTextSection />
        <TicketsSection />
        <PracticalInfoSection />
        <NewsletterSection />
      </main>
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
