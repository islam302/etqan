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

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Delivered", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "25+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { number: "15+", label: "Technologies", icon: <Award className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems and drive digital transformation."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Every line of code is crafted with precision, tested thoroughly, and built to last with industry best practices."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our mission. We work closely with you to understand your needs and exceed expectations."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "We build systems that grow with your business, ensuring long-term value and adaptability to future needs."
    }
  ];

  const team = [
    {
      name: "Islam Badran",
      role: "CEO, Co‑Founder & Software Engineer",
      expertise: "Full‑Stack Engineering, Architecture, AI Integrations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=2070&q=80",
      bio: "Co‑founder leading product and engineering. Focused on building scalable, reliable systems."
    },
    {
      name: "Khaled Sakr",
      role: "CEO, Co‑Founder & Software Engineer",
      expertise: "Backend Systems, Cloud, DevOps",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2087&q=80",
      bio: "Co‑founder driving technical delivery and platform reliability."
    },
    {
      name: "Mohamed Abozaid",
      role: "CEO, Co‑Founder & Marketing Manager",
      expertise: "Go‑to‑Market, Brand, Growth Marketing",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2087&q=80",
      bio: "Co‑founder owning brand, positioning, and demand generation."
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
            <Users className="h-5 w-5 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">About ETQAN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building the <span className="gradient-text">Future</span> Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and AI specialists committed to 
            transforming businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-primary-600 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-xl mr-4">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge software solutions and AI technologies 
                that drive growth, efficiency, and innovation. We believe in creating technology 
                that not only solves today's challenges but also prepares organizations for tomorrow's opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <div className="flex items-center mb-6">
                <div className="bg-accent-100 p-3 rounded-xl mr-4">
                  <Globe className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading technology partner for businesses seeking digital transformation. 
                We envision a future where AI and intelligent software solutions seamlessly integrate 
                into every aspect of business operations, creating unprecedented value and possibilities.
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-lg card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-xl mb-6 text-white/90">
            Let's discuss how our expertise can help transform your business with innovative technology solutions.
          </p>
          <motion.button 
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
