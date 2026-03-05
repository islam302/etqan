import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Star, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useUI } from '../context/UIContext.jsx';

const Portfolio = () => {
  const { t, locale } = useUI();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      titleKey: 'project_1_title',
      catKey: 'project_1_cat',
      descKey: 'project_1_desc',
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
      metrics: { users: "10K+", growth: "300%", rating: 4.9 },
      featured: true
    },
    {
      id: 2,
      titleKey: 'project_2_title',
      catKey: 'project_2_cat',
      descKey: 'project_2_desc',
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Socket.io"],
      metrics: { users: "5K+", growth: "250%", rating: 4.8 },
      featured: true
    },
    {
      id: 3,
      titleKey: 'project_3_title',
      catKey: 'project_3_cat',
      descKey: 'project_3_desc',
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React Native", "Blockchain", "Biometrics", "Node.js", "PostgreSQL"],
      metrics: { users: "25K+", growth: "400%", rating: 4.7 },
      featured: true
    },
    {
      id: 4,
      titleKey: 'project_4_title',
      catKey: 'project_4_cat',
      descKey: 'project_4_desc',
      image: "https://images.unsplash.com/photo-1581093588401-9d09c5f8f2b8?auto=format&fit=crop&w=2340&q=80",
      technologies: ["Vue.js", "Python", "Redis", "Microservices", "Docker"],
      metrics: { users: "15K+", growth: "350%", rating: 4.6 },
      featured: false
    },
    {
      id: 5,
      titleKey: 'project_5_title',
      catKey: 'project_5_cat',
      descKey: 'project_5_desc',
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      technologies: ["Angular", "IoT", "Azure", "Time Series DB", "Machine Learning"],
      metrics: { users: "50K+", growth: "200%", rating: 4.9 },
      featured: false
    },
    {
      id: 6,
      titleKey: 'project_6_title',
      catKey: 'project_6_cat',
      descKey: 'project_6_desc',
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2071&q=80",
      technologies: ["React", "Python", "NLP", "GraphQL", "AWS Lambda"],
      metrics: { users: "30K+", growth: "500%", rating: 4.8 },
      featured: false
    }
  ];

  const activeProject = projects[activeIndex];

  return (
    <section id="portfolio" className="py-24 bg-dark-texture relative overflow-hidden">
      {/* Animated background glow */}
      <div
        className="absolute inset-0 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 40%, rgba(74, 222, 128, 0.06) 0%, transparent 70%)`,
        }}
      />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section divider */}
        <div className="section-divider"></div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">{t('portfolio_title_1')} </span>
            <span className="gradient-text">{t('portfolio_title_2')}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-6">
            {t('portfolio_subtitle')}
          </p>
        </motion.div>

        {/* Main Showcase Swiper */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2,
                slideShadows: false,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="portfolio-swiper !pb-14"
              style={{ overflow: 'visible' }}
            >
              {projects.map((project) => (
                <SwiperSlide
                  key={project.id}
                  className="!w-[340px] sm:!w-[420px] md:!w-[520px] lg:!w-[600px]"
                >
                  {({ isActive }) => (
                    <motion.div
                      className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                        isActive
                          ? 'shadow-[0_0_60px_rgba(74,222,128,0.15),0_25px_50px_rgba(0,0,0,0.5)]'
                          : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)] opacity-60 scale-[0.92]'
                      }`}
                      style={{
                        background: 'rgba(26, 26, 30, 0.95)',
                        border: isActive ? '1px solid rgba(74, 222, 128, 0.25)' : '1px solid rgba(74, 222, 128, 0.05)',
                      }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={t(project.titleKey)}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.dataset.fallbackApplied) return;
                            target.dataset.fallbackApplied = "true";
                            target.src = "/images/edtech.svg";
                          }}
                          className={`w-full h-52 sm:h-64 md:h-72 object-cover transition-transform duration-700 ${
                            isActive ? 'scale-105' : ''
                          }`}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,30,0.95)] via-[rgba(26,26,30,0.3)] to-transparent" />

                        {/* Category badge */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-neon-500/90 backdrop-blur-sm text-dark-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                            {t(project.catKey)}
                          </span>
                        </div>

                        {/* Rating badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-dark-700/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                            <Star className="h-3.5 w-3.5 fill-current text-neon-400" />
                            {project.metrics.rating}
                          </span>
                        </div>

                        {/* Bottom metrics bar on image */}
                        <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5 text-white/90 text-sm">
                              <Users className="h-4 w-4 text-neon-400" />
                              <span className="font-semibold">{project.metrics.users}</span>
                              <span className="text-white/50 text-xs">{locale === 'ar' ? 'مستخدم' : 'users'}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-white/90 text-sm">
                              <TrendingUp className="h-4 w-4 text-neon-400" />
                              <span className="font-semibold">{project.metrics.growth}</span>
                              <span className="text-white/50 text-xs">{locale === 'ar' ? 'نمو' : 'growth'}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                          {t(project.titleKey)}
                        </h3>
                        <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
                          {t(project.descKey)}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-neon-500/10 text-neon-400 border border-neon-500/20 px-3 py-1 rounded-full text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-3">
                          <button className="flex-1 bg-neon-500 hover:bg-neon-400 text-dark-700 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-neon hover:shadow-neon-strong">
                            <Eye className="h-4 w-4" />
                            <span>{t('view_details')}</span>
                          </button>
                          <button className="p-2.5 text-gray-400 hover:text-neon-400 transition-colors border border-gray-700/50 rounded-full hover:border-neon-400/50 hover:bg-neon-500/10">
                            <ExternalLink className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-dark-400/80 backdrop-blur-sm border border-gray-700/50 hover:border-neon-400/50 text-gray-300 hover:text-neon-400 flex items-center justify-center transition-all duration-300 hover:bg-neon-500/10 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-dark-400/80 backdrop-blur-sm border border-gray-700/50 hover:border-neon-400/50 text-gray-300 hover:text-neon-400 flex items-center justify-center transition-all duration-300 hover:bg-neon-500/10 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Active project detail strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-8 bg-neon-400/40"></div>
              <span className="font-mono text-xs text-neon-400 tracking-widest uppercase">
                {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="h-px w-8 bg-neon-400/40"></div>
            </div>
            <p className="text-gray-500 text-sm">
              {t(activeProject.descKey)}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="text-center portfolio-card p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display text-3xl font-bold text-white mb-4">{t('portfolio_cta_title')}</h3>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">{t('portfolio_cta_desc')}</p>
          <motion.button
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('portfolio_cta_btn')}
          </motion.button>
        </motion.div>
      </div>

      {/* Swiper custom styles */}
      <style>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background: rgba(74, 222, 128, 0.3);
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #4ade80;
          box-shadow: 0 0 12px rgba(74, 222, 128, 0.5);
          width: 28px;
          border-radius: 5px;
        }
        .portfolio-swiper .swiper-slide {
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
