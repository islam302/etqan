import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Globe,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';
import { useUI } from '../context/UIContext.jsx';

const Contact = () => {
  const { t } = useUI();

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, titleKey: 'contact_email_title', detailKey: 'contact_email_detail', descKey: 'contact_email_desc' },
    { icon: <Phone className="h-5 w-5" />, titleKey: 'contact_phone_title', detailKey: 'contact_phone_detail', descKey: 'contact_phone_desc' },
    { icon: <MapPin className="h-5 w-5" />, titleKey: 'contact_visit_title', detailKey: 'contact_visit_detail', descKey: 'contact_visit_desc' },
    { icon: <Clock className="h-5 w-5" />, titleKey: 'contact_response_title', detailKey: 'contact_response_detail', descKey: 'contact_response_desc' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "#" },
    { icon: <Github className="h-5 w-5" />, name: "GitHub", url: "#" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" },
    { icon: <Globe className="h-5 w-5" />, name: "Website", url: "#" }
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

  const inputClasses = "w-full px-4 py-3 bg-dark-400 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-neon-400/30 focus:border-neon-400/50 transition-all text-white placeholder-gray-600 outline-none";

  return (
    <section id="contact" className="py-24 bg-dark-texture relative">
      {/* Decorative line */}
      <svg className="decorative-line absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1000 800" preserveAspectRatio="none">
        <path d="M-50,200 Q400,400 600,100 T1050,300" />
      </svg>

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
            <span className="text-white">{t('contact_title_1')} </span>
            <span className="gradient-text">{t('contact_title_2')}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-6">
            {t('contact_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="portfolio-card p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-6">{t('contact_form_title')}</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t('contact_first_name')} *
                  </label>
                  <input type="text" className={inputClasses} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    {t('contact_last_name')} *
                  </label>
                  <input type="text" className={inputClasses} required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t('contact_email')} *
                </label>
                <input type="email" className={inputClasses} required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t('contact_company')}
                </label>
                <input type="text" className={inputClasses} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t('contact_project_type')}
                </label>
                <select className={inputClasses}>
                  <option value="">{t('contact_select_service')}</option>
                  <option value="web-development">{t('contact_web_dev')}</option>
                  <option value="mobile-app">{t('contact_mobile_app')}</option>
                  <option value="ai-ml">{t('contact_ai_ml')}</option>
                  <option value="cloud-solutions">{t('contact_cloud')}</option>
                  <option value="data-engineering">{t('contact_data')}</option>
                  <option value="cybersecurity">{t('contact_security')}</option>
                  <option value="consultation">{t('contact_consultation')}</option>
                  <option value="other">{t('contact_other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t('contact_budget')}
                </label>
                <select className={inputClasses}>
                  <option value="">{t('contact_select_budget')}</option>
                  <option value="under-10k">{t('contact_budget_1')}</option>
                  <option value="10k-25k">{t('contact_budget_2')}</option>
                  <option value="25k-50k">{t('contact_budget_3')}</option>
                  <option value="50k-100k">{t('contact_budget_4')}</option>
                  <option value="over-100k">{t('contact_budget_5')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {t('contact_description')} *
                </label>
                <textarea
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder={t('contact_placeholder')}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                <span>{t('contact_send')}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">{t('contact_info_title')}</h3>
              <p className="text-gray-500 mb-8">
                {t('contact_info_subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="portfolio-card p-5"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-neon-400 mb-3">
                    {info.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{t(info.titleKey)}</h4>
                  <p className="text-neon-400 font-medium text-sm mb-1">{t(info.detailKey)}</p>
                  <p className="text-xs text-gray-500">{t(info.descKey)}</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <motion.div
              className="portfolio-card p-6"
              variants={itemVariants}
            >
              <h4 className="font-display font-bold text-white mb-4">{t('faq_title')}</h4>
              <div className="space-y-4 text-sm">
                {[
                  { q: 'faq_1_q', a: 'faq_1_a' },
                  { q: 'faq_2_q', a: 'faq_2_a' },
                  { q: 'faq_3_q', a: 'faq_3_a' },
                ].map((faq, i) => (
                  <div key={i}>
                    <p className="font-medium text-gray-200">{t(faq.q)}</p>
                    <p className="text-gray-500 mt-1">{t(faq.a)}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-display font-bold text-white mb-4">{t('follow_us')}</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="bg-dark-300 border border-gray-700/50 p-3 rounded-xl text-gray-400 hover:text-neon-400 hover:border-neon-400/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
