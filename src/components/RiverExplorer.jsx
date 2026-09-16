import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, MapPin, ArrowRight, Download, CheckCircle, Droplets, Layers } from 'lucide-react';
import { SpotlightCard } from './PineLabsAnimations';

const riversData = [
  {
    id: 'hindon',
    name: 'Hindon River',
    aka: 'Harnandi (Ganga-Yamuna Doab)',
    origin: 'Shivalik Hills, Saharanpur',
    length: '355 km',
    states: 'Uttar Pradesh (7 Districts)',
    image: '/assets/14-0MUFZnI0.jpg',
    pdfDoc: '/assets/Hindon_River_Rejuvenation_Plan-BbwnflMY.pdf',
    pdfTitle: 'Hindon Rejuvenation Blueprint.pdf',
    summary:
      'Flowing through Saharanpur, Muzaffarnagar, Shamli, Meerut, Baghpat, and Ghaziabad to join the Yamuna. Led by Raman Kant, BNP mapped the lost origin in the Shivalik forests, removed massive encroachments, and initiated the community Hindon SEVA campaign.',
    stats: [
      { label: 'River Length', value: '355 km' },
      { label: 'Districts Reached', value: '7 Districts' },
      { label: 'Tributaries', value: 'Kali & Krishni' },
    ],
    highlights: ['First technical study conducted in 2006', 'Origin tracked in Shivalik reserve forest', 'Drafted complete restoration master plan'],
  },
  {
    id: 'falgu',
    name: 'Falgu River',
    aka: 'Sacred River of Gaya',
    origin: 'Chota Nagpur Plateau, Bihar',
    length: '135 km',
    states: 'Bihar (Gaya & Jehanabad)',
    image: '/assets/15-W5zga3GT.jpg',
    pdfDoc: '/assets/Falgu_River-rgXSVEOK.pdf',
    pdfTitle: 'Falgu River Rejuvenation Study.pdf',
    summary:
      'A deeply sacred river for millions performing Pind Daan rituals. Suffering from excessive siltation and seasonal drought, BNP has established a scientific recharge model using sub-surface porous dams and biological riverbank stabilization.',
    stats: [
      { label: 'Catchment Area', value: '3,800 sq km' },
      { label: 'Heritage Sites', value: 'Vishnupad & Bodh Gaya' },
      { label: 'Interventions', value: 'Sub-surface Dams' },
    ],
    highlights: ['Sub-surface check dam design', 'Community clean water bank network', 'Monsoon water retention ponds'],
  },
  {
    id: 'sasur-khaderi',
    name: 'Sasur Khaderi',
    aka: 'The Fatehpur Rejuvenation Model',
    origin: 'Thithora Lake, Fatehpur',
    length: '46 km',
    states: 'Uttar Pradesh',
    image: '/assets/1-DIHWWWV_.jpg',
    pdfDoc: '/assets/Sasur_Khaderi_River_Pond_Rejuventation_Plan-CxZkUmjM.pdf',
    pdfTitle: 'Sasur Khaderi Rejuvenation Plan.pdf',
    summary:
      'A dry, forgotten rivulet brought back to life through the deepening of interconnected lakes and community desiltation. Became a national gold standard for MGNREGA-led ecological revival.',
    stats: [
      { label: 'Channel Length', value: '46 km' },
      { label: 'Interconnected Ponds', value: '54 Ponds' },
      { label: 'Groundwater Rise', value: '+1.8 meters' },
    ],
    highlights: ['Interlinked cascade of 54 water bodies', 'National award-winning rejuvenation plan', 'Year-round water retention restored'],
  },
  {
    id: 'neem',
    name: 'Neem River',
    aka: 'Western UP Tributary',
    origin: 'Sikandrabad, Bulandshahr',
    length: '82 km',
    states: 'Uttar Pradesh',
    image: '/assets/13-D3ktZyOk.jpg',
    pdfDoc: '/assets/NEEM_RIVER_FLYER24-BJXj1ZA-.pdf',
    pdfTitle: 'Neem River Restoration Flyer.pdf',
    summary:
      'Once completely obliterated and used as a sewage drain, BNP mobilized over 40 gram panchayats to excavate silted channels, plant 50,000 riparian native trees, and restore natural water velocity.',
    stats: [
      { label: 'Restored Reach', value: '82 km' },
      { label: 'Panchayats Engaged', value: '40+' },
      { label: 'Trees Planted', value: '50,000+' },
    ],
    highlights: ['Removal of 12 illegal bunds', 'Revival of 24 indigenous fish varieties', 'Establishment of Village River Panchayats'],
  },
  {
    id: 'ganga',
    name: 'Ganga & Yamuna Basin',
    aka: 'The National Lifeline',
    origin: 'Gangotri & Yamunotri, Himalayas',
    length: '2,525 km',
    states: '11 Indian States',
    image: '/assets/10-CXNsf9Zv.jpg',
    pdfDoc: '/assets/About_Ganga_River-DaMWgYki.pdf',
    pdfTitle: 'About Ganga River Report.pdf',
    summary:
      'Advocating for the statutory enactment of the "Rights of Rivers" bill and minimum environmental ecological flow (e-flow) during dry seasons to protect aquatic biodiversity like the Gangetic Dolphin.',
    stats: [
      { label: 'Basin Population', value: '500+ Million' },
      { label: 'Draft Legislation', value: 'River Bill 2016' },
      { label: 'E-Flow Target', value: '30% Year-Round' },
    ],
    highlights: ['Presented River Restoration Bill 2016', 'Protection of floodplains from illegal construction', 'Promotion of chemical-free natural farming on riverbanks'],
  },
];

