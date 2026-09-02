import React from 'react';
import { CharityFeatureItem } from '../types';

const charityFeatures: CharityFeatureItem[] = [
  {
    icon: '🥦',
    label: 'Fresh Ingredients',
    desc: 'Baked goods, prepared meals, produce, and more.',
  },
  {
    icon: '🤝',
    label: 'Local Connections',
    desc: 'Meet generous business owners in your neighborhood.',
  },
  {
    icon: '⚡',
    label: 'Real-Time Alerts',
    desc: 'Get notified the moment food becomes available.',
  },
];

export const ForCharities: React.FC = () => {
  return (
    <section
      id="charities"
      className="bg-[#f0e9db] dark:bg-[#152019] py-20 sm:py-28 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Charity Image */}
          <div className="relative order-2 md:order-1 flex justify-center md:justify-start">
            <div className="aspect-square rounded-3xl overflow-hidden max-w-sm w-full shadow-xl border border-[#e2d5c3] dark:border-[#2b3e31]">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=600&fit=crop&auto=format"
                alt="Volunteers distributing food at a community shelter"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Charity Info */}
          <div className="order-1 md:order-2">
            <p className="text-[#e8820c] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4">
              For Charities
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e4d2b] dark:text-[#faf6ef] leading-tight mb-6 font-display">
              Fresh food for
              <br />
              your clients.
            </h2>
            <p className="text-base sm:text-lg text-[#6b4c38] dark:text-[#a0b5a4] leading-relaxed mb-8 sm:mb-10">
              We want to help you feed more people without stretching your budget. Replate connects your charity with nearby restaurants, hotels, supermarkets, and farms that have extra food — ready to give.
            </p>

            <div className="flex flex-col gap-4 mb-8 sm:mb-10">
              {charityFeatures.map((feat) => (
                <div key={feat.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1e4d2b] dark:bg-[#1f3b28] text-[#faf6ef] rounded-xl flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <span role="img" aria-label={feat.label}>
                      {feat.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-[#1e4d2b] dark:text-[#e4f0e7] text-sm sm:text-base mb-0.5 font-display">
                      {feat.label}
                    </p>
                    <p className="text-xs sm:text-sm text-[#6b4c38] dark:text-[#9bb19f]">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block w-full sm:w-auto text-center bg-[#1e4d2b] hover:bg-[#2a6639] dark:bg-[#1a3b24] dark:hover:bg-[#244f31] text-[#faf6ef] font-semibold px-7 py-3.5 rounded-full transition-all text-sm shadow-md active:scale-98"
            >
              Register Your Charity
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
