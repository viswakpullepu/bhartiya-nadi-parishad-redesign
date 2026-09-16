import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets, BookOpen, Waves, Users, FileText, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenJoinModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-white/85 backdrop-blur-xl border-b border-[#2B8EE8]/15 shadow-sm shadow-[#0E2E50]/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-2xl bg-white shadow-md shadow-[#2B8EE8]/10 flex items-center justify-center border border-[#2B8EE8]/15 overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <img
              src="/assets/logo-lYT2Yyhb.svg"
              alt="Bhartiya Nadi Parishad"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-tight text-[#0A1D33] block leading-tight">
              Bhartiya Nadi Parishad
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase text-[#10B981] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              Water Vision 2047
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Pine Labs pill hover style) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2B8EE8]/15 shadow-sm">
          <a
            href="#about"
            className="px-4 py-2 text-sm font-medium text-[#3B536E] hover:text-[#0A1D33] hover:bg-[#F0F8FF] rounded-full transition-all duration-300"
          >
            About
          </a>
          <a
            href="#rivers"
            className="px-4 py-2 text-sm font-medium text-[#3B536E] hover:text-[#0A1D33] hover:bg-[#F0F8FF] rounded-full transition-all duration-300"
          >
            River Basins
          </a>
          <a
            href="#sangam"
            className="px-4 py-2 text-sm font-medium text-[#3B536E] hover:text-[#0A1D33] hover:bg-[#F0F8FF] rounded-full transition-all duration-300"
          >
            Nadi Sangam
          </a>
          <a
            href="#publications"
            className="px-4 py-2 text-sm font-medium text-[#3B536E] hover:text-[#0A1D33] hover:bg-[#F0F8FF] rounded-full transition-all duration-300"
          >
            Policy & Reports
          </a>
          <a
            href="#documentaries"
            className="px-4 py-2 text-sm font-medium text-[#3B536E] hover:text-[#0A1D33] hover:bg-[#F0F8FF] rounded-full transition-all duration-300"
          >
            Media
          </a>
          <a
            href="#leadership"
            className="px-4 py-2 text-sm font-medium text-[#3B536E] hover:text-[#0A1D33] hover:bg-[#F0F8FF] rounded-full transition-all duration-300"
          >
            Council
          </a>
        </nav>

        {/* Call to Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenJoinModal}
            className="group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#1C71C6] via-[#2B8EE8] to-[#059669] hover:shadow-lg hover:shadow-[#2B8EE8]/25 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
          >
            <Droplets className="w-4 h-4 text-emerald-200 transition-transform group-hover:rotate-12" />
            <span>Join as River Warrior</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-2xl bg-white border border-[#2B8EE8]/20 text-[#0A1D33] hover:bg-[#F0F8FF]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-[#2B8EE8]/15 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-300 shadow-xl">
          <div className="flex flex-col space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-[#0A1D33] font-medium py-2 border-b border-gray-100"
            >
              <span>About Bhartiya Nadi Parishad</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#rivers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-[#0A1D33] font-medium py-2 border-b border-gray-100"
            >
              <span>Rivers & Basins Network</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#sangam"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-[#0A1D33] font-medium py-2 border-b border-gray-100"
            >
              <span>Rashtriya Nadi Sangam</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#publications"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-[#0A1D33] font-medium py-2 border-b border-gray-100"
            >
              <span>21 Publications & Policy PDFs</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#documentaries"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-[#0A1D33] font-medium py-2 border-b border-gray-100"
            >
              <span>Documentaries & Talks</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenJoinModal();
            }}
            className="w-full py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-[#1C71C6] to-[#059669] shadow-md flex items-center justify-center gap-2"
          >
            <Droplets className="w-4 h-4 text-emerald-200" />
            <span>Join as River Warrior</span>
          </button>
        </div>
      )}
    </header>
  );
}
