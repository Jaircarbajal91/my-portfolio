import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  Shield,
  Layers,
  Cpu,
  Cloud
} from 'lucide-react'
import { skillsData } from '../data/content'

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'databases' | 'programming' | 'frameworks' | 'tools'>('databases')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = {
    databases: {
      title: skillsData.databases.title,
      icon: <Database className="w-6 h-6" />,
      skills: skillsData.databases.skills
    },
    programming: {
      title: skillsData.programming.title,
      icon: <Code2 className="w-6 h-6" />,
      skills: skillsData.programming.skills
    },
    frameworks: {
      title: skillsData.frameworks.title,
      icon: <Layers className="w-6 h-6" />,
      skills: skillsData.frameworks.skills
    },
    tools: {
      title: skillsData.tools.title,
      icon: <Zap className="w-6 h-6" />,
      skills: skillsData.tools.skills
    }
  }

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
            className={`filter-btn flex items-center gap-2 ${
              activeCategory === category
                ? 'filter-btn-active'
                : 'filter-btn-inactive'
            }`}
            >
              {skillCategories[category].icon}
              {skillCategories[category].title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  skill.level === 'Expert' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : skill.level === 'Advanced'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : skill.level === 'Intermediate'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                }`}>
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: <Code2 className="w-8 h-8" />, name: 'Scalable Architecture' },
              { icon: <Database className="w-8 h-8" />, name: 'MES Systems' },
              { icon: <Shield className="w-8 h-8" />, name: 'ITAR Compliance' },
              { icon: <Layers className="w-8 h-8" />, name: 'ERP Integration' },
              { icon: <Cpu className="w-8 h-8" />, name: 'Query Optimization' },
              { icon: <Cloud className="w-8 h-8" />, name: 'Data Migration' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-4 skill-card hover:scale-105 transition-transform duration-200"
              >
                <div className="flex justify-center mb-3 text-primary-600">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
