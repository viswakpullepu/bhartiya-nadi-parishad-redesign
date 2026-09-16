import React, { useState } from 'react';
import { Play, Video, ExternalLink, Sparkles, X } from 'lucide-react';
import { SpotlightCard } from './PineLabsAnimations';

const videosList = [
  {
    id: 'ZC_l58Fo4Dk',
    title: 'National River Sangam Documentary | Bharat Mandapam',
    duration: 'Full Session',
    desc: 'National leaders, spiritual masters, and river conservationists unite for India Water Vision 2047.',
    tag: 'Flagship Event',
  },
  {
    id: 'gOQMSllhQAM',
    title: 'Hindon River Origin Discovery & Shivalik Expeditions',
    duration: '18 mins',
    desc: 'Raman Kant traces the lost origin of the Hindon River in the deep Shivalik forests.',
    tag: 'Field Expedition',
  },
  {
    id: 'BUjY3xK8plg',
    title: 'Water Structures Inspection with Union Jal Shakti Minister',
    duration: '12 mins',
    desc: 'High-level delegation inspecting rainwater harvesting and decentralized ponds in Maharashtra.',
    tag: 'Govt Collaboration',
  },
  {
    id: 'ZmDG3vjAlNA',
    title: 'Community River Panchayats & Grassroots Empowerment',
    duration: '15 mins',
    desc: 'Mobilizing rural youth and women to monitor and safeguard local water corridors.',
    tag: 'Community Action',
  },
  {
    id: 'Gl--ywk_jlM',
    title: 'Rashtriya Nadi Samvad: Science & Sacred Reverence',
    duration: '22 mins',
    desc: 'Expert panel discussing ecological flow minimums and biological wastewater treatment.',
    tag: 'Panel Dialogue',
  },
  {
    id: '7HOrSbfOgW4',
    title: 'The River Warriors of India',
    duration: '14 mins',
    desc: 'Profiles of dedicated grassroots activists revitalizing check dams across northern India.',
    tag: 'River Warriors',
  },
];

export default function VideoDocuSection() {
  const [activeVideoId, setActiveVideoId] = useState(videosList[0].id);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenVideo = (id) => {
    setActiveVideoId(id);
    setModalOpen(true);
  };

  return (
    <section id="documentaries" className="py-24 md:py-32 bg-[#F6FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#059669] text-xs font-semibold uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5" />
              <span>Broadcast & Field Films</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1D33] tracking-tight">
              Documentaries & River Talks
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#425B76] max-w-md">
            Watch real ground expeditions, keynote speeches from Bharat Mandapam, and interviews with India's leading environmental stewards.
          </p>
        </div>

        {/* Featured Video Player Box */}
        <div className="relative rounded-3xl overflow-hidden border border-[#2B8EE8]/20 bg-[#0A1D33] shadow-2xl mb-12">
          <div className="aspect-video w-full max-h-[540px]">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&rel=0`}
              title="River Video Player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Playlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosList.map((vid) => {
            const isPlaying = vid.id === activeVideoId;
            return (
              <SpotlightCard
                key={vid.id}
                className={`p-5 text-left cursor-pointer transition-all ${
                  isPlaying ? 'ring-2 ring-[#2B8EE8]' : ''
                }`}
              >
                <div
                  onClick={() => setActiveVideoId(vid.id)}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Thumbnail preview */}
                    <div className="relative rounded-xl overflow-hidden aspect-video mb-4 bg-slate-900 group">
                      <img
                        src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 text-[#0A1D33] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                          <Play className="w-5 h-5 ml-0.5 fill-current text-[#2B8EE8]" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-mono">
                        {vid.duration}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#059669] block mb-1">
                      {vid.tag}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#0A1D33] leading-snug line-clamp-2 mb-2">
                      {vid.title}
                    </h4>
                    <p className="text-xs text-[#425B76] line-clamp-2 leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#1C71C6] font-semibold">
                    <span>{isPlaying ? '● Currently Playing' : 'Click to Watch'}</span>
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
