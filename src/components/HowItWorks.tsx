import React from 'react';
import { StepItem } from '../types';

const steps: StepItem[] = [
  {
    num: '01',
    icon: '📋',
    title: 'Businesses Post',
    body: 'Restaurants and shops list their extra edible food — prepared meals, surplus inventory, baked goods — directly on our platform in minutes.',
  },
  {
    num: '02',
    icon: '🔔',
    title: 'Charities Match',
    body: 'Nearby charities receive an instant real-time notification about available food and confirm a pickup that fits their schedule.',
  },
  {
    num: '03',
    icon: '🚗',
    title: 'Easy Pickup',
    body: 'Our Replaters or charity staff collect the food directly from the business. No middlemen, no extra steps.',
  },
  {
    num: '04',
    icon: '🍽️',
    title: 'Zero Waste',
    body: 'Fresh food reaches people who need it right away — every rescued meal keeps greenhouse gases out of landfills.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="bg-[#faf6ef] dark:bg-[#111c14] py-20 sm:py-28 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-[#e8820c] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1e4d2b] dark:text-[#faf6ef] leading-tight font-display">
              Four steps to
              <br />
              rescue food.
            </h2>
          </div>
          <p className="md:ml-auto md:max-w-xs text-[#6b4c38] dark:text-[#a4baa8] text-sm sm:text-base leading-relaxed">
            We designed Replate to be as frictionless as possible — for both the businesses donating and the charities receiving.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white dark:bg-[#18261c] rounded-2xl p-6 border border-[#e8dece] dark:border-[#273d2e] hover:shadow-lg dark:hover:shadow-emerald-950/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl" role="img" aria-label={step.title}>
                    {step.icon}
                  </span>
                  <span
                    className="text-4xl font-bold text-[#f0e9db] dark:text-[#25392b] group-hover:text-[#e8820c] dark:group-hover:text-[#e8820c] transition-colors font-display"
                  >
                    {step.num}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#1e4d2b] dark:text-[#ebf5ed] mb-2 font-display"
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#6b4c38] dark:text-[#a0b5a4] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
