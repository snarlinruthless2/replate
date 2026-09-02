import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from './ThemeContext';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Restaurants', href: '#restaurants' },
  { label: 'For Charities', href: '#charities' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <nav className="sticky top-0 z-40 bg-[#1e4d2b] dark:bg-[#0d2214] text-[#faf6ef] border-b border-[#2a6639]/40 dark:border-[#1a3822] transition-colors duration-200 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group transition-transform duration-150 active:scale-95" aria-label="Replate Home">
          <Logo variant="header" />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#faf6ef]/90 hover:text-white transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e8820c] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}

          {/* Dark Mode Switcher in Desktop Header */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-[#b8d4c0] hover:text-[#faf6ef] hover:bg-[#2a6639] dark:hover:bg-[#1a3822] transition-all"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-200 rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#b8d4c0] transition-transform duration-200 hover:-rotate-12" />
            )}
          </button>

          {/* Join Us CTA */}
          <a
            href="#contact"
            className="bg-[#e8820c] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#f5a83c] active:scale-95 transition-all shadow-sm"
          >
            Join Us
          </a>
        </div>

        {/* Mobile controls: Dark mode + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-[#b8d4c0] hover:text-[#faf6ef] hover:bg-[#2a6639] transition-colors"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            className="p-2 text-[#faf6ef] hover:bg-[#2a6639] rounded-lg transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col gap-1.5 w-5">
                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                <span className="w-5 h-0.5 bg-current rounded-full"></span>
                <span className="w-5 h-0.5 bg-current rounded-full"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e4d2b] dark:bg-[#0d2214] border-t border-[#2a6639] dark:border-[#1a3822] px-6 py-5 flex flex-col gap-4 text-sm animate-in slide-in-from-top-2 duration-150 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#faf6ef]/90 hover:text-white font-medium py-1.5 border-b border-[#2a6639]/30 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#e8820c] hover:bg-[#f5a83c] text-white px-5 py-3 rounded-xl text-center font-semibold text-sm transition-all shadow-md active:scale-98"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
