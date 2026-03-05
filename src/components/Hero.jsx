import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Brain, Zap, Sparkles } from 'lucide-react';
import { useUI } from '../context/UIContext.jsx';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const swooshRef = useRef(null);
  const badgeRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const pillsRef = useRef(null);
  const lineRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const bottomRef = useRef(null);
  const taglineRef = useRef(null);
  const cursorRef = useRef(null);
  const logoMaskRef = useRef(null);

  const { t } = useUI();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Phase 1: Line draws across top
      tl.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.5, ease: 'power2.inOut' }
      );

      // Green dot pulses in
      tl.fromTo('.hero-green-dot',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.2, ease: 'back.out(3)' },
        '-=0.2'
      );

      // Phase 2: Year badge drops in
      tl.fromTo(badgeRef.current,
        { y: -40, opacity: 0, scale: 0.5, rotateX: 90 },
        { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.3, ease: 'back.out(2)' },
        '-=0.1'
      );

      // Phase 2.5: Tagline types in character by character (now before logo)
      if (taglineRef.current) {
        tl.set(taglineRef.current, { opacity: 1, y: 0 });

        const taglineChars = taglineRef.current.querySelectorAll('.tagline-char');
        tl.fromTo(taglineChars,
          { opacity: 0, display: 'none' },
          {
            opacity: 1,
            display: 'inline',
            duration: 0.01,
            stagger: 0.02,
            ease: 'none',
          },
          '-=0.1'
        );
      }

      // Blinking cursor - blink a few times then disappear
      const cursorBlink = gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: 5,
        yoyo: true,
        duration: 0.4,
        ease: 'steps(1)',
        onComplete: () => {
          gsap.to(cursorRef.current, { opacity: 0, duration: 0.2 });
        },
      });

      // Phase 3: Logo - smooth reveal with clip-path (like a curtain sliding right)
      if (logoMaskRef.current) {
        tl.fromTo(logoMaskRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
          },
          '-=0.2'
        );
      }

      // Phase 4: Green swoosh draws itself
      const swooshPaths = swooshRef.current?.querySelectorAll('path');
      if (swooshPaths) {
        swooshPaths.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 0,
          });
        });

        tl.to(swooshPaths, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.inOut',
        }, '-=0.6');
      }

      // Phase 6: Subtitle reveals word by word
      const words = subtitleRef.current?.querySelectorAll('.hero-word');
      if (words) {
        tl.fromTo(words,
          { opacity: 0, y: 8, filter: 'blur(3px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.2,
            stagger: 0.02,
          },
          '-=0.4'
        );
      }

      // Phase 7: CTAs slide up
      tl.fromTo(ctaRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.08, ease: 'back.out(1.5)' },
        '-=0.2'
      );

      // Phase 8: Pills pop in
      const pills = pillsRef.current?.querySelectorAll('.hero-pill');
      if (pills) {
        tl.fromTo(pills,
          { opacity: 0, scale: 0, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.2, stagger: 0.05, ease: 'back.out(3)' },
          '-=0.2'
        );
      }

      // Phase 9: Side texts and bottom credits fade in
      tl.fromTo([leftTextRef.current, rightTextRef.current],
        { opacity: 0, x: (i) => i === 0 ? -20 : 20 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.05 },
        '-=0.2'
      );

      tl.fromTo(bottomRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.3 },
        '-=0.2'
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into individual character spans
  const logoText = 'etqan';
  const logoChars = logoText.split('').map((char, i) => (
    <span
      key={i}
      className="hero-char inline-block"
      style={{ perspective: '600px' }}
    >
      {char}
    </span>
  ));

  // Split subtitle into word spans
  const subtitleText = t('hero_sub');
  const subtitleWords = subtitleText.split(' ').map((word, i) => (
    <span key={i} className="hero-word inline-block mr-[0.3em]">
      {word}
    </span>
  ));

  return (
    <section ref={heroRef} id="home" className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ChatGPT Image Mar 5, 2026, 01_06_40 AM.png')" }}
      />

      {/* Section divider line at top */}
      <div className="absolute top-16 left-6 right-6 z-20">
        <div
          ref={lineRef}
          className="relative w-full max-w-4xl mx-auto h-px bg-gray-700/50"
          style={{ transform: 'scaleX(0)' }}
        >
          <div
            className="hero-green-dot absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neon-400"
            style={{ boxShadow: '0 0 8px rgba(74, 222, 128, 0.5)', opacity: 0 }}
          />
        </div>
      </div>

      {/* Left vertical text */}
      <div
        ref={leftTextRef}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4"
        style={{ opacity: 0 }}
      >
        <Sparkles className="h-4 w-4 text-gray-500" />
        <span className="text-gray-500 text-xs font-mono tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          {t('hero_pill_software')}
        </span>
        <Sparkles className="h-4 w-4 text-gray-500" />
      </div>

      {/* Right vertical text */}
      <div
        ref={rightTextRef}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-4"
        style={{ opacity: 0 }}
      >
        <Sparkles className="h-4 w-4 text-gray-500" />
        <span className="text-gray-500 text-xs font-mono tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          {t('hero_pill_ai')}
        </span>
        <div className="w-3 h-3 rounded-full border border-gray-600 flex items-center justify-center">
          <div className="w-1 h-1 bg-neon-400 rounded-full" />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="hero-content text-center max-w-5xl mx-auto">
          {/* Year badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center bg-neon-500 rounded-lg px-5 py-1.5 mb-6"
            style={{ opacity: 0 }}
          >
            <span className="text-sm font-bold text-dark-700 tracking-wider font-mono">
              2026
            </span>
          </div>

          {/* Tagline - moved to top, bigger, more visible */}
          <div
            ref={taglineRef}
            className="flex items-center justify-center gap-3 mb-8"
            style={{ opacity: 0 }}
          >
            <span className="font-mono text-sm md:text-base tracking-[0.25em] uppercase text-gray-300">
              {t('badge').split('').map((char, i) => (
                <span key={i} className="tagline-char" style={{ opacity: 0 }}>
                  {char}
                </span>
              ))}
            </span>
            <span ref={cursorRef} className="inline-block w-px h-5 bg-neon-400 ml-1" />
          </div>

          {/* Main Heading - smooth clip-path reveal */}
          <h1 className="mb-6 leading-none relative" style={{ perspective: '1000px' }}>
            <div
              ref={logoMaskRef}
              className="relative z-10"
              style={{ clipPath: 'inset(0 100% 0 0)', zIndex: 20, position: 'relative' }}
            >
              <div
                ref={logoRef}
                className="font-display text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold text-white/90"
              >
                {logoChars}
              </div>
            </div>

            {/* Elegant underline flourish - below the text */}
            <svg
              ref={swooshRef}
              className="relative left-1/2 -translate-x-1/2 w-[55%] md:w-[45%] pointer-events-none -mt-4 md:-mt-6"
              viewBox="0 0 400 50"
              fill="none"
              style={{ height: 'auto' }}
            >
              {/* Main elegant brush stroke underline */}
              <path
                d="M10,25 C80,25 120,8 200,8 C280,8 340,30 390,18"
                stroke="url(#swooshGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Subtle shadow stroke */}
              <path
                d="M30,30 C100,30 140,14 210,14 C280,14 330,34 380,24"
                stroke="#22c55e"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.25"
              />
              <defs>
                <linearGradient id="swooshGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                  <stop offset="30%" stopColor="#4ade80" stopOpacity="1" />
                  <stop offset="70%" stopColor="#4ade80" stopOpacity="1" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </h1>

          {/* Subtitle - word by word */}
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
          >
            {subtitleWords}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <motion.button
              className="btn-primary flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('hero_btn_primary')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="btn-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('hero_btn_secondary')}</span>
            </motion.button>
          </div>

          {/* Feature Pills */}
          <div ref={pillsRef} className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Code2 className="h-4 w-4 text-neon-400" />, key: 'hero_pill_software' },
              { icon: <Brain className="h-4 w-4 text-neon-400" />, key: 'hero_pill_ai' },
              { icon: <Zap className="h-4 w-4 text-neon-400" />, key: 'hero_pill_automation' },
            ].map((pill, idx) => (
              <div key={idx} className="hero-pill flex items-center space-x-2 bg-dark-300/50 backdrop-blur-sm border border-gray-700/40 rounded-full px-4 py-2" style={{ opacity: 0 }}>
                {pill.icon}
                <span className="text-xs font-mono text-gray-400 tracking-wider uppercase">{t(pill.key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom right credits */}
      <div
        ref={bottomRef}
        className="absolute bottom-10 right-6 md:right-10 z-20 hidden md:block"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-3 text-gray-500">
          <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center">
            <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase">{t('hero_pill_automation')}</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
