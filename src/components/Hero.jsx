import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Compass, Sparkles, Play, FileDown, CheckCircle2 } from 'lucide-react';
import { MaskedHeading } from './PineLabsAnimations';

export default function Hero({ onOpenJoinModal, onPlayVideo }) {
  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background ambient aquatic glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] lg:w-[1000px] h-[400px] lg:h-[600px] bg-gradient-to-b from-[#E0F2FE]/70 via-[#ECFDF5]/40 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-2 w-64 lg:w-96 h-64 lg:h-96 bg-[#2B8EE8]/10 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-40 left-2 w-64 lg:w-96 h-64 lg:h-96 bg-[#10B981]/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Masked Typography & Narrative (Pine Labs style) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 border border-[#2B8EE8]/20 shadow-sm max-w-full overflow-hidden"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide uppercase text-[#0E2E50] truncate">
                National River Council of India
              </span>
              <span className="w-1 h-1 rounded-full bg-[#2B8EE8]/40 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-medium text-[#10B981] flex-shrink-0">Water Vision 2047</span>
            </motion.div>

            {/* Masked Headline (Pine Labs style with immediate={true} to guarantee zero blank empty spaces) */}
            <div className="space-y-1 sm:space-y-2">
              <div>
                <MaskedHeading delay={0.05} immediate={true}>
                  <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A1D33] leading-[1.1] sm:leading-[1.05]">
                    Rejuvenating India's
                  </h1>
                </MaskedHeading>
              </div>
              <div>
                <MaskedHeading delay={0.15} immediate={true}>
                  <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-river-gradient leading-[1.1] sm:leading-[1.05]">
                    Sacred Lifelines.
                  </h1>
                </MaskedHeading>
              </div>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg lg:text-xl text-[#3B536E] max-w-2xl font-normal leading-relaxed"
            >
              Uniting river activists, hydrologists, policymakers, and communities across 100+ basins to restore pure, uninterrupted, and perennial river flow by 2047.
            </motion.p>

            {/* Action Buttons: Full-width on mobile, inline on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
            >
              <button
                onClick={onOpenJoinModal}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-[#0A1D33] hover:bg-[#1C71C6] transition-all duration-300 shadow-lg shadow-[#0A1D33]/15 hover:shadow-[#1C71C6]/30 active:scale-[0.98]"
              >
                <span>Become a River Warrior</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#publications"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#0E2E50] bg-white border border-[#2B8EE8]/20 hover:bg-[#F0F8FF] hover:border-[#2B8EE8]/40 transition-all duration-300 shadow-sm"
              >
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#2B8EE8]" />
                <span>UP River Policy Draft</span>
              </a>
            </motion.div>

            {/* Trust Indicators / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-5 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#2B8EE8]/15 max-w-lg"
            >
              <div>
                <p className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-[#0A1D33]">355 km</p>
                <p className="text-[10px] sm:text-xs font-medium text-[#6E859E] mt-0.5 leading-tight">Hindon Mapped</p>
              </div>
              <div>
                <p className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-[#10B981]">21+</p>
                <p className="text-[10px] sm:text-xs font-medium text-[#6E859E] mt-0.5 leading-tight">Policy Drafts</p>
              </div>
              <div>
                <p className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-[#2B8EE8]">10k+</p>
                <p className="text-[10px] sm:text-xs font-medium text-[#6E859E] mt-0.5 leading-tight">Volunteers</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Media Frame & Video Loop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto rounded-3xl overflow-hidden border border-[#2B8EE8]/20 shadow-xl shadow-[#2B8EE8]/15 bg-white p-2">
              {/* Media Container */}
              <div className="relative h-[300px] xs:h-[350px] sm:h-[440px] lg:h-[540px] w-full rounded-2xl overflow-hidden bg-slate-900 group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  poster="/assets/1-CUJ3tQAq.jpg"
                >
                  <source src="/assets/membership-Cox8YYqx.mp4" type="video/mp4" />
                  <source src="/assets/membership-DLRLHSpH.webm" type="video/webm" />
                </video>

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D33]/90 via-[#0A1D33]/20 to-transparent" />

                {/* Top Badge on Video */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium border border-white/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Groundwork & Science
                  </span>
                  <button
                    onClick={() => onPlayVideo('ZC_l58Fo4Dk')}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#0A1D33] flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                    title="Watch National River Sangam Film"
                  >
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 text-[#2B8EE8] fill-current" />
                  </button>
                </div>

                {/* Bottom Information Card on Video */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-left">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-gray-200">
                      <img
                        src="/assets/Raman_Kant_2-DZQpxZPK.png"
                        alt="Raman Kant"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0A1D33] leading-tight">
                        Led by Raman Kant
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#059669] font-medium mt-0.5">
                        Riverman of India • Hindon Rejuvenation
                      </p>
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#425B76] mt-2 leading-relaxed">
                    "Rivers are living ecological ecosystems. Our priority combines groundwork, public policy, and spiritual reverence."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 flex items-center gap-2.5 bg-white p-3 sm:p-3.5 rounded-2xl border border-[#2B8EE8]/20 shadow-md sm:shadow-xl shadow-[#0E2E50]/8 text-left">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#10B981] flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="pr-1">
                <p className="text-xs font-bold text-[#0A1D33]">Bharat Mandapam 2024</p>
                <p className="text-[10px] sm:text-[11px] text-[#6E859E]">Rashtriya Nadi Sangam Convened</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
