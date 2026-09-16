import React from 'react';
import { Droplets, Heart, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenJoinModal }) {
  return (
    <footer className="bg-[#071526] text-white pt-16 sm:pt-20 pb-28 lg:pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#2B8EE8]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Branding and Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-white/10 items-start text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white flex items-center justify-center p-2 border border-white/20 flex-shrink-0">
                <img
                  src="/assets/logo-lYT2Yyhb.svg"
                  alt="Bhartiya Nadi Parishad"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white block">
                  Bhartiya Nadi Parishad
                </span>
                <span className="text-[11px] sm:text-xs text-emerald-400 font-medium">
                  Indian River Council • Water Vision 2047
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              A national platform working across policy, scientific groundwork, and community mobilization to safeguard India’s rivers, lakes, and freshwater ecosystems.
            </p>

            <div className="pt-1 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@bhartiyanadiparishad.org" className="hover:text-white transition-colors">
                  info@bhartiyanadiparishad.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2B8EE8] flex-shrink-0" />
                <span>New Delhi & Western UP River Basins</span>
              </div>
            </div>
          </div>

          {/* Slogan & Membership Callout */}
          <div className="lg:col-span-7 bg-[#0E2E50]/50 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 text-left">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400">
                Citizen Movement
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Every river deserves a guardian.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Register as a River Warrior in your district to lead local stream monitoring, plantation drives, and desiltation.
              </p>
            </div>
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#1C71C6] to-[#059669] hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex-shrink-0"
            >
              Join Now
            </button>
          </div>

        </div>

        {/* 44-Route Navigation Map (Responsive 2-col on mobile, 5-col on desktop) */}
        <div className="py-10 sm:py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-left border-b border-white/10">
          
          {/* Col 1: About */}
          <div className="space-y-2.5 sm:space-y-3">
            <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">About BNP</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Philosophy & Vision</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Logo Symbolism</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">History of Movement</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400 transition-colors">Raman Kant (President)</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400 transition-colors">Council of Advisors</a></li>
            </ul>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-2.5 sm:space-y-3">
            <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">Programmes</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              <li><a href="#sangam" className="hover:text-emerald-400 transition-colors">Nadi Sangam</a></li>
              <li><a href="#rivers" className="hover:text-emerald-400 transition-colors">Field Check Dams</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">River Panchayats</a></li>
              <li><a href="#sangam" className="hover:text-emerald-400 transition-colors">Nadh Puraskaar</a></li>
              <li><a href="#rivers" className="hover:text-emerald-400 transition-colors">Natural Farming</a></li>
            </ul>
          </div>

          {/* Col 3: Research & Blueprints */}
          <div className="space-y-2.5 sm:space-y-3">
            <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">Policy & PDFs</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">UP River Policy 2024</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">River Restor. Bill</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Hindon Masterplan</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Falgu Eco-Plan</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Sasur Khaderi Plan</a></li>
            </ul>
          </div>

          {/* Col 4: Media & Stories */}
          <div className="space-y-2.5 sm:space-y-3">
            <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">Media</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              <li><a href="#documentaries" className="hover:text-emerald-400 transition-colors">Bharat Mandapam Films</a></li>
              <li><a href="#documentaries" className="hover:text-emerald-400 transition-colors">Hindon Discovery</a></li>
              <li><a href="#documentaries" className="hover:text-emerald-400 transition-colors">Nadi Samvad Talks</a></li>
              <li><a href="#rivers" className="hover:text-emerald-400 transition-colors">Field Photography</a></li>
            </ul>
          </div>

          {/* Col 5: Get Involved */}
          <div className="col-span-2 sm:col-span-1 space-y-2.5 sm:space-y-3">
            <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">Get Involved</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">River Warrior Membership</button></li>
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">Youth Fellowship</button></li>
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">Academic Internship</button></li>
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">Partnerships</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Socials and Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bhartiya Nadi Parishad (Indian River Council). All Rights Reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400">
            <a
              href="https://x.com/BNPBhartiyaNadi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://www.instagram.com/bhartiyanadiparishad/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/bhartiyanadiparishadofficial"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/bhartiya-nadi-parishad-5257912b2/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/channel/UCbVfWW1Cnyq51JQWL0ogcfg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
