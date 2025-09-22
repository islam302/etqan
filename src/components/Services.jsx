import { motion } from 'framer-motion';
import { useUI } from '../context/UIContext.jsx';
import { 
  Code2, 
  Brain, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Cpu,
  Globe,
  BarChart3,
  Cog,
  Rocket
} from 'lucide-react';

const Services = () => {
  const { t, locale } = useUI();
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business requirements and scale with your growth.",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & AI Assistants"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize performance, security, and cost-effectiveness.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Microservices"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      description: "Transform raw data into actionable insights with robust data pipelines, warehouses, and analytics solutions.",
      features: ["Data Pipelines", "Data Warehousing", "ETL Processes", "Real-time Analytics"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"],
      color: "from-red-500 to-red-600"
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900" style={{ fontFamily: locale === 'ar' ? 'Cairo, Tajawal, sans-serif' : undefined }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
            <Cog className="h-5 w-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('services_title').split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{t('services_title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology services 
            that drive innovation and deliver measurable business results.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 card-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <Rocket className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Development Process</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {[
              { icon: <Globe className="h-6 w-6" />, title: "Discovery", desc: "Understanding your needs" },
              { icon: <Cog className="h-6 w-6" />, title: "Design", desc: "Creating the blueprint" },
              { icon: <Code2 className="h-6 w-6" />, title: "Develop", desc: "Building the solution" },
              { icon: <BarChart3 className="h-6 w-6" />, title: "Deploy", desc: "Launching your project" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  {step.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500 ml-4"></div>
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
