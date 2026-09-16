import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Landmark, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SpotlightCard, MaskedHeading } from './PineLabsAnimations';

export default function SangamSection({ onPlayVideo }) {
  return (
    <section id="sangam" className="py-24 md:py-32 bg-[#0A1D33] text-white relative overflow-hidden rounded-t-[40px] md:rounded-t-[72px]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2B8EE8]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10B981]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Pine Labs dark section style) */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Landmark className="w-3.5 h-3.5" />
            <span>National Milestone</span>
          </div>
          <MaskedHeading>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Rashtriya Nadi Sangam
            </h2>
          </MaskedHeading>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
            Convened at Bharat Mandapam, New Delhi. Bringing together river warriors, Padma awardees, supreme court jurists, scientists, and state ministers to formalize India’s River Vision 2047.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Key Event Card */}
          <div className="lg:col-span-7 bg-[#0E2E50]/60 border border-white/15 rounded-3xl p-8 sm:p-10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between text-left group">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#10B981]/20 text-[#34D399] text-xs font-bold uppercase tracking-wide border border-[#10B981]/30">
                  Presidential Commendation
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  New Delhi
                </span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Briefing the Hon'ble President of India
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Bhartiya Nadi Parishad President Raman Kant and Advisor Manu Gaur presented the detailed national river rejuvenation roadmap to the Hon'ble President of India, Smt. Droupadi Murmu, receiving high commendations for community water conservation.
              </p>

              {/* Event photos mosaic */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="rounded-xl overflow-hidden h-44 border border-white/10 group-hover:border-emerald-400/40 transition-colors">
                  <img
                    src="/assets/shri_CR_patil-LuPmSUTX.jpeg"
                    alt="Inspection with Jal Shakti Minister"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-44 border border-white/10 group-hover:border-emerald-400/40 transition-colors">
                  <img
                    src="/assets/yatra-DjXTmxcF.jpeg"
                    alt="Rashtriya Nadi Yatra"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Joint ground inspection with GIZ India in Pimpri, Maharashtra
              </span>
              <button
                onClick={() => onPlayVideo('BUjY3xK8plg')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Watch Highlights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 2 Stacked Milestone Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Card 1 */}
            <div className="bg-[#0E2E50]/40 border border-white/10 rounded-3xl p-7 text-left backdrop-blur-md hover:border-emerald-400/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                Draft River Policy of Uttar Pradesh
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Drafted comprehensive regulations for flood plain demarcation, industrial effluent zero-liquid-discharge (ZLD), and decentralized tributary management.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0E2E50]/40 border border-white/10 rounded-3xl p-7 text-left backdrop-blur-md hover:border-emerald-400/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                Nadh Upashak Puraskaar
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                National honor conferred upon grassroots river warriors, natural farmers, and scholars who have dedicated decades to conserving local water streams.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
