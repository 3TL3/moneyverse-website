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
    body: 'Erleben Sie die faszinierende Dauerausstellung rund ums Geld — von der Entstehung des Münzgeldes bis zur digitalen Währung der Zukunft.',
    linkLabel: 'Mehr zur Ausstellung',
    linkHref: '#ausstellung',
    imageUrl: 'https://images.unsplash.com/photo-1526887520775-4b14b8aed897?w=800&q=80',
    imageAlt: 'Besucher in der Ausstellung',
    imageLeft: false,
  },
  {
    title: 'Thementouren',
    body: 'Begleiten Sie unsere Guides auf spannenden Thementouren und tauchen Sie tief in die Welt des Geldes ein.',
    linkLabel: 'Mehr zur Thementouren',
    linkHref: '#thementouren',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    imageAlt: 'Thementour im Museum',
    imageLeft: true,
  },
  {
    title: 'Schulklassen',
    body: 'Mit altersgerechten Programmen bieten wir Schulklassen unvergessliche Lernexpeditionen — vermittelt durch ausgebildete Museumspädagoginnen.',
    linkLabel: 'Angebot für Schulklassen',
    linkHref: '#schulklassen',
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80',
    imageAlt: 'Schulklasse im Museum',
    imageLeft: true,
  },
];

export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <HeroSection />
        <div id="ausstellung">
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
