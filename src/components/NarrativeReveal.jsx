import React from 'react';
import { ScrollWordReveal, SpotlightCard } from './PineLabsAnimations';
import { Shovel, Landmark, Users2, Sparkles } from 'lucide-react';

export default function NarrativeReveal() {
  const manifestoText = 
    "Rivers in India are not merely channels of flowing water; they are living ecological entities, cultural lifelines, and our planetary heritage. Bhartiya Nadi Parishad unifies ground-level ecological engineering, draft legislation for the Rights of Rivers, and grassroots community ownership to ensure India's rivers flow uninterrupted, clean, and perennial by 2047.";

  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-gradient-to-b from-[#F6FAFC] via-white to-[#F6FAFC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Parishad Manifesto</span>
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#0A1D33] tracking-tight">
            A National Awakening for River Rejuvenation
          </h2>
        </div>

        {/* Pine Labs Signature Scroll Word Reveal (Mobile scaled) */}
        <div className="p-5 xs:p-7 sm:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#F4F9FD] to-[#ECFDF5]/50 border border-[#2B8EE8]/15 shadow-sm mb-12 sm:mb-16">
          <ScrollWordReveal
            text={manifestoText}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-relaxed tracking-tight text-center justify-center max-w-4xl mx-auto"
          />
        </div>

        {/* 3 Pillars of Action - Spotlight Cards (Pine Labs Feature Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Pillar 1 */}
          <SpotlightCard className="p-6 sm:p-8 text-left group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E0F2FE] text-[#1C71C6] flex items-center justify-center mb-5 sm:mb-6 transition-transform group-hover:scale-110">
              <Shovel className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1C71C6] block mb-1">
              Pillar 01
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1D33] mb-2 sm:mb-3">
              Ground Action & Mapping
            </h3>
            <p className="text-xs sm:text-sm text-[#425B76] leading-relaxed">
              Identifying true river origins, mapping encroachments, constructing natural decentralized check dams, and revitalizing feeder streams and wetlands.
            </p>
          </SpotlightCard>

          {/* Pillar 2 */}
          <SpotlightCard className="p-6 sm:p-8 text-left group" spotlightColor="rgba(16, 185, 129, 0.15)">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCFCE7] text-[#059669] flex items-center justify-center mb-5 sm:mb-6 transition-transform group-hover:scale-110">
              <Landmark className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#059669] block mb-1">
              Pillar 02
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1D33] mb-2 sm:mb-3">
              Policy Drafting & Advocacy
            </h3>
            <p className="text-xs sm:text-sm text-[#425B76] leading-relaxed">
              Formulating the Uttar Pradesh River Policy 2024, River Restoration Bill, and working alongside NITI Aayog and Ministry of Jal Shakti for statutory protections.
            </p>
          </SpotlightCard>

          {/* Pillar 3 */}
          <SpotlightCard className="p-6 sm:p-8 text-left group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E0F2FE] text-[#2B8EE8] flex items-center justify-center mb-5 sm:mb-6 transition-transform group-hover:scale-110">
              <Users2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2B8EE8] block mb-1">
              Pillar 03
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1D33] mb-2 sm:mb-3">
              River Panchayats
            </h3>
            <p className="text-xs sm:text-sm text-[#425B76] leading-relaxed">
              Establishing community-led River Councils along riverbanks to empower local farmers, women, and youth as the permanent custodians of water bodies.
            </p>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}
