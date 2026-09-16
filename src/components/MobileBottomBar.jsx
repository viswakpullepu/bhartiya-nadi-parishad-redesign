import React from 'react';
import { Home, Waves, Landmark, FileText, Droplets } from 'lucide-react';

export default function MobileBottomBar({ onOpenJoinModal }) {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40">
      <nav className="bg-white/90 backdrop-blur-xl border border-[#2B8EE8]/20 rounded-2xl shadow-xl shadow-[#0E2E50]/10 px-3 py-2 flex items-center justify-around">
        <a
          href="#"
          className="flex flex-col items-center gap-1 text-[#425B76] hover:text-[#2B8EE8] py-1 px-2.5 rounded-xl transition-colors active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] font-medium">Home</span>
        </a>

        <a
          href="#rivers"
          className="flex flex-col items-center gap-1 text-[#425B76] hover:text-[#2B8EE8] py-1 px-2.5 rounded-xl transition-colors active:scale-95"
        >
          <Waves className="w-4 h-4" />
          <span className="text-[10px] font-medium">Rivers</span>
        </a>

        {/* Center Prominent Join Action */}
        <button
          onClick={onOpenJoinModal}
          className="flex flex-col items-center justify-center -mt-6 bg-gradient-to-r from-[#1C71C6] via-[#2B8EE8] to-[#059669] text-white w-12 h-12 rounded-full shadow-lg shadow-[#2B8EE8]/30 border-2 border-white active:scale-90 transition-transform"
          aria-label="Join River Warriors"
        >
          <Droplets className="w-5 h-5 text-emerald-200" />
        </button>

        <a
          href="#sangam"
          className="flex flex-col items-center gap-1 text-[#425B76] hover:text-[#2B8EE8] py-1 px-2.5 rounded-xl transition-colors active:scale-95"
        >
          <Landmark className="w-4 h-4" />
          <span className="text-[10px] font-medium">Sangam</span>
        </a>

        <a
          href="#publications"
          className="flex flex-col items-center gap-1 text-[#425B76] hover:text-[#2B8EE8] py-1 px-2.5 rounded-xl transition-colors active:scale-95"
        >
          <FileText className="w-4 h-4" />
          <span className="text-[10px] font-medium">PDFs</span>
        </a>
      </nav>
    </div>
  );
}
