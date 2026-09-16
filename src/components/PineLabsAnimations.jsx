import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Pine Labs inspired Masked Text Reveal
 * Text translates from 100% Y through an overflow-hidden mask
 */
export function MaskedHeading({ children, className = '', delay = 0 }) {
  return (
    <div className="overflow-hidden inline-block leading-tight">
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.85,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Pine Labs signature smooth deceleration
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Pine Labs OpacityTextReveal
 * As you scroll past this narrative, words progressively light up
 */
export function ScrollWordReveal({ text, className = '' }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.4'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap gap-x-2.5 gap-y-1.5 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ['#6E859E', '#0A1D33']);

  return (
    <motion.span style={{ opacity, color }} className="transition-colors duration-200 inline-block">
      {word}
    </motion.span>
  );
}

/**
 * Interactive Spotlight Card
 * Radial glow follows mouse cursor across the card surface
 */
export function SpotlightCard({ children, className = '', spotlightColor = 'rgba(43, 142, 232, 0.15)' }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-3xl border border-[#2B8EE8]/15 bg-white transition-all duration-500 hover:border-[#2B8EE8]/40 hover:shadow-xl hover:shadow-[#2B8EE8]/5 ${className}`}
      style={{
        background: `radial-gradient(400px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${spotlightColor}, transparent 70%), #FFFFFF`,
      }}
    >
      {children}
    </div>
  );
}
