import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { personalInfo } from '../data/content'

// Helper to get asset path with base URL
const getAssetPath = (path: string): string => {
  if (path.startsWith('http') || path.startsWith('//')) {
    return path
  }
  // If path already includes base URL, return as is
  const baseUrl = (import.meta as any).env?.BASE_URL || '/my-portfolio/'
  if (path.startsWith(baseUrl)) {
    return path
  }
  return `${baseUrl}${path.startsWith('/') ? path.slice(1) : path}`
}

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradient - now transparent to show main background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent" />
      
      {/* Data/Engineering Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Database Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 text-blue-400/20 text-6xl"
        >
          🗄️
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-32 text-purple-400/20 text-4xl"
        >
          ⚙️
        </motion.div>

        {/* Circuit Pattern */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-blue-400/30 rounded-lg"
        >
          <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </motion.div>

        {/* Data Flow Lines */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-10 w-40 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-10 w-32 h-0.5 bg-gradient-to-l from-purple-400 to-transparent"
        />

        {/* Floating Code Brackets */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 text-green-400/30 text-5xl font-mono"
        >
          {'{'}
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 text-green-400/30 text-5xl font-mono"
        >
          {'}'}
        </motion.div>

        {/* Subtle gradient overlays */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8"
        >
          {/* Profile Image/Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 order-1 lg:order-1"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 p-1.5 shadow-2xl">
              {/* Systems diagram pattern behind avatar */}
              <div className="absolute inset-0 rounded-2xl opacity-10 dark:opacity-15 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Node pattern */}
                  <circle cx="40" cy="40" r="3" fill="currentColor" className="text-primary-400" />
                  <circle cx="160" cy="40" r="3" fill="currentColor" className="text-primary-400" />
                  <circle cx="40" cy="160" r="3" fill="currentColor" className="text-primary-400" />
                  <circle cx="160" cy="160" r="3" fill="currentColor" className="text-primary-400" />
                  <circle cx="100" cy="100" r="4" fill="currentColor" className="text-primary-500" />
                  {/* Connection lines */}
                  <line x1="40" y1="40" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary-400" />
                  <line x1="160" y1="40" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary-400" />
                  <line x1="40" y1="160" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary-400" />
                  <line x1="160" y1="160" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-primary-400" />
                </svg>
              </div>
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-slate-700 relative z-10">
                <img 
                  src={getAssetPath("/assets/projects/me.jpg")} 
                  alt="Jair Carbajal" 
                  className="w-full h-full object-cover object-right-top"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-4 order-2 lg:order-2">
            {/* Micro-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-wide mb-2"
            >
              Full-Stack Engineer • Integrations • AI-Augmented Development
            </motion.p>

            {/* Main Intro Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
            >
              Engineer <span className="text-primary-600 dark:text-primary-400">who builds</span> reliable systems, integrations, and automation
            </motion.h1>

            {/* Tagline/Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-normal leading-relaxed max-w-3xl mx-auto lg:mx-0"
            >
              I build backend architectures and enterprise integrations that turn chaotic, manual operations into predictable, scalable, automated systems. I focus on systems that run in production—stable, maintainable, and built for real-world load.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="-mt-6"
            >
              <button 
              onClick={scrollToProjects}
              className="btn-primary text-lg sm:text-xl px-8 py-4 flex items-center gap-2 hover:scale-105 transition-all duration-300 mx-auto lg:mx-0 shadow-lg hover:shadow-xl"
            >
              See My Work
              <ArrowRight size={24} />
            </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-center lg:justify-start space-x-3"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social hover:shadow-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={24} className="text-gray-600 dark:text-gray-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social hover:shadow-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-gray-600 dark:text-gray-400" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`mailto:${personalInfo.email}`}
                className="btn-social hover:shadow-lg transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} className="text-gray-600 dark:text-gray-400" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={scrollToNext}
          className="btn-scroll hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
