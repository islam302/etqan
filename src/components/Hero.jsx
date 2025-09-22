import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Brain, Zap } from 'lucide-react';
import { useUI } from '../context/UIContext.jsx';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const { t, locale } = useUI();
  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center hero-pattern relative overflow-hidden" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `
        radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.1) 0px, transparent 0%),
        radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.1) 0px, transparent 50%),
        radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.1) 0px, transparent 50%),
        radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.1) 0px, transparent 50%),
        radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.1) 0px, transparent 50%),
        radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.1) 0px, transparent 50%),
        radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.1) 0px, transparent 50%)
      `,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-4 -right-4 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: '10'
      }}>
        <motion.div
          className="hero-content text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg"
            variants={itemVariants}
          >
            <Sparkles className="h-5 w-5 text-accent-600" />
            <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: locale === 'ar' ? 'Cairo, Tajawal, sans-serif' : undefined }}>{t('badge')}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.1' }}
          >
            <span className="gradient-text" style={{
              background: 'linear-gradient(to right, #2563eb, #c026d3, #1d4ed8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>{t('hero_title_1')}</span>
            <br />
            <span className="text-gray-800" style={{ color: '#1f2937' }}>{t('hero_title_2')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
            style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}
          >
            {t('hero_sub')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={itemVariants}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}
          >
            <motion.button 
              className="btn-primary flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s'
              }}
            >
              <span>{t('hero_btn_primary')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              className="btn-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                border: '2px solid #2563eb',
                color: '#2563eb',
                background: 'transparent',
                padding: '10px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}
            >
              <span>{t('hero_btn_secondary')}</span>
            </motion.button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Code2 className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Custom Software</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Brain className="h-5 w-5 text-accent-600" />
              <span className="text-sm font-medium text-gray-700">AI & Machine Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Zap className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Process Automation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
