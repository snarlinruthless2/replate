import React from 'react';

const partners = ['Restaurants', 'Hotels', 'Supermarkets', 'Farms', 'Bakeries'];

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-[#1e4d2b] dark:bg-[#0d2214] text-[#faf6ef] flex flex-col justify-between pt-12 sm:pt-16 pb-0 overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-20 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center w-full">
        <div className="flex flex-col items-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#2a6639] dark:bg-[#1a3822] text-[#f5a83c] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-6 sm:mb-8 border border-[#4a8c5c]/30 shadow-sm">
            <span role="img" aria-label="sprout">🌱</span> Made by 9th Graders
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 font-display">
            Where surplus food,
            <br />
            <span className="text-[#e8820c] italic font-serif">finds a purpose.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#b8d4c0] dark:text-[#a0c5aa] leading-relaxed mb-8 sm:mb-10 max-w-md">
            Replate connects local food businesses with charities to rescue surplus meals before they expire — feeding neighbors, not trash cans.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-[#e8820c] hover:bg-[#f5a83c] active:scale-98 text-white font-semibold px-7 py-3.5 rounded-full transition-all text-sm shadow-md"
            >
              Partner with Us
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-center border border-[#4a8c5c] hover:border-[#faf6ef] dark:border-[#3b6d49] dark:hover:border-emerald-300 text-[#faf6ef] font-semibold px-7 py-3.5 rounded-full transition-colors text-sm hover:bg-[#2a6639]/30"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative w-full">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border border-[#2a6639]/50 dark:border-[#20452b]">
            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop&auto=format"
              alt="Fresh colorful produce at a farmers market"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e4d2b]/60 dark:from-[#0d2214]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Partner types bar */}
      <div className="border-t border-[#2a6639] dark:border-[#1a3822] mt-auto bg-[#1a4426]/50 dark:bg-[#0b1b10]/80">
        <div className="max-w-6xl mx-auto px-6 py-5 sm:py-6 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#4a8c5c] dark:text-[#68a87b]">
          {partners.map((partner) => (
            <span key={partner} className="font-medium tracking-wide">
              {partner}
            </span>
          ))}
          <span className="opacity-40">& more</span>
        </div>
      </div>
    </section>
  );
};
