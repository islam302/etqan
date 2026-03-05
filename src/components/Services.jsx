import { motion } from 'framer-motion';
import { useUI } from '../context/UIContext.jsx';
import {
  Code2,
  Brain,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Rocket
} from 'lucide-react';

const Services = () => {
  const { t } = useUI();

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      titleKey: 'service_1_title',
      descKey: 'service_1_desc',
      featureKeys: ['service_1_f1', 'service_1_f2', 'service_1_f3', 'service_1_f4'],
      number: '01'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      titleKey: 'service_2_title',
      descKey: 'service_2_desc',
      featureKeys: ['service_2_f1', 'service_2_f2', 'service_2_f3', 'service_2_f4'],
      number: '02'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      titleKey: 'service_3_title',
      descKey: 'service_3_desc',
      featureKeys: ['service_3_f1', 'service_3_f2', 'service_3_f3', 'service_3_f4'],
      number: '03'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      titleKey: 'service_4_title',
      descKey: 'service_4_desc',
      featureKeys: ['service_4_f1', 'service_4_f2', 'service_4_f3', 'service_4_f4'],
      number: '04'
    },
    {
      icon: <Database className="h-8 w-8" />,
      titleKey: 'service_5_title',
      descKey: 'service_5_desc',
      featureKeys: ['service_5_f1', 'service_5_f2', 'service_5_f3', 'service_5_f4'],
      number: '05'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      titleKey: 'service_6_title',
      descKey: 'service_6_desc',
      featureKeys: ['service_6_f1', 'service_6_f2', 'service_6_f3', 'service_6_f4'],
      number: '06'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-texture relative" >
      {/* Decorative line */}
      <svg className="decorative-line absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1000 800" preserveAspectRatio="none">
        <path d="M-50,400 Q300,200 600,500 T1050,300" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section divider */}
        <div className="section-divider"></div>

        {/* Header - "Table of Contents" style */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            <span className="font-display text-4xl md:text-5xl text-gray-400 block mb-2 font-medium">{t('services_badge')}</span>
            <span className="font-display text-5xl md:text-7xl font-bold">
              <span className="gradient-text">{t('services_title')}</span>
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-6">
            {t('services_subtitle')}
          </p>
        </motion.div>

        {/* Services Grid - Table of Contents layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              {/* Large background number */}
              <div className="section-number absolute -top-4 -left-2 select-none opacity-60">
                {service.number}
              </div>

              <div className="relative z-10 pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-neon-400 group-hover:text-neon-300 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-neon-400 transition-colors tracking-wide uppercase">
                    {t(service.titleKey)}
                  </h3>
                </div>

                <p className="text-gray-500 mb-5 leading-relaxed text-sm">
                  {t(service.descKey)}
                </p>

                <ul className="space-y-2">
                  {service.featureKeys.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-neon-400/60 rounded-full mr-3 rtl:ml-3 rtl:mr-0"></div>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <button className="text-neon-400 hover:text-neon-300 font-mono text-xs tracking-widest uppercase flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>{t('learn_more')}</span>
                    <Rocket className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="section-divider"></div>
          <h3 className="font-display text-2xl font-bold text-white text-center mb-10 tracking-wide uppercase">
            {t('process_title')}
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            {[
              { titleKey: 'process_1_title', descKey: 'process_1_desc', num: '01' },
              { titleKey: 'process_2_title', descKey: 'process_2_desc', num: '02' },
              { titleKey: 'process_3_title', descKey: 'process_3_desc', num: '03' },
              { titleKey: 'process_4_title', descKey: 'process_4_desc', num: '04' }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex-1 portfolio-card p-6 text-center"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-neon-400 font-mono text-xs mb-2">{step.num}</div>
                <h4 className="font-display font-semibold text-white uppercase tracking-wide mb-1">{t(step.titleKey)}</h4>
                <p className="text-sm text-gray-500">{t(step.descKey)}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-neon-400/30 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
