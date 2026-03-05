import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  ArrowUp
} from 'lucide-react';
import { useUI } from '../context/UIContext.jsx';

const Footer = () => {
  const { t } = useUI();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLinks = [
    'service_1_title', 'service_2_title', 'service_3_title',
    'service_4_title', 'service_5_title', 'service_6_title'
  ];

  const companyLinks = [
    { key: 'footer_about_us', href: '#about' },
    { key: 'footer_our_team', href: '#about' },
    { key: 'footer_careers', href: '#' },
    { key: 'footer_blog', href: '#' },
    { key: 'footer_case_studies', href: '#portfolio' },
    { key: 'footer_contact', href: '#contact' }
  ];

  const resourceLinks = [
    'footer_docs', 'footer_api', 'footer_support',
    'footer_community', 'footer_partners', 'footer_privacy'
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800/50 text-white relative overflow-hidden">
      {/* Decorative line */}
      <svg className="decorative-line absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 400" preserveAspectRatio="none">
        <path d="M-50,200 Q250,50 500,200 T1050,100" />
      </svg>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-display font-bold gradient-text">ETQAN</span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
              {t('footer_desc')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-500">
                <Mail className="h-4 w-4 text-neon-400/60" />
                <span className="text-sm">{t('contact_email_detail')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-500">
                <Phone className="h-4 w-4 text-neon-400/60" />
                <span className="text-sm">{t('contact_phone_detail')}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-500">
                <MapPin className="h-4 w-4 text-neon-400/60" />
                <span className="text-sm">{t('contact_visit_detail')}</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-white mb-6">{t('footer_services')}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((key, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-500 hover:text-neon-400 transition-colors text-sm">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-white mb-6">{t('footer_company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-500 hover:text-neon-400 transition-colors text-sm">
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-white mb-6">{t('footer_resources')}</h3>
            <ul className="space-y-3 mb-6">
              {resourceLinks.map((key, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-500 hover:text-neon-400 transition-colors text-sm">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-3 text-gray-400">{t('footer_follow')}</h4>
              <div className="flex space-x-2">
                {[
                  { icon: <Linkedin className="h-4 w-4" />, url: "#" },
                  { icon: <Github className="h-4 w-4" />, url: "#" },
                  { icon: <Twitter className="h-4 w-4" />, url: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="bg-dark-400 border border-gray-800/50 hover:border-neon-400/30 hover:text-neon-400 p-2 rounded-lg transition-all text-gray-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        className="border-t border-gray-800/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-display text-lg font-semibold mb-1">{t('footer_newsletter_title')}</h3>
              <p className="text-gray-500 text-sm">
                {t('footer_newsletter_desc')}
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder={t('footer_newsletter_placeholder')}
                className="flex-1 md:w-64 px-4 py-2 bg-dark-400 border border-gray-700/50 rounded-l-full focus:outline-none focus:border-neon-400/50 text-white text-sm placeholder-gray-600"
              />
              <motion.button
                className="bg-neon-500 hover:bg-neon-600 text-dark-700 px-6 py-2 rounded-r-full font-medium transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('footer_subscribe')}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              {t('footer_copyright')}
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-neon-400 text-sm transition-colors">
                {t('footer_terms')}
              </a>
              <a href="#" className="text-gray-600 hover:text-neon-400 text-sm transition-colors">
                {t('footer_privacy_link')}
              </a>
              <motion.button
                onClick={scrollToTop}
                className="bg-dark-400 border border-gray-700/50 hover:border-neon-400/30 hover:text-neon-400 p-2 rounded-lg transition-all text-gray-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
