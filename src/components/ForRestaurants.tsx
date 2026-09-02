import React from 'react';
import { BenefitItem } from '../types';

const benefits: BenefitItem[] = [
  {
    icon: '📣',
    title: 'Positive Publicity',
    desc: 'Stand out as a business that genuinely cares about your community.',
  },
  {
    icon: '⭐',
    title: 'Better Reputation',
    desc: 'Customers love supporting shops that fight food waste — and they tell their friends.',
  },
  {
    icon: '🆓',
    title: 'Minimal Cost',
    desc: 'Our platform is quite cheap for partners, as our main cost is transportation. Cheap subscription, no hidden fees.',
  },
  {
    icon: '🗑️',
    title: 'Less Waste',
    desc: 'Lower your trash disposal costs by donating surplus instead of discarding it.',
  },
];

export const ForRestaurants: React.FC = () => {
  return (
    <section
      id="restaurants"
      className="bg-[#1e4d2b] dark:bg-[#0d2214] py-20 sm:py-28 text-[#faf6ef] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="text-[#e8820c] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
            For Restaurants & Businesses
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 font-display">
            Share your food,
            <br />
            <span className="italic text-[#f5a83c] font-serif">boost your brand.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#b8d4c0] dark:text-[#a0c5aa] leading-relaxed mb-8 md:mb-10">
            Do you have extra ingredients, unsold meals, or surplus inventory? Don't throw them away. Join Replate and donate your safe, edible food to local charities — it's good for the community and great for your reputation.
          </p>
        </div>

        {/* 2x2 grid of benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#2a6639] dark:bg-[#183321] rounded-2xl p-5 hover:bg-[#4a8c5c] dark:hover:bg-[#20442c] transition-all duration-200 border border-[#3b784c]/40 dark:border-[#264c33] shadow-sm"
            >
              <span className="text-2xl mb-3 block" role="img" aria-label={benefit.title}>
                {benefit.icon}
              </span>
              <h3 className="font-bold text-sm sm:text-base mb-1.5 font-display text-[#faf6ef]">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#b8d4c0] dark:text-[#a0c5aa] leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
