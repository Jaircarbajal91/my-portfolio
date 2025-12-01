import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Database, 
  Layers,
  Cloud
} from 'lucide-react'
import { skillsData } from '../data/content'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = {
    backend: {
      title: skillsData.backend.title,
      icon: <Code2 className="w-6 h-6" />,
      skills: skillsData.backend.skills
    },
    databases: {
      title: skillsData.databases.title,
      icon: <Database className="w-6 h-6" />,
      skills: skillsData.databases.skills
    },
    frontend: {
      title: skillsData.frontend.title,
      icon: <Layers className="w-6 h-6" />,
      skills: skillsData.frontend.skills
    },
    devops: {
      title: skillsData.devops.title,
      icon: <Cloud className="w-6 h-6" />,
      skills: skillsData.devops.skills
    }
  }

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>

  return (
    <section id="skills" ref={ref} className="section-padding bg-white dark:bg-slate-900">
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
          <p className="text-xl text-gray-900 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-600 dark:text-primary-400">
                  {skillCategories[category].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {skillCategories[category].title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillCategories[category].skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-slate-600 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
