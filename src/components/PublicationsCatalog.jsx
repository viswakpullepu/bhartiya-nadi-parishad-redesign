import React, { useState } from 'react';
import { FileText, Download, Search, Filter, ExternalLink, Sparkles, BookOpen } from 'lucide-react';
import { SpotlightCard } from './PineLabsAnimations';

const publications = [
  {
    title: 'Draft River Policy of Uttar Pradesh 2024',
    category: 'Policy & Legislation',
    filename: 'Uttar_Pradesh_River_Policy_2024_Draft-BCVxIc_d.pdf',
    size: '4.71 MB',
    desc: 'Comprehensive draft policy formulated by Bhartiya Nadi Parishad for the Government of Uttar Pradesh addressing river zoning, e-flow, and pollution penalties.',
    badge: 'Flagship Policy',
  },
  {
    title: 'The River Restoration Bill 2016',
    category: 'Policy & Legislation',
    filename: 'THE_RIVER_RESTORATION_BILL_2016-dRJ81tY_.pdf',
    size: '85 KB',
    desc: 'Statutory private member bill framework establishing legal rights for rivers and criminalizing non-point-source toxic discharges.',
    badge: 'Legal Draft',
  },
  {
    title: 'Right of Rivers Statutory Framework',
    category: 'Policy & Legislation',
    filename: 'Right_of_Rivers-CKMBgLo4.pdf',
    size: '686 KB',
    desc: 'Jurisprudential treatise on recognizing river basins as living legal entities under Indian constitutional law.',
    badge: 'Jurisprudence',
  },
  {
    title: 'Bhartiya Nadi Parishad Official Magazine',
    category: 'Magazines & Research',
    filename: 'Magazine-BOq1tp7Z.pdf',
    size: '18.36 MB',
    desc: 'Full-length annual compendium compiling grassroots river reports, case studies, photo essays, and scientific evaluations across India.',
    badge: 'Full Edition',
  },
  {
    title: 'NITI Aayog River Rejuvenation Strategy',
    category: 'National Guidelines',
    filename: 'NITI_Ayog-8pXLWerZ.pdf',
    size: '985 KB',
    desc: 'National policy recommendations aligned with NITI Aayog guidelines for integrating rural water bodies into master watershed planning.',
    badge: 'Government Guidance',
  },
  {
    title: 'NMCG Gazetteer & Clean Ganga Compendium',
    category: 'National Guidelines',
    filename: 'NMCG_Gazetteer-DxnF76wF.pdf',
    size: '211 KB',
    desc: 'Official gazetteer extract delineating river protection zones and drainage corridors across the Ganga basin.',
    badge: 'Gazetteer',
  },
  {
    title: 'Hindon River Rejuvenation Plan',
    category: 'River Blueprints',
    filename: 'Hindon_River_Rejuvenation_Plan-BbwnflMY.pdf',
    size: '1.40 MB',
    desc: 'Full 355 km technical survey, origin mapping from Shivalik to Yamuna confluence, and detailed check dam coordinates.',
    badge: 'Technical Plan',
  },
  {
    title: 'Falgu River Eco-Restoration Study',
    category: 'River Blueprints',
    filename: 'Falgu_River-rgXSVEOK.pdf',
    size: '1.04 MB',
    desc: 'Scientific restoration methodology for the sacred Falgu river in Gaya, Bihar using sub-surface sand barrier architecture.',
    badge: 'Case Study',
  },
  {
    title: 'Sasur Khaderi Pond & River Rejuvenation Plan',
    category: 'River Blueprints',
    filename: 'Sasur_Khaderi_River_Pond_Rejuventation_Plan-CxZkUmjM.pdf',
    size: '1.25 MB',
    desc: 'Detailed field documentation of the 54-lake cascade revival in Fatehpur district that reversed severe groundwater depletion.',
    badge: 'Model Action',
  },
  {
    title: 'Sasur Khaderi Field Documentation',
    category: 'River Blueprints',
    filename: 'Sasur_Khaderi-DsZe9Squ.pdf',
    size: '1.12 MB',
    desc: 'Primary ecological indicators, biodiversity comeback logs, and participatory rural appraisal surveys.',
    badge: 'Field Survey',
  },
  {
    title: 'Solani River Basin Restoration',
    category: 'River Blueprints',
    filename: 'Solani_River-BZ8JtjMq.pdf',
    size: '2.00 MB',
    desc: 'Sub-watershed management plan for the Solani river in Haridwar/Saharanpur, mitigating flash floods and soil erosion.',
    badge: 'Watershed Plan',
  },
  {
    title: 'Gagadiyo River Rejuvenation Draft',
    category: 'River Blueprints',
    filename: 'Gagadiyo_River_Rejuvenation_Draft-DfUExiLR.pdf',
    size: '907 KB',
    desc: 'Stream revitalization and natural weir construction framework for Gujarat riparian corridors.',
    badge: 'Draft Plan',
  },
  {
    title: 'Neem River Restoration Flyer',
    category: 'River Blueprints',
    filename: 'NEEM_RIVER_FLYER24-BJXj1ZA-.pdf',
    size: '1.74 MB',
    desc: 'Educational campaign document illustrating before-and-after satellite photography and community action checkpoints.',
    badge: 'Action Guide',
  },
  {
    title: 'About Ganga River Comprehensive Assessment',
    category: 'River Blueprints',
    filename: 'About_Ganga_River-DaMWgYki.pdf',
    size: '1.16 MB',
    desc: 'Ecosystem analysis, biological oxygen demand (BOD) profiles, and tributary health assessments for the central Ganga basin.',
    badge: 'Ecosystem Report',
  },
  {
    title: 'Ganga River Flyer',
    category: 'River Blueprints',
    filename: 'GANGA%20RIVER%20FLYER-BmhQOJXx.pdf',
    size: '1.91 MB',
    desc: 'Public outreach and civic responsibility flyer for pilgrim towns and ghat management.',
    badge: 'Flyer',
  },
  {
    title: 'Jal Digdarshika (Water Guidebook)',
    category: 'Magazines & Research',
    filename: 'Jal_Digdarshika-B3u3G3LH.pdf',
    size: '3.78 MB',
    desc: 'Comprehensive Hindi guidebook for village pradhans, teachers, and volunteers on measuring water tables and building soak pits.',
    badge: 'Guidebook',
  },
  {
    title: 'Pond Rejuvenation Model (English)',
    category: 'Model Guidelines',
    filename: 'pond%20rev%20ENG-P0yaijZ9.pdf',
    size: '2.13 MB',
    desc: 'Standard Operating Procedures (SOP) for transforming village waste ponds into clean percolation tanks.',
    badge: 'SOP Guide',
  },
  {
    title: 'Pond Rejuvenation Model (Hindi)',
    category: 'Model Guidelines',
    filename: 'pond%20rev%20HINDI-CwU_I0c6.pdf',
    size: '2.02 MB',
    desc: 'Hindi adaptation of the village pond revival manual with vernacular engineering diagrams.',
    badge: 'Hindi Guide',
  },
  {
    title: 'RRM Hindi Final Handbook',
    category: 'Model Guidelines',
    filename: 'RRM_hindi_final-C2FJmQFM.pdf',
    size: '573 KB',
    desc: 'River Rejuvenation Model field handbook in Hindi for on-ground implementation crews.',
    badge: 'Handbook',
  },
  {
    title: 'RRM English Handbook',
    category: 'Model Guidelines',
    filename: 'RRM_ENG-C_9WcwEY.pdf',
    size: '691 KB',
    desc: 'English technical manual on hydro-geological surveying and riparian bio-engineering.',
    badge: 'Technical Manual',
  },
  {
    title: 'Pond Rejuvenation Model Hindi Concise',
    category: 'Model Guidelines',
    filename: 'Pond_Rejuvenation_Model_Hindi-DD2QukC3.pdf',
    size: '133 KB',
    desc: 'Quick-reference booklet on wetland demarcation and silt utilization for organic manure.',
    badge: 'Pocket Guide',
  },
];

