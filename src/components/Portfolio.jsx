import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      category: "AI & Data Science",
      description: "Comprehensive analytics platform with machine learning insights for e-commerce businesses, featuring predictive analytics and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
      metrics: { users: "10K+", growth: "300%", rating: 4.9 },
      featured: true
    },
    {
      id: 2,
      title: "Smart Healthcare Management System",
      category: "Healthcare Tech",
      description: "Complete hospital management solution with patient tracking, appointment scheduling, and AI-assisted diagnosis support.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Socket.io"],
      metrics: { users: "5K+", growth: "250%", rating: 4.8 },
      featured: true
    },
    {
      id: 3,
      title: "Fintech Mobile Application",
      category: "Financial Technology",
      description: "Secure mobile banking app with biometric authentication, real-time transactions, and AI-powered financial insights.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React Native", "Blockchain", "Biometrics", "Node.js", "PostgreSQL"],
      metrics: { users: "25K+", growth: "400%", rating: 4.7 },
      featured: true
    },
    {
      id: 4,
      title: "E-commerce Automation Platform",
      category: "E-commerce",
      description: "Automated inventory management and order processing system with AI-powered demand forecasting.",
      image: "https://images.unsplash.com/photo-1581093588401-9d09c5f8f2b8?auto=format&fit=crop&w=2340&q=80",
      technologies: ["Vue.js", "Python", "Redis", "Microservices", "Docker"],
      metrics: { users: "15K+", growth: "350%", rating: 4.6 },
      featured: false
    },
    {
      id: 5,
      title: "IoT Smart City Solution",
      category: "IoT & Smart Systems",
      description: "Comprehensive smart city platform managing traffic, utilities, and environmental monitoring through IoT sensors.",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      technologies: ["Angular", "IoT", "Azure", "Time Series DB", "Machine Learning"],
      metrics: { users: "50K+", growth: "200%", rating: 4.9 },
      featured: false
    },
    {
      id: 6,
      title: "Educational AI Tutor Platform",
      category: "EdTech",
      description: "Personalized learning platform with AI tutors, adaptive assessments, and progress tracking for students.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2071&q=80",
      technologies: ["React", "Python", "NLP", "GraphQL", "AWS Lambda"],
      metrics: { users: "30K+", growth: "500%", rating: 4.8 },
      featured: false
    }
  ];

  const getFallbackImage = (category) => {
    switch (category) {
      case "Healthcare Tech":
        return "/images/healthcare.svg";
      case "E-commerce":
        return "/images/ecommerce.svg";
      case "EdTech":
        return "/images/edtech.svg";
      default:
        return "/images/edtech.svg";
    }
  };

  const categories = ["All", "AI & Data Science", "Healthcare Tech", "Financial Technology", "E-commerce", "IoT & Smart Systems", "EdTech"];
  
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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-accent-100 rounded-full px-4 py-2 mb-4">
            <Eye className="h-5 w-5 text-accent-600" />
            <span className="text-sm font-semibold text-accent-700">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with 
            innovative software solutions and AI-powered applications.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Solutions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.dataset.fallbackApplied) return;
                      target.dataset.fallbackApplied = "true";
                      target.src = getFallbackImage(project.category);
                    }}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.metrics.users}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{project.metrics.growth}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span>{project.metrics.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="flex-1 bg-primary-50 hover:bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.dataset.fallbackApplied) return;
                      target.dataset.fallbackApplied = "true";
                      target.src = getFallbackImage(project.category);
                    }}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{project.metrics.users}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      <span>{project.metrics.rating}</span>
                    </span>
                  </div>

                  <button className="w-full bg-gray-50 hover:bg-primary-50 hover:text-primary-700 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-6">Let's discuss how we can bring your vision to life with cutting-edge technology.</p>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
