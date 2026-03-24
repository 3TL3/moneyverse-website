export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-end pb-20 overflow-hidden"
      style={{ backgroundColor: '#05050F' }}
      aria-labelledby="hero-heading"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1440&q=80)',
        }}
        role="presentation"
      />

      {/* Orange geometric accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-80"
        style={{
          background: '#E87C3E',
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
        }}
        aria-hidden="true"
      />

      {/* Blue gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,85,255,0.6) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-8 md:px-16 max-w-7xl">
        <p className="text-white text-sm mb-4 opacity-80">MoneyVerse / Themendetail</p>
        <h1
          id="hero-heading"
          className="text-white font-bold leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          Erleben und entdecken
        </h1>
        <p className="text-white mt-4 max-w-lg opacity-90 text-base leading-relaxed">
          Taucht ein in das faszinierende Universum des Geldes — von der Entstehung
          bis zur digitalen Zukunft.
        </p>
      </div>
    </section>
  );
}