const categories = [
  'All Documents',
  'Policy & Legislation',
  'River Blueprints',
  'National Guidelines',
  'Model Guidelines',
  'Magazines & Research',
];

export default function PublicationsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('All Documents');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = publications.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All Documents' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="publications" className="py-16 sm:py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Open Access Archive</span>
            </div>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1D33] tracking-tight">
              Publications & Policy Library
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#425B76] max-w-md">
            21 authoritative research documents, draft bills, NITI Aayog submissions, and rejuvenation handbooks available for open public study.
          </p>
        </div>

        {/* Filter Controls (Mobile optimized swipe pills & search) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3.5 mb-8 pb-4 border-b border-gray-100">
          {/* Category Tabs: Smooth horizontal touch scroller with snap */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar snap-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`snap-start whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#0A1D33] text-white shadow-sm'
                    : 'bg-[#F4F9FD] text-[#425B76] hover:bg-[#E0F2FE] hover:text-[#0A1D33]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search policy or river..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-full bg-[#F6FAFC] border border-[#2B8EE8]/20 focus:outline-none focus:border-[#2B8EE8] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Documents Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((doc, idx) => (
            <SpotlightCard key={idx} className="p-5 sm:p-6 text-left flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#ECFDF5] text-[#059669]">
                    {doc.badge}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400">{doc.size}</span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#0A1D33] group-hover:text-[#1C71C6] transition-colors line-clamp-2 mb-2">
                  {doc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#425B76] line-clamp-3 leading-relaxed mb-4">
                  {doc.desc}
                </p>
              </div>

              <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#6E859E] truncate max-w-[140px]">
                  {doc.category}
                </span>

                <a
                  href={`/assets/${doc.filename}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F0F8FF] text-[#1C71C6] hover:bg-[#1C71C6] hover:text-white transition-all duration-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            <p className="text-sm font-medium">No publications found matching "{searchQuery}".</p>
          </div>
        )}

      </div>
    </section>
  );
}
