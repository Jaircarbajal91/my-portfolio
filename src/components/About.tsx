import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { aboutContent } from '../data/content'

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

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="section-padding py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="flex-1 space-y-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {aboutContent.story.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>

            {/* Photo - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-shrink-0 w-full md:w-80 lg:w-96 mx-auto md:mx-0"
            >
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary-400/30 via-primary-500/30 to-primary-600/30 dark:from-primary-400/20 dark:via-primary-500/20 dark:to-primary-600/20 p-1.5 shadow-xl dark:shadow-2xl dark:shadow-primary-900/20">
                <div className="rounded-lg overflow-hidden bg-white dark:bg-slate-800">
                  <img
                    src={getAssetPath("/assets/projects/my and bruce.jpg")}
                    alt="Jair and Bruce hiking"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 md:mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            How I <span className="text-primary-600 dark:text-primary-400">Work</span>
          </h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
            {aboutContent.howIWork.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 font-bold">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Projects & Outside */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto mt-12 md:mt-16 space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          >
            {aboutContent.projects}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          >
            {aboutContent.outside}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
