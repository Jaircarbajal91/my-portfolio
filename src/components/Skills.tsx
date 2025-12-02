import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Database, 
  Layers,
  Cloud,
  Zap,
  Brain
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
      description: skillsData.backend.description,
      icon: <Code2 className="w-6 h-6" />,
      skills: skillsData.backend.skills,
      experience: '3+ years'
    },
    frontend: {
      title: skillsData.frontend.title,
      description: skillsData.frontend.description,
      icon: <Layers className="w-6 h-6" />,
      skills: skillsData.frontend.skills,
      experience: '2+ years'
    },
    databases: {
      title: skillsData.databases.title,
      description: skillsData.databases.description,
      icon: <Database className="w-6 h-6" />,
      skills: skillsData.databases.skills,
      experience: '3+ years'
    },
    integrations: {
      title: skillsData.integrations.title,
      description: skillsData.integrations.description,
      icon: <Zap className="w-6 h-6" />,
      skills: skillsData.integrations.skills,
      experience: '3+ years'
    },
    ai: {
      title: skillsData.ai.title,
      description: skillsData.ai.description,
      icon: <Brain className="w-6 h-6" />,
      skills: skillsData.ai.skills,
      experience: '2+ years'
    },
    devops: {
      title: skillsData.devops.title,
      description: skillsData.devops.description,
      icon: <Cloud className="w-6 h-6" />,
      skills: skillsData.devops.skills,
      experience: '2+ years'
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
        <div className="space-y-4 md:space-y-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 md:p-8 border border-transparent hover:border-primary-600/20 dark:hover:border-primary-400/20 transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-primary-600 dark:text-primary-400">
                  {skillCategories[category].icon}
                </div>
                <h3 className="text-xl xs:text-2xl font-bold text-gray-900 dark:text-white">
                  {skillCategories[category].title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-400 mb-4 ml-9">
                {skillCategories[category].experience}
              </p>
              <p className="text-gray-900 dark:text-gray-300 mb-4">
                {skillCategories[category].description}
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                {skillCategories[category].skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-200 border border-gray-200 dark:border-slate-600 transition-all duration-150 ease-in-out hover:bg-[rgba(255,255,255,0.08)] dark:hover:bg-[rgba(255,255,255,0.08)] hover:scale-[1.04]"
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
