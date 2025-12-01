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
    icon: value.icon === 'Code' ? <Code className="w-8 h-8 text-primary-600" /> :
          value.icon === 'Database' ? <Database className="w-8 h-8 text-primary-600" /> :
          value.icon === 'Zap' ? <Zap className="w-8 h-8 text-primary-600" /> :
          value.icon === 'Shield' ? <Shield className="w-8 h-8 text-primary-600" /> :
          <Code className="w-8 h-8 text-primary-600" />,
    title: value.title,
    description: value.description
  }))

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto">
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
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Story
            </h3>
            <div className="space-y-4 text-gray-900 dark:text-gray-300">
              {aboutContent.story.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph.trim()}
                </p>
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
                className="text-center p-6 card"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-900 dark:text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
                {value.title}
              </h4>
              <p className="text-gray-900 dark:text-gray-200">
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
