import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NarrativeReveal from './components/NarrativeReveal';
import RiverExplorer from './components/RiverExplorer';
import SangamSection from './components/SangamSection';
import PublicationsCatalog from './components/PublicationsCatalog';
import VideoDocuSection from './components/VideoDocuSection';
import LeadershipSection from './components/LeadershipSection';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import MobileBottomBar from './components/MobileBottomBar';
import { X } from 'lucide-react';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [videoModalId, setVideoModalId] = useState(null);

  return (
    <div className="min-h-screen bg-[#F6FAFC] text-[#0A1D33] font-sans selection:bg-[#2B8EE8]/20 selection:text-[#0A1D33] relative pb-16 lg:pb-0">
      {/* Navigation */}
      <Navbar onOpenJoinModal={() => setJoinModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Pine Labs Masked Typography (Mobile Scaled) */}
        <Hero
          onOpenJoinModal={() => setJoinModalOpen(true)}
          onPlayVideo={(id) => setVideoModalId(id)}
        />

        {/* 2. Manifesto & Scroll Word Reveal (Pine Labs style) */}
        <NarrativeReveal />

        {/* 3. River Basins & Field Blueprints Showcase (Touch Swipe Enabled) */}
        <RiverExplorer />

        {/* 4. Rashtriya Nadi Sangam at Bharat Mandapam (Dark High-Contrast Section) */}
        <SangamSection onPlayVideo={(id) => setVideoModalId(id)} />

        {/* 5. 21 Downloadable Policy & Research PDFs Library */}
        <PublicationsCatalog />

        {/* 6. Curated Field Documentaries & Video Talks */}
        <VideoDocuSection />

        {/* 7. Leadership & Council Advisory */}
        <LeadershipSection />
      </main>

      {/* Footer & Comprehensive Route Directory */}
      <Footer onOpenJoinModal={() => setJoinModalOpen(true)} />

      {/* Mobile Floating Quick Dock (Only visible on mobile screens) */}
      <MobileBottomBar onOpenJoinModal={() => setJoinModalOpen(true)} />

      {/* River Warrior Registration Modal (Adaptive Bottom Sheet on Mobile) */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />

      {/* Video Modal Player (Responsive 16:9 on all viewports) */}
      {videoModalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setVideoModalId(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 sm:p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close video"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoModalId}?autoplay=1&rel=0`}
                title="Bhartiya Nadi Parishad Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
