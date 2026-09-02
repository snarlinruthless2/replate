import React from 'react';
import { Logo } from './Logo';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Restaurants', href: '#restaurants' },
  { label: 'For Charities', href: '#charities' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3d2b1f] dark:bg-[#08120b] text-[#c5b8a8] dark:text-[#889d8f] py-10 border-t border-[#4f382a] dark:border-[#152a1c] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <Logo variant="footer" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#c5b8a8] dark:text-[#889d8f] hover:text-[#faf6ef] dark:hover:text-[#e2eee5] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Attribution */}
        <p className="text-xs text-[#9c8979] dark:text-[#5e7765] text-center md:text-right">
          © {new Date().getFullYear()} Replate. Crafted by 9th graders to decrease hunger.
        </p>
      </div>
    </footer>
  );
};
