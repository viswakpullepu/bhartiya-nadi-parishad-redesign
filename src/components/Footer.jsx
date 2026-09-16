import React from 'react';
import { Droplets, Heart, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenJoinModal }) {
  return (
    <footer className="bg-[#071526] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2B8EE8]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Branding and Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10 items-start text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-2 border border-white/20">
                <img
                  src="/assets/logo-lYT2Yyhb.svg"
                  alt="Bhartiya Nadi Parishad"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Bhartiya Nadi Parishad
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  Indian River Council • Dedicated to Perennial Flow
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              A national platform working across policy, scientific groundwork, and community mobilization to safeguard India’s rivers, lakes, and freshwater ecosystems in line with Water Vision 2047.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:info@bhartiyanadiparishad.org" className="hover:text-white transition-colors">
                  info@bhartiyanadiparishad.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2B8EE8]" />
                <span>New Delhi & Western Uttar Pradesh River Basins</span>
              </div>
            </div>
          </div>

          {/* Slogan & Membership Callout */}
          <div className="lg:col-span-7 bg-[#0E2E50]/50 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Join the Citizen Movement
              </span>
              <h4 className="font-serif text-2xl font-bold text-white">
                Every river deserves a guardian.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Register as a River Warrior in your district to lead local stream monitoring, plantation drives, and desiltation.
              </p>
            </div>
            <button
              onClick={onOpenJoinModal}
              className="whitespace-nowrap px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#1C71C6] to-[#059669] hover:shadow-lg hover:shadow-emerald-500/20 transition-all flex-shrink-0"
            >
              Join Now
            </button>
          </div>

        </div>

        {/* 44-Route Navigation Map */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-left border-b border-white/10">
          
          {/* Col 1: About */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">About BNP</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Philosophy & Vision</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Logo & Symbolism</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">History of Movement</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400 transition-colors">Raman Kant (President)</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400 transition-colors">Council of Advisors</a></li>
              <li><a href="#leadership" className="hover:text-emerald-400 transition-colors">State Representatives</a></li>
            </ul>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">Programmes</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#sangam" className="hover:text-emerald-400 transition-colors">Rashtriya Nadi Sangam</a></li>
              <li><a href="#rivers" className="hover:text-emerald-400 transition-colors">Field Actions & Dams</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">River Panchayats</a></li>
              <li><a href="#sangam" className="hover:text-emerald-400 transition-colors">Nadh Upashak Puraskaar</a></li>
              <li><a href="#rivers" className="hover:text-emerald-400 transition-colors">Wetlands Conservation</a></li>
              <li><a href="#rivers" className="hover:text-emerald-400 transition-colors">Natural Farming Buffer</a></li>
            </ul>
          </div>

          {/* Col 3: Research & Blueprints */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">Research & Policy</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">UP River Policy 2024 Draft</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">River Restoration Bill 2016</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Hindon Masterplan PDF</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Falgu Eco-Restoration</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">Sasur Khaderi 54 Ponds</a></li>
              <li><a href="#publications" className="hover:text-emerald-400 transition-colors">NITI Aayog Framework</a></li>
            </ul>
          </div>

          {/* Col 4: Media & Stories */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">Media & Stories</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#documentaries" className="hover:text-emerald-400 transition-colors">Bharat Mandapam Films</a></li>
              <li><a href="#documentaries" className="hover:text-emerald-400 transition-colors">Hindon Expedition Story</a></li>
              <li><a href="#documentaries" className="hover:text-emerald-400 transition-colors">Nadi Samvad Video Talks</a></li>
              <li><a href="#rivers" className="hover:text-emerald-400 transition-colors">Field Photography Gallery</a></li>
              <li><a href="#documentaries" className="hover:text-emerald-400 transition-colors">River Warrior Interviews</a></li>
            </ul>
          </div>

          {/* Col 5: Get Involved */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">Get Involved</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">River Warrior Membership</button></li>
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">Youth River Fellowship</button></li>
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">Academic Internship</button></li>
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">Village Volunteer Squads</button></li>
              <li><button onClick={onOpenJoinModal} className="hover:text-emerald-400 transition-colors text-left">Institutional Partnerships</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Socials and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bhartiya Nadi Parishad (Indian River Council). All Rights Reserved.</p>
          
          <div className="flex items-center gap-6 text-slate-400">
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
