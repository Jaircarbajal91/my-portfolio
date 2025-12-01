import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Zap, Shield } from 'lucide-react'
import { aboutContent } from '../data/content'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = aboutContent.stats

  const values = aboutContent.values.map(value => ({
    icon: value.icon === 'Code' ? <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" /> :
          value.icon === 'Database' ? <Database className="w-8 h-8 text-primary-600 dark:text-primary-400" /> :
          value.icon === 'Zap' ? <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" /> :
          value.icon === 'Shield' ? <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" /> :
          <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
    title: value.title,
    description: value.description
  }))

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
          <p className="text-xl text-gray-900 dark:text-gray-200 max-w-3xl mx-auto">
            I'm a developer who loves building things that matter, both in code and in life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              My <span className="text-primary-600 dark:text-primary-400">Story</span>
            </h3>
            <div className="space-y-4 text-gray-900 dark:text-gray-300">
              {aboutContent.story.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 card hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-900 dark:text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 lg:mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How I <span className="text-primary-600 dark:text-primary-400">Work</span>
          </h3>
          <hr className="border-gray-300 dark:border-slate-600 mb-6" />
          <ul className="space-y-4 text-gray-900 dark:text-gray-300">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-start"
            >
              <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 font-bold">•</span>
              <span><strong className="text-gray-900 dark:text-white">Plan clearly</strong> — I diagram workflows and architecture using tools like Miro and Whimsical before writing code.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-start"
            >
              <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 font-bold">•</span>
              <span><strong className="text-gray-900 dark:text-white">Build efficiently</strong> — Cursor, Copilot, and ChatGPT help eliminate repetitive tasks so I can focus on logic and design.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-start"
            >
              <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 font-bold">•</span>
              <span><strong className="text-gray-900 dark:text-white">Stay reliable</strong> — I prioritize structure, readability, testing, and long-term maintainability.</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex items-start"
            >
              <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 font-bold">•</span>
              <span><strong className="text-gray-900 dark:text-white">Communicate early</strong> — I turn complex ideas into clear diagrams, prototypes, and explanations for stakeholders.</span>
            </motion.li>
          </ul>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 card hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {value.title.split(' ').map((word, idx, arr) => 
                  idx === 0 ? (
                    <span key={idx} className="text-primary-600 dark:text-primary-400">{word}</span>
                  ) : (
                    <span key={idx}> {word}</span>
                  )
                )}
              </h4>
              <p className="text-gray-900 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
