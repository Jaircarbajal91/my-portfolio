import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { personalInfo } from '../data/content'

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = personalInfo.tagline

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 p-1"
          >
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                JC
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Unique Data-Driven Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6 relative"
          >
            <div className="relative inline-block">
              {/* Code-like background */}
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 rounded-lg transform rotate-1 scale-105 opacity-20"></div>
              <div className="code-snippet">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-gray-600 dark:text-slate-300 text-sm font-mono">data_engineer.js</div>
                </div>
                <div className="mt-3 text-gray-900 dark:text-white font-mono text-lg">
                  <span className="text-blue-600 dark:text-cyan-400">const</span> <span className="text-orange-600 dark:text-yellow-400">solution</span> = <span className="text-green-600 dark:text-emerald-400">"{displayedText}"</span>
                  <span className="animate-pulse text-gray-900 dark:text-white">|</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium"
          >
            {personalInfo.title}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg text-gray-900 dark:text-gray-400 max-w-2xl mx-auto mt-6"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <a 
              href={personalInfo.resume}
              download
              className="btn-primary text-lg px-8 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-3 hover:scale-105 transition-transform duration-200"
            >
              View My Work
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={personalInfo.github}
              className="btn-social"
            >
              <Github size={24} className="text-gray-600 dark:text-gray-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={personalInfo.linkedin}
              className="btn-social"
            >
              <Linkedin size={24} className="text-gray-600 dark:text-gray-400" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${personalInfo.email}`}
              className="btn-social"
            >
              <Mail size={24} className="text-gray-600 dark:text-gray-400" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={scrollToNext}
          className="btn-scroll"
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
