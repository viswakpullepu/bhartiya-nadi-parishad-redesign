import React from 'react';
import { Award, Shield, Users, Sparkles, ExternalLink } from 'lucide-react';
import { SpotlightCard } from './PineLabsAnimations';

const leaders = [
  {
    name: 'Raman Kant',
    role: 'Founder & President',
    title: 'Riverman of India',
    image: '/assets/Raman_Kant_2-DZQpxZPK.png',
    bio: 'Pioneer of the 355 km Hindon River exploration and restoration. Author of UP River Policy drafts and visionary of India’s Water Vision 2047.',
    tag: 'National Leadership',
  },
  {
    name: 'Manu Gaur',
    role: 'Senior Advisor',
    title: 'Policy Strategist & Advocate',
    image: '/assets/manoj_tyagi-D82FwfER.jpg',
    bio: 'Spearheading policy advocacy with Union ministries, NITI Aayog, and state governments for the codification of the Rights of Rivers.',
    tag: 'Policy Advisory',
  },
  {
    name: 'Sethpal Singh',
    role: 'Distinguished Advisor',
    title: 'Padma Shri Awardee',
    image: '/assets/Sethpal_Singh-BL_7vYB-.jpg',
    bio: 'Renowned champion of chemical-free natural farming and water-efficient irrigation models along river catchments.',
    tag: 'Padma Honoree',
  },
  {
    name: 'Dr. Rajeev Bansal',
    role: 'Technical Council',
    title: 'Hydrology & Watershed Expert',
    image: '/assets/rajeev-bansal-DU__UfSy.jpeg',
    bio: 'Leading spatial catchment mapping, groundwater percolation assessments, and decentralized check dam engineering.',
    tag: 'Hydro-Engineering',
  },
  {
    name: 'Rishabh Gaur',
    role: 'Director of Youth Mobilization',
    title: 'River Fellowship Coordinator',
    image: '/assets/rishabh-gaur-DzmYDoSp.jpeg',
    bio: 'Empowering student chapters, university internships, and youth river squads across Uttar Pradesh, Bihar, and Maharashtra.',
    tag: 'Youth Leadership',
  },
  {
    name: 'Pankaj Mittal',
    role: 'State Coordination Head',
    title: 'Grassroots Operations',
    image: '/assets/pankaj-mittal-dhOiTRYs.jpeg',
    bio: 'Coordinating state committees and rural river panchayats to ensure transparent community vigilance along river channels.',
    tag: 'Field Operations',
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 sm:py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated Stewardship</span>
          </div>
          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1D33] tracking-tight">
            The Council & Advisory Board
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#425B76] mt-3 sm:mt-4 leading-relaxed font-normal">
            Bhartiya Nadi Parishad is guided by renowned rivermen, Padma Shri laureates, hydrologists, and tireless grassroots leaders.
          </p>
        </div>

        {/* Leaders Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {leaders.map((person, idx) => (
            <SpotlightCard key={idx} className="p-5 sm:p-6 text-left flex flex-col justify-between group">
              <div>
                {/* Portrait */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 sm:mb-5 bg-slate-100 border border-gray-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#059669] shadow-sm">
                      {person.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1D33] leading-snug group-hover:text-[#1C71C6] transition-colors">
                  {person.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold text-[#10B981] mt-0.5 mb-2">
                  {person.role} • {person.title}
                </p>
                <p className="text-xs sm:text-sm text-[#425B76] leading-relaxed">
                  {person.bio}
                </p>
              </div>

              <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#6E859E]">
                <span>Bhartiya Nadi Parishad</span>
                <Shield className="w-3.5 h-3.5 text-[#10B981]" />
              </div>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