export default function RiverExplorer() {
  const [selectedRiver, setSelectedRiver] = useState(riversData[0]);

  return (
    <section id="rivers" className="py-24 md:py-32 bg-[#F6FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#059669] text-xs font-semibold uppercase tracking-wider mb-3">
              <Waves className="w-3.5 h-3.5" />
              <span>Groundwork & Science</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1D33] tracking-tight">
              River Basins Under Restoration
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#425B76] max-w-md">
            Explore active river conservation blueprints engineered with hydrologic modeling, GIS surveys, and grassroots community stewardship.
          </p>
        </div>

        {/* River Selector Tabs (Pine Labs pill carousel style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {riversData.map((river) => {
            const isActive = river.id === selectedRiver.id;
            return (
              <button
                key={river.id}
                onClick={() => setSelectedRiver(river)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#0A1D33] text-white shadow-lg shadow-[#0A1D33]/20 scale-105'
                    : 'bg-white text-[#425B76] hover:bg-[#E0F2FE] hover:text-[#0A1D33] border border-[#2B8EE8]/15'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#10B981]' : 'bg-gray-300'}`} />
                <span>{river.name}</span>
              </button>
            );
          })}
        </div>

        {/* River Detail Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRiver.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#2B8EE8]/15 shadow-xl shadow-[#0E2E50]/5"
          >
            {/* Left Detail Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981] mb-2 uppercase tracking-wide">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedRiver.origin}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1D33] mb-1">
                  {selectedRiver.name}
                </h3>
                <p className="text-sm font-medium text-[#6E859E] mb-4">
                  {selectedRiver.aka} • {selectedRiver.states}
                </p>
                <p className="text-base text-[#425B76] leading-relaxed">
                  {selectedRiver.summary}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 py-5 border-y border-gray-100">
                {selectedRiver.stats.map((st, i) => (
                  <div key={i}>
                    <p className="font-serif text-xl sm:text-2xl font-bold text-[#0A1D33]">
                      {st.value}
                    </p>
                    <p className="text-xs text-[#6E859E] mt-0.5">{st.label}</p>
                  </div>
                ))}
              </div>

              {/* Highlights List */}
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A1D33]">
                  Key Interventions & Achievements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedRiver.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3B536E]">
                      <CheckCircle className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF Blueprint Download CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={selectedRiver.pdfDoc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#1C71C6] to-[#059669] hover:shadow-lg hover:shadow-[#2B8EE8]/20 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download {selectedRiver.name} Policy PDF</span>
                </a>
              </div>
            </div>

            {/* Right Photography Column */}
            <div className="lg:col-span-5 relative">
              <div className="h-80 sm:h-96 lg:h-full w-full rounded-2xl overflow-hidden relative shadow-md group">
                <img
                  src={selectedRiver.image}
                  alt={selectedRiver.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium uppercase tracking-wider border border-white/30">
                    Field Photographic Archive
                  </span>
                  <p className="text-sm font-semibold mt-1 text-white/90">
                    {selectedRiver.name} Restoration Sector
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
