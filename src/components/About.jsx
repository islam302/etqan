import { motion } from 'framer-motion';
import {
  Users,
  Award,
  Clock,
  Target,
  Lightbulb,
  Shield,
  Heart,
  TrendingUp,
  Globe,
  CheckCircle
} from 'lucide-react';
import { useUI } from '../context/UIContext.jsx';

const About = () => {
  const { t } = useUI();

  const stats = [
    { number: "50+", labelKey: 'stat_projects', icon: <CheckCircle className="h-5 w-5" /> },
    { number: "25+", labelKey: 'stat_clients', icon: <Users className="h-5 w-5" /> },
    { number: "5+", labelKey: 'stat_years', icon: <Clock className="h-5 w-5" /> },
    { number: "15+", labelKey: 'stat_tech', icon: <Award className="h-5 w-5" /> }
  ];

  const values = [
    { icon: <Lightbulb className="h-7 w-7" />, titleKey: 'value_1_title', descKey: 'value_1_desc' },
    { icon: <Shield className="h-7 w-7" />, titleKey: 'value_2_title', descKey: 'value_2_desc' },
    { icon: <Heart className="h-7 w-7" />, titleKey: 'value_3_title', descKey: 'value_3_desc' },
    { icon: <TrendingUp className="h-7 w-7" />, titleKey: 'value_4_title', descKey: 'value_4_desc' }
  ];

  const team = [
    { nameKey: 'team_1_name', roleKey: 'team_1_role', expertiseKey: 'team_1_expertise', bioKey: 'team_1_bio' },
    { nameKey: 'team_2_name', roleKey: 'team_2_role', expertiseKey: 'team_2_expertise', bioKey: 'team_2_bio' },
    { nameKey: 'team_3_name', roleKey: 'team_3_role', expertiseKey: 'team_3_expertise', bioKey: 'team_3_bio' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 bg-dark-texture relative">
      {/* Decorative line */}
      <svg className="decorative-line absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1000 1400" preserveAspectRatio="none">
        <path d="M1050,200 Q600,400 400,200 T-50,500" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section divider */}
        <div className="section-divider"></div>

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">{t('about_title_1')} </span>
            <span className="gradient-text">{t('about_title_2')}</span>
            <span className="text-white"> {t('about_title_3')}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-6">
            {t('about_subtitle')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center portfolio-card p-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-neon-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-display font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-500 text-sm">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio text section - like the reference images */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 leading-loose text-lg">
            {t('mission_desc')}
          </p>
          <div className="mt-8">
            <p className="text-gray-400 leading-loose text-lg">
              {t('vision_desc')}
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="portfolio-card p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-neon-500/10 border border-neon-400/20 p-3 rounded-xl mr-4 rtl:ml-4 rtl:mr-0">
                  <Target className="h-7 w-7 text-neon-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{t('mission_title')}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('mission_desc')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="portfolio-card p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="bg-neon-500/10 border border-neon-400/20 p-3 rounded-xl mr-4 rtl:ml-4 rtl:mr-0">
                  <Globe className="h-7 w-7 text-neon-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{t('vision_title')}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {t('vision_desc')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-divider"></div>
          <h3 className="font-display text-3xl font-bold text-white text-center mb-12">{t('values_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center portfolio-card p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-neon-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="font-display text-lg font-semibold text-white mb-3">{t(value.titleKey)}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{t(value.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="font-display text-3xl font-bold text-white text-center mb-12">{t('team_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="portfolio-card overflow-hidden group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-neon-500/10 border border-neon-400/20 rounded-2xl flex items-center justify-center mb-4">
                    <span className="font-display text-2xl font-bold text-neon-400">
                      {t(member.nameKey).charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-1">{t(member.nameKey)}</h4>
                  <p className="text-neon-400 text-sm font-medium mb-2">{t(member.roleKey)}</p>
                  <p className="text-gray-500 text-xs font-mono mb-3">{t(member.expertiseKey)}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(member.bioKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20 rounded-2xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05))',
            border: '1px solid rgba(74, 222, 128, 0.15)'
          }}
        >
          <h3 className="font-display text-3xl font-bold text-white mb-4">{t('about_cta_title')}</h3>
          <p className="text-lg mb-8 text-gray-400 max-w-lg mx-auto">
            {t('about_cta_desc')}
          </p>
          <motion.button
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('about_cta_btn')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
